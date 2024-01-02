import classes from "./CompleteProfile.module.css";
import { useRef, useEffect } from "react";

const API_KEY = process.env.FIREBASE_API_KEY;

const CompleteProfile = (props) => {
  const fullnameRef = useRef();
  const profilephotoRef = useRef();

  const fetchData = async () => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDiXvbx7sw1MpwXHtD_J2tEFwNmrrd7nUA`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: localStorage.getItem("idToken"),
        }),
      }
    );
    const data = await response.json();
    console.log("updated data response", data)
  };

  useEffect(() => {
    fetchData();
    
  }, []);

  const updateDetailsHandler = async (event) => {
    event.preventDefault();

    const enteredFullname = fullnameRef.current.value;
    const enteredProfilePhoto = profilephotoRef.current.value;

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDiXvbx7sw1MpwXHtD_J2tEFwNmrrd7nUA`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: localStorage.getItem("idToken"),
          displayName: enteredFullname,
          photoUrl: enteredProfilePhoto,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    // Handle the response here
  };

  return (
    <>
      <div className={classes.messageContainer}>{props.message}</div>
      <form
        className={classes.completeProfileForm}
        onSubmit={updateDetailsHandler}
      >
        <label htmlFor="fullname">Full Name</label>
        <input id="fullname" type="text" ref={fullnameRef} />
        <label htmlFor="profilephoto">Profile Photo Url</label>
        <input id="profilephoto" type="text" ref={profilephotoRef} />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default CompleteProfile;
