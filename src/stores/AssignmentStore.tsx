import { DataStore } from "aws-amplify";
import { action, autorun, makeObservable, observable } from "mobx";
import { Assignment } from "../models";
import RootStore from "./RootStore";

class AssignmentStore {
  rootStore: RootStore;

  assignments: Assignment[] = [];
  assignmetnIDs: string[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      assignments: observable,
      initialize: action,
      addAssignment: action,
      deleteAssignment: action,
    });

    autorun(() => {
      if (this.rootStore.userStore.userData !== null &&
        this.rootStore.classStore.classes.length > 0) {
        this.initialize();
        console.log("AssignmentStore created");
        // console.log(this.assignments);
      }
    })

  }

  initialize = async () => {
    if (this.rootStore.classStore.classes.length > 0) {
      for (const classItem of this.rootStore.classStore.classes) {
        if (classItem.Assignments === undefined) {
          console.log(classItem)
          const assignments = await DataStore.query(Assignment);
          for (const assn of assignments) {
            if (assn.classID === classItem.id) {
              this._addAssignment(assn);
              console.log(this.assignments)
            }
          }
          // await DataStore.save(Class.copyOf(
          //   classItem, item => {
          //     item.Assignments = [...this.assignments.filter(assn => assn.classID === classItem.id)];
          //   }
          // ));
        }
      }
    }
  }

  addAssignment = async (
    classId: string,
    description: string,
    openTime: string,
    dueDate: string,
  ) => {
    console.log("addAssignment");
    // if (this.assignments.filter(
    //   assn => assn.classID === classId).length > 0) {
      const assn = new Assignment({
        "description": description,
        "openTime": openTime,
        "deadline": dueDate,
        "ArtWorks": [],
        "classID": classId,
      });
      this._addAssignment(assn);
      await DataStore.save(assn);
  }

  _addAssignment = (assn: Assignment) => {
    if (this.assignmetnIDs.includes(assn.id) === false) {
      this.assignmetnIDs.push(assn.id); // already dealt with this assignment
      this.assignments.push(assn);
    }
  }

  deleteAssignment = async (classId: string, assignmentId: string) => {

  }
}

export default AssignmentStore;
