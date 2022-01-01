import RootStore from "./RootStore";
import { action, autorun, makeObservable, observable } from "mobx";
import { Comment } from "../models";
import { DataStore } from "aws-amplify";
import { ArtWork } from "../models";

class CommentStore {
  rootStore: RootStore;

  comments: Comment[] = [];
  commentIDs: string[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      comments: observable,

      initialize: action,
      addComment: action,
    });
    autorun(async () => {
      if (this.rootStore.userStore.userData != null &&
        this.rootStore.artworkStore.artworks.length > 0) {
        this.initialize();
        console.log("CommentStore created");
      }
    })
  }

  initialize = async () => {
    for (const artwork of this.rootStore.artworkStore.artworks) {
      if (artwork.Comments === undefined) { // probably relationship not set up
        try {
          const comments = await DataStore.query(Comment);
          for (const comment of comments) {
            if (artwork.id === comment.artworkID &&
              this.commentIDs.includes(comment.id) === false) {
              this.commentIDs.push(comment.id);
              this.comments.push(comment);
            }
          }
        } catch (err) {
          console.log(err);
        }

        // await DataStore.save(ArtWork.copyOf(artwork, item => { item.Comments = comments }));
      } else {
        for (const comment of artwork.Comments) {
          if (comment !== null && !this.commentIDs.includes(comment.id)) {
            this.commentIDs.push(comment.id);
            this.comments.push(comment);
          }
        }
      }
    }
  }


  addComment = async (
    artworkID: string,
    message: string,
    submitTime: string,
    studentId: string | undefined,
    teacherId: string | undefined,
  ) => {

    const comment = new Comment({
      "message": message,
      "artworkID": artworkID,
      "submitTime": submitTime,
      "studentID": studentId,
      "teacherID": teacherId,
    });
    this.comments.push(comment);
    this.commentIDs.push(comment.id);
    await DataStore.save(comment);
  }

}

export default CommentStore;
