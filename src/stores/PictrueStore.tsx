import Storage from "@aws-amplify/storage";
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
    await Storage.put(
      username + "." + postfix, // user(unique id) + file extension
      file, // path to file
      {
        contentType: contentType,
        customPrefix: { public: "profilepic/" }
      }
    )
      .catch(err => console.log(err)); // let's hope that this works!
  }
}
export default PictureStore;
