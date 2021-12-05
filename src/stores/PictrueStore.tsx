import Storage from "@aws-amplify/storage";
import { Filesystem } from "@capacitor/filesystem";
import { action, makeObservable, observable } from "mobx";
import RootStore from "./RootStore";

// wrap up crud to aws s3 buckets
class PictureStore {
  profileurl: string = "";
  profilethumbnailurl: string = "";
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    console.log(this.rootStore.userStore);
    console.log("PictureStore created");
    makeObservable(this, {
      profileurl: observable,
      profilethumbnailurl: observable,

      getProfilePic: action,
    });
  }

  uploadProfilePic = async (file: string) => {
    // upload to aws s3
    let postfix = file.split(".").pop();
    let contentType = "image/" + postfix === "jpg" ? "jpeg" : postfix;

    const regex = /[,/:]/g; // replace unwanted characters

    let profilepic =
      "photo-" +
      new Date()
        .toLocaleString()
        .replaceAll(regex, "-")
        .replaceAll(" ", "") +
      "." + postfix;

    // readFile() returns base64 string by default
    await Filesystem.readFile({
      path: file,
    })
      .then(async (base64) => {
        // create base64 buffer
        let buf = Buffer.from(base64.data, "base64");
        await Storage.put(
          "profilepic/originals/" + profilepic,
          buf,
          {
            level: "protected",
            contentType: contentType,
            contentEncoding: "base64",
            progressCallback(progress) {
              console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
            },
          }
        )
          .then((result) => {
            console.log(result);
            this.rootStore.userStore.setProfilePic(profilepic);
          })
          .catch(err => console.log(err)); // let's hope that this works!
      }).catch(err => console.log(err));
  };

  getProfilePic = async (isThumbnail: Boolean) => {
    // get profile pic from aws s3
    let prefix = isThumbnail ? "profilepic/thumbnails/thumbnail-" : "profilepic/originals/";
    let url = "";
    await Storage.get(
      prefix + this!.rootStore!.userStore!.userData!.profile,
      {
        level: "protected",
      }
    )
      .then(
        (result) => {
          url = result;
        })
      .catch(
        (err) => {
          console.log(err);
        });
    if (isThumbnail) {
      this.profilethumbnailurl = url;
    } else {
      this.profileurl = url;
    }
  }
}
export default PictureStore;
