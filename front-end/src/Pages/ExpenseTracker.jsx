import Navbar from "../Components/NavBar";
import classes from "./ExpenseTracker.module.css";
import { useRef } from "react";

const ExpenseTracker = () => {
  const amount = useRef();
  const description = useRef();
  const category = useRef();
  
  const formSubmitHandler = (e)=>{
    e.preventDefault();
    console.log(amount.current.value);
    console.log(description.current.value);
    console.log(category.current.options[category.current.selectedIndex].value);
  }


  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <form className={classes.takingexpenseinputcontainer} onSubmit={formSubmitHandler}>
          <div className={classes.innerformcontainer}>
            <div className={classes.amountcontainer}>
              <input className={classes.amountinput} ref={amount}></input>
            </div>
            <div className={classes.descriptioncontainer}>
              <input className={classes.descriptioninput} ref={description}></input>
            </div>
            <div className={classes.categorycontainer}>
              <select className={classes.categoryinput} ref={category}>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="shopping">Shopping</option>
                {/* <!-- Add more options as needed --> */}
              </select>
            </div>
          </div>
          <div className={classes.addexpensebutton}>
            <button className={classes.addexpensebuttoninput}>
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseTracker;
