import { DataStore } from '@aws-amplify/datastore';
import { observable, makeObservable, action } from 'mobx';
import { Class, Teacher, Student, StudentClass, ArtWork, Assignment } from '../models';
import RootStore from './RootStore';




class ClassStore {
  rootStore: RootStore;
  classes: Class[] = [];
  classIDs: string[] = [];
  isLoading: boolean = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    console.log(this)
    makeObservable(this, {
      isLoading: observable,
      classes: observable,
      rootStore: false,

      initialize: action,
      addClass: action
    });

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
        let tmp: Class[] = [];
        const models = await DataStore.query(Class);
        // iterate through all classes
        for (const classItem of models) {
          for (const student of classItem.students!) {
            if (student !== null && student.id === studentInfo.id) {
              this.classIDs.push(classItem.id);
              this.classes.push(classItem);
              tmp.push(classItem);
            }
          }
        }

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
  }

  addClass = async (className : string, classDescription: string) => {
    // only teachers can add classes
    const newClass = new Class({
      name: className,
      description: classDescription,
      teacherID: this.rootStore.userStore.userData?.id as string,
      Assignments: [] as Assignment[],
      startDate: new Date().toLocaleString(),
      ArtWorks: [] as ArtWork[],
      students: [] as StudentClass[]
    });
    this.classes.push(newClass);
    await DataStore.save(newClass);
  }

  joinClass = async () => {
    // only students can join classes
  }

  leaveClass = async () => {
    // only students can leave classes
  }

}


export default ClassStore;
