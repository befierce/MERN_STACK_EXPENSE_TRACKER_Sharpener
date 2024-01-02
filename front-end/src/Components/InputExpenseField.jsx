import classes from "./InputExpenseField.module.css";
import Navbar from "./NavBar";
import FormSubmitButton from "./FormSubmitButton";
import { useRef } from "react";

const InputExpenseField = () => {
  const amount = useRef();
  const description = useRef();
  const category = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      amount: amount.current.value,
      description: description.current.value,
      category: category.current.options[category.current.selectedIndex].value,
    };
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <form
          className={classes.takingexpenseinputcontainer}
          onSubmit={formSubmitHandler}
        >
          <div className={classes.innerformcontainer}>
            <div className={classes.amountcontainer}>
              <input
                className={classes.amountinput}
                ref={amount}
                placeholder="0.00$"
              ></input>
            </div>
            <div className={classes.descriptioncontainer}>
              <input
                className={classes.descriptioninput}
                ref={description}
                placeholder="eg. Nike Shoes and Socks"
              ></input>
            </div>
            <div className={classes.categorycontainer}>
              <select className={classes.categoryinput} ref={category}>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="shopping">Shopping</option>
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
      {/* <DisplayExpense /> */}
    </>
  );
};

export default InputExpenseField;
