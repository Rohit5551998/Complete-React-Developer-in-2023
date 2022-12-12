import {
  signInWithGooglePopUp, createUserDocumentFromAuth
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopUp();
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign In with Google Popup
      </button>
    </div>
  );
}

export default SignIn;