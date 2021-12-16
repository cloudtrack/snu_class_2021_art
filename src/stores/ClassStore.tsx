import { DataStore } from '@aws-amplify/datastore';
import { observable, makeObservable, action, autorun } from 'mobx';
import { async } from 'rxjs';
import { Class, Teacher, Student, StudentClass, ArtWork, Assignment } from '../models';
import RootStore from './RootStore';


class ClassStore {
  rootStore: RootStore;
  allClasses: Class[] = [];
  classes: Class[] = [];
  classIDs: string[] = [];
  relatedStudents: Student[] = [];
  isLoading: boolean = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    console.log(this)
    makeObservable(this, {
      isLoading: observable,
      classes: observable,
      relatedStudents: observable,
      rootStore: false,

      initialize: action,
      addClass: action,
      getStudent: action,
    });

    autorun(() => {
      if (this.rootStore.userStore.userData !== null && (
        this.rootStore.userStore.userData.role === "teacher" ||
        this.rootStore.userStore.userData.role === "student"
      )) {
        this.initialize();
      }
    })
  }

  initialize = async () => {
    this.isLoading = true;
    // Teacher : load classes opened by current user
    if (this.rootStore.userStore.userData?.role === 'teacher') {
      const teacherInfo: Teacher = this.rootStore.userStore.userData;
      console.log("current teacher: ")
      console.log(teacherInfo)
      // if already documented in userinfo
      if (teacherInfo.ClassesOpened !== undefined &&
        teacherInfo.ClassesOpened.length > 0) {
        console.log("fetching from user info")
        const classOpened = teacherInfo.ClassesOpened as Class[];
        this.classes = classOpened.map(obj => ({ ...obj }));
        this.classIDs = classOpened.map(classItem => classItem.id as string);
      }
      // else fetch from backend
      else {
        console.log("fetching from backend")
        let classOpened: Class[] = [];
        const models = await DataStore.query(Class);
        // iterate through all classes
        for (const classItem of models) {
          this.allClasses.push(classItem);
          // if the class is in the teacher's list of classes
          if (classItem.teacherID === teacherInfo.id
            && this.classIDs.includes(classItem.id) === false) {
            this.classIDs.push(classItem.id);
            this.classes.push(classItem);
            classOpened.push(classItem);
          }
        }

        console.log("class opened: ");
        console.log(classOpened);

        if (classOpened.length > 0) {
          await DataStore.save(Teacher.copyOf(teacherInfo, item => {
            item.ClassesOpened = classOpened;
          }));
        }

      }
    }
    // Student : load classes joined by current user
    else if (this.rootStore.userStore.userData?.role === 'student') {
      const studentInfo: Student = this.rootStore.userStore.userData;
      console.log("current student: ")
      console.log(studentInfo)
      if (studentInfo.ClassJoined !== undefined
        && studentInfo.ClassJoined.length > 0) {
        // iterate trough class joined and get class info
        studentInfo.ClassJoined.forEach(
          (studentClass: StudentClass | null) => {
            if (studentClass !== null) {
              this.classes.push(studentClass.class);
              this.classIDs.push(studentClass.class.id);
            }
          }
        );
      }
      // fetch from backend
      else {
        console.log("fetching from backend")
        const ac = await DataStore.query(Class);
        for (const classItem of ac) {
          this.allClasses.push(classItem);
        }
        let tmp: Class[] = [];
        const models = await DataStore.query(StudentClass);
        // iterate through all classes
        models.filter(
          (studentClass: StudentClass) => studentClass.student.id === studentInfo.id
        ).forEach(
          (studentClass: StudentClass) => {
            this.classes.push(studentClass.class);
            this.classIDs.push(studentClass.class.id);
            tmp.push(studentClass.class);
          }
        )

        console.log("class joined: ");
        console.log(tmp);

        const classJoined = tmp.map(classItem => {
          return new StudentClass({
            student: studentInfo,
            class: classItem
          })
        });

        if (classJoined.length > 0) {
          await DataStore.save(Student.copyOf(studentInfo, item => {
            item.ClassJoined = classJoined;
          }));
        }
      }
    } else {
      console.log('role not defined');
    }
    this.isLoading = false;
    console.log("all classes: ")
    console.log(this.allClasses)
  }

  addClass = async (className: string, classDescription: string) => {
    // only teachers can add classes
    const newClass = new Class({
      name: className,
      description: classDescription,
      teacherID: this.rootStore.userStore.userData?.id as string,
      Assignments: [] as Assignment[],
      startDate: new Date().toISOString(),
      ArtWorks: [] as ArtWork[],
      students: [] as StudentClass[]
    });
    console.log(newClass);
    console.log("current classes: ");
    console.log(this.classes);
    this.classes.push(newClass);
    console.log("new classes: ");
    console.log(this.classes);
    await DataStore.save(newClass);
  }

  joinClass = async (classItem: Class) => {
    console.log("try to join class: ");
    // only students can join classes
    const newSC = new StudentClass({
      student: this.rootStore.userStore.userData as Student,
      class: classItem
    });
    this.classes.push(classItem);
    this.classIDs.push(classItem.id);

    await DataStore.save(
      Class.copyOf(classItem,
        item => {
          (item.students === undefined) ? item.students = [] : item.students.push(newSC);
        })
    );
    await DataStore.save(
      Student.copyOf(this.rootStore.userStore.userData as Student,
        item => {
          item.ClassJoined === undefined ? item.ClassJoined = [] : item.ClassJoined.push(newSC);
        })
    );
    await DataStore.save(
      newSC
    );
    console.log(this.classes);
  }

  leaveClass = async () => {
    // only students can leave classes
  }

  getStudent = async (assn: Assignment) => {
    const classId = assn.classID as string;
    const sc = await DataStore.query(StudentClass);
    const students = sc.filter(
      (studentClass: StudentClass) => studentClass.class.id === classId
    ).map(
      (studentClass: StudentClass) => {
        return studentClass.student;
      }
    );
    this.relatedStudents = students;
  }

}


export default ClassStore;
