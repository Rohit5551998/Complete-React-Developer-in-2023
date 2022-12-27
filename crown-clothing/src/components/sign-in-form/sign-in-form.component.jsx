import "./sign-in-form.styles.scss";

// import { useContext, useState } from "react";
import { useState } from "react";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

// import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: '',
  password: '', 
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log(formFields);
  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // const response = await signInAuthUserWithEmailAndPassword(email, password);
      // console.log(response);
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user); Centeralized Authentication in User Context File
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password for Email");
          break;
        case "auth/user-not-found":
          alert("No User associated with this Email");
          break;
        default:
          console.log(error);
      }
    }

  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
    // const { user } = await signInWithGooglePopUp();
    // setCurrentUser(user);
    // await createUserDocumentFromAuth(user);
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your Email and Password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div >
  );
}

export default SignInForm;