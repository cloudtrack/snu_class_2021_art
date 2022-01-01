import { DataStore } from "aws-amplify";
import { action, autorun, makeObservable, observable } from "mobx";
import { Assignment } from "../models";
import { ArtWork } from "../models";
import RootStore from "./RootStore";

class ArtWorkStore {
  rootStore: RootStore;

  artworks: ArtWork[] = [];
  artworkIDs: string[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    autorun(() => {
      if (this.rootStore.userStore.userData != null &&
        this.rootStore.assignmentStore.assignments.length > 0) {
        this.initialize();
        console.log("ArtWorkStore created");
      }
    });

    makeObservable(this, {
      artworks: observable,
      initialize: action,
      rootStore: false
    });
  }


  initialize = async () => {
    if (this.rootStore.assignmentStore.assignments.length > 0) {
      for (const assignment of this.rootStore.assignmentStore.assignments) {
        if (assignment.ArtWorks === undefined) {
          const artworks = await DataStore.query(ArtWork);
          for (const artwork of artworks) {
            if (artwork.assignmentID === assignment.id) {
              if (this.artworkIDs.includes(artwork.id) === false) {
                this.artworkIDs.push(artwork.id);
                this.artworks.push(artwork);
              }
            }
          }
          await DataStore.save(Assignment.copyOf(
            assignment, item => {
              item.ArtWorks = [...this.artworks.filter(artwork => artwork.assignmentID === assignment.id)];
            }
          ));
        }
      }
    }
  }

  addArtWork = async (assnID: string, studentID: string, img: string) => {
    const artworkIndex = this.artworks.findIndex(
      artwork => artwork.assignmentID === assnID &&
      artwork.studentID === studentID
      );
    if (artworkIndex < 0) {
      const artwork = new ArtWork({
        assignmentID: assnID,
        studentID: studentID,
        image: img,
        likedUsers: [],
      });
      this.artworks.push(artwork);
      this.artworkIDs.push(artwork.id);
      await DataStore.save(artwork);
    } else {
      const oldArtWork = this.artworks.splice(artworkIndex, 1);
      this.artworkIDs.splice(artworkIndex, 1);

      const artwork = new ArtWork({
        assignmentID: assnID,
        studentID: studentID,
        image: img,
        likedUsers: []
      });
      this.artworks.push(artwork);
      this.artworkIDs.push(artwork.id);
      await DataStore.delete(oldArtWork[0]);
      await DataStore.save(artwork);
    }
  }

  updateArtWorkGrade = async (artwork: ArtWork, grade: number) => {
    const newArtWork = ArtWork.copyOf(artwork, item => {
      item.grade = grade;
    });
    const artworkIndex = this.artworks.findIndex(
      artwork => artwork.id === newArtWork.id
      );
    this.artworks.splice(artworkIndex, 1, newArtWork);
    this.artworkIDs.splice(artworkIndex, 1, newArtWork.id);
    await DataStore.save(newArtWork);
  }

}

export default ArtWorkStore;
