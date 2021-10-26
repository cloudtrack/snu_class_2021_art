
import Amplify, { Auth } from "aws-amplify";
import { makeAutoObservable } from "mobx";
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);

class UserStore {

  private rootStore;

  user : any

  constructor(rootStore: any) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }


  async signUp(username: string, password:string) {
    console.log("yooooo signing up userstore")
      await Auth.signUp(username, password)
          .then((user) => {
            this.user = user
            console.log(user)
          })
          .catch((error) => {
            console.log('error signing up:', error)
          });
  }

  async signIn(username: string, password: string) {
    await Auth.signIn(username, password).then(
      user => {
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          Auth.completeNewPassword(
            user,               // the Cognito User Object
            password,       // the new password
          ).then(user => {
            // at this time the user is logged in if no MFA required
            this.user = user
            console.log(user);
          }).catch(e => {
            console.log(e);
          });
        }
      }).catch(e => {
        console.log(e);
      })
  }
}



export default UserStore;


// async function confirmSignUp() {
//     try {
//         await Auth.confirmSignUp(username, code);
//     } catch (error) {
//         console.log('error confirming sign up', error);
//     }
// }

// async function signIn() {
//     try {
//         const user = await Auth.signIn(username, password);
//     } catch (error) {
//         console.log('error signing in', error);
//     }
// }

// async function signOut() {
//     try {
//         await Auth.signOut();
//     } catch (error) {
//         console.log('error signing out: ', error);
//     }
// }
// class RegisterModel {

//     async signIn(params : any) {
//         try {
//             const user = await Auth.signIn(params);
//             return user;
//         } catch (error) {
//             console.log('error signing in', error);
//         }
//     }

// }
