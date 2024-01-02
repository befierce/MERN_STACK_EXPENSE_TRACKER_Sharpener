import FormSubmitButton from "../Components/FormSubmitButton";
import classes from "./SignUp.module.css";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignUpLogIn = () => {
  const history  = useHistory();
  const [logInState, setLogInState] = useState(true);
  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();

  const toggleLoginState = () => {
    setLogInState((prevState) => !prevState);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (
        !logInState &&
        passwordInput.current.value !== confirmPasswordInput.current.value
      ) {
        throw new Error("Passwords do not match");
      }

      const email = emailInput.current.value;
      const password = passwordInput.current.value;
      let url;

      if (logInState) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDiXvbx7sw1MpwXHtD_J2tEFwNmrrd7nUA";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDiXvbx7sw1MpwXHtD_J2tEFwNmrrd7nUA";
      }

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      

      if (!response.ok) {
        
        throw new Error("Authentication failed");
      }
      if(response.ok && logInState){
        const data = await response.json();
        localStorage.setItem("idToken",data.idToken)
        history.push("/complete-profile-page")
      }

      if (!logInState) {
        setLogInState((prevState) => !prevState);
        confirmPasswordInput.current.value = "";
      }

      emailInput.current.value = "";
      passwordInput.current.value = "";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={classes.formcontainer}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <p>{logInState ? "Welcome!! Please LogIn" : "Welcome!! Please SignUp"}</p>
        <input className={classes.input} ref={emailInput}></input>
        <input className={classes.input} ref={passwordInput}></input>
        {!logInState ? (
          <input className={classes.input} ref={confirmPasswordInput}></input>
        ) : (
          ""
        )}
        <div className={classes.clickableLine} onClick={toggleLoginState}>
          <div className={classes.line}></div>
          <span className={classes.toggleSignUpToLogIn}>
            {logInState
              ? "New user? Click here to SignUp"
              : "Already a user? Click here to LogIn"}
          </span>
          <div className={classes.line}></div>
        </div>
        <FormSubmitButton description={logInState ? "LogIn" : "SignUp"} />
      </form>
    </div>
  );
};

export default SignUpLogIn;
 