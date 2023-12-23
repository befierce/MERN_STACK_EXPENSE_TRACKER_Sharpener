import classes from "./FormSubmitButton.module.css"

const FormSubmitButton = (props) => {
    // const logInSignUpHandler = (event)=>{
    //   event.preventDefault();
    //   // fetch()
      
    // }

  return (
    <>
      <button className={classes.bb}>{props.description}</button>
    </>
  );
};

export default FormSubmitButton;
