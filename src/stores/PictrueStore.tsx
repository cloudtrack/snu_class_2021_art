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
    let contentType = "image/" + postfix === "jpeg" ? "jpg" : postfix;
    let username = this.rootStore?.userStore?.user?.getUsername()!;

    let profilepic = username + "." + postfix;

    await Filesystem.readFile({
      path: file,
    })
      .then(async (base64) => {
        await Storage.put(
          profilepic, // user(unique id) + file extension
          base64.data, // should not be file, base64string?
          {
            level: "public",
            contentType: contentType,
            contentEncoding: "base64",
            customPrefix: { public: "profilepic/originals/" },
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
