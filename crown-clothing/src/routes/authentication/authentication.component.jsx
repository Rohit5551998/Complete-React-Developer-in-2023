// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
// auth,
// signInWithGooglePopUp,
// signInWithGoogleRedirect,
// createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.util";
import './authentication.styles.scss';
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {

  // useEffect(() => async () => {
  //   const response = await getRedirectResult(auth);

  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }

  // }, []);

  // const logGoogleUser = async () => {
  //   // const response = await signInWithGooglePopUp();
  //   const { user } = await signInWithGooglePopUp();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // }
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  // }

  return (
    <div className="authentication-container">
      {/* <h1>Sign In Page</h1> */}
      {/* <button onClick={logGoogleUser}>
        Sign In with Google Popup
      </button> */}
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={logGoogleRedirectUser}>
        Sign In with Google Redirect
      </button> */}
    </div>
  );
}

export default Authentication;