import link from "react-router-dom"
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./NavBar.module.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";



const Navbar = () => {
    return (<div className={classes.navbar}>
        <div className={classes.websitename}>
            EXPENSE MANAGER
        </div>
        <div>
            <Link to="/">contact us</Link>
        </div>
    </div>);
}
 
export default Navbar;