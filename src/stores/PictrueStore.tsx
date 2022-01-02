import Storage from "@aws-amplify/storage";
import { Filesystem } from "@capacitor/filesystem";
import { action, autorun, makeObservable, observable } from "mobx";
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
      uploadProfilePic: action,
    });
    autorun(() => {
      if (this.rootStore.userStore.userData?.profile != null) {
        this.getProfilePic(true);
        this.getProfilePic(false);
      }
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
    if (this.rootStore.userStore.userData?.profile != null) {
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
    };
    if (isThumbnail) {
      this.profilethumbnailurl = url;
    } else {
      this.profileurl = url;
    }
  }

  uploadPicture = async (file: string, pic : string) => {
    // upload to aws s3
    let postfix = file.split(".").pop();
    let contentType = "image/" + postfix === "jpg" ? "jpeg" : postfix;

    // readFile() returns base64 string by default
    await Filesystem.readFile({
      path: file,
    })
      .then(async (base64) => {
        // create base64 buffer
        let buf = Buffer.from(base64.data, "base64");
        await Storage.put(
          "assn/" + pic,
          buf,
          {
            level: "public",
            contentType: contentType,
            contentEncoding: "base64",
            progressCallback(progress) {
              console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
            },
          }
        )
          .then((result) => {
            console.log(result);
            // this.rootStore.userStore.setProfilePic(pic);
          })
          .catch(err => console.log(err)); // let's hope that this works!
      }).catch(err => console.log(err));
  }

}

export default PictureStore;

export const getImgLinkCached = async (key: string) => {
  // const cachedImage = Cache.getItem(key);
  // console.log(cachedImage);
  // if (cachedImage) {
  //   console.log('Cache hit: ', key);
  //   return cachedImage;
  // }
  console.log('Cache miss: ', key);
  const url = await Storage.get(
    key, {
    level: "public",
  });
  // if (url !== null) {
  //   Cache.setItem(key, url);
  // }
  return url;
}
