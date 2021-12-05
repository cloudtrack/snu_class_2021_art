import Storage from "@aws-amplify/storage";
import { Filesystem } from "@capacitor/filesystem";
import RootStore from "./RootStore";

// wrap up crud to aws s3 buckets
class PictureStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    console.log(this.rootStore.userStore);
    console.log("PictureStore created");
  }

  uploadPicture = async (file: string) => {
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
}
export default PictureStore;
