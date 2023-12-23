import SignUpLogIn from "./Pages/SignUp";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ExpenseTracker from "./Pages/ExpenseTracker";

// const router = createBrowserRouter([
//   {
//     path: "/", element: <SignUpLogIn/>
//   }
// ])

function App() {
  return (
    <div>
      <Switch>
        <Route path="/expense-tracker">
          <ExpenseTracker />
        </Route>
        <Route path="/">
          <SignUpLogIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
