import FormSubmitButton from "../Components/FormSubmitButton";
import classes from "./SignUp.module.css";
import { useState, useRef } from "react";
import axios from "axios";

const SignUpLogIn = () => {
  const [logInState, setLogInState] = useState(true);
  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();
  const toggleLoginState = () => {
    setLogInState((prevstate) => !prevstate);
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (!logInState && passwordInput.current.value !== confirmPasswordInput.current.value) {
      alert("passwords do not match");
    }
    const data = {
      email: emailInput.current.value,
      password: passwordInput.current.value
    };
    if(logInState){
      const response = await axios.post('http://localhost:4000/user/login', data);
      console.log("login request sent")
      if(response.status === 202){
        alert("sucsess login")
      }
      else if(response.status === 203){
        alert("user not found!! please log in!!")
      }

      emailInput.current.value = "";
      passwordInput.current.value = "";

      
    }else{
      const response = await axios.post('http://localhost:4000/user/signup', data)
      console.log(response);
      emailInput.current.value = "";
      passwordInput.current.value = "";
      confirmPasswordInput.current.value = "";
    }
    
  };
  return (
    <>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <p>
          {logInState ? "Welcome!! please LogIn" : "Welcome!! please SignUp"}
        </p>
        <input className={classes.input} ref={emailInput}></input>
        <input className={classes.input} ref={passwordInput}></input>
        {!logInState ? <input className={classes.input} ref={confirmPasswordInput}></input> : ""}
        <div className={classes.clickableLine} onClick={toggleLoginState}>
          <div className={classes.line}></div>
          <span className={classes.toggleSignUpToLogIn}>
            {logInState
              ? "New user? click here to SignUp"
              : "Already a user? click here to LogIn"}
          </span>
          <div className={classes.line}></div>
        </div>
        <FormSubmitButton description={logInState ? "LogIn" : "SignUp"} />
      </form>
    </>
  );
};

export default SignUpLogIn;
