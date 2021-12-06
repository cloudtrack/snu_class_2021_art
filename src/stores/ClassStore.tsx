import { DataStore } from '@aws-amplify/datastore';
import { observable, makeObservable } from 'mobx';
import { Class, Teacher, Student, StudentClass } from '../models';
import RootStore from './RootStore';




class ClassStore {
  rootStore: RootStore;
  classes: (Class | null)[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    if (this.rootStore.userStore.userData?.role === 'teacher') {
      const teacherInfo: Teacher = this.rootStore.userStore.userData;
      if (teacherInfo.ClassesOpened !== undefined) {
        this.classes = teacherInfo.ClassesOpened;
      }
    } else if (this.rootStore.userStore.userData?.role === 'student') {
      const studentInfo: Student = this.rootStore.userStore.userData;
      if (studentInfo.ClassJoined !== undefined) {
        // iterate trough class joined and get class info
        studentInfo.ClassJoined.forEach(
          (studentClass: StudentClass | null) => {
            if (studentClass !== null) {
              this.classes.push(studentClass.class);
            }
          }
        );
      }
    } else {
      console.log('role not defined');
    }

    this.classes = [];

    makeObservable(this, {
      classes: observable,
      rootStore: false
    });

  }

  addClass = async () => {
    // only teachers can add classes
    // await DataStore.save(
    //   new Class({
    //   })
    // );
  }

  joinClass = async () => {
    // only students can join classes
  }

  leaveClass = async () => {
    // only students can leave classes
  }

}


export default ClassStore;
