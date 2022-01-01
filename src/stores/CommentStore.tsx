import RootStore from "./RootStore";
import { action, autorun, makeObservable, observable } from "mobx";
import { Comment } from "../models";
import { DataStore } from "aws-amplify";
import { ArtWork } from "../models";

class CommentStore{
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
        autorun(() => {
            if (this.rootStore.userStore.userData !== null &&
              this.rootStore.classStore.classes.length > 0) {
              this.initialize();
              console.log("CommentStore created");
              // console.log(this.assignments);
            }
          })
        }
        initialize = async () => {
            if (this.rootStore.commentStore.comments.length > 0) {
                for (const artwork of this.rootStore.artworkStore.artworks) {
                  if (artwork.Comments === undefined) {
                    const comments = await DataStore.query(Comment);
                    for (const comment of comments) {
                      if (comment.artworkID === artwork.id) {
                        if (this.commentIDs.includes(comment.id) === false) {
                          this.commentIDs.push(comment.id);
                          this.comments.push(comment);
                        }
                      }
                    }
                    await DataStore.save(ArtWork.copyOf(
                      artwork, item => {
                        item.Comments = [...this.comments.filter(comment => comment.artworkID === artwork.id)];
                      }
                    ));
                  }
                }
              }
        }
        addComment = async (
            artworkID: string,
            comment: string,
            submitTime: string,
            studentId: string,
            teacherId: string,
          ) => {
            console.log("addAssignment");
            // if (this.assignments.filter(
            //   assn => assn.classID === classId).length > 0) {
              const assn = new Comment({
                "message": comment,
                "artworkID": artworkID,
                "submitTime": submitTime,
                "studentID": studentId,
                "teacherID": teacherId,
              });
              await DataStore.save(assn);
          }

}

export default CommentStore;