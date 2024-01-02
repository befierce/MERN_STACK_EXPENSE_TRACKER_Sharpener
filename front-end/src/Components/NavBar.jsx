import link from "react-router-dom";
import icon from "./switch.png";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    const loginLogoutHandler=()=>{
    }


  return (
    <div className={classes.navbar}>
      <div className={classes.websitename}> ExpenseTracker</div>
      <div className={classes.navbarLinks}>
        <Link to="/">contact us</Link>
      </div>
      <div className={classes.profileAndLogOutButton}>
        <div></div>
        <div>
          <img
            className={classes.logOutButton}
            src={icon}
            alt="Logout"
            title="Logout"
          onClick={loginLogoutHandler}></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
