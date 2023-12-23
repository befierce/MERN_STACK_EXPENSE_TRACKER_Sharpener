import SignUpLogIn from "./Pages/SignUp";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Pages/Home";

// const router = createBrowserRouter([
//   {
//     path: "/", element: <SignUpLogIn/>
//   }
// ])

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">

        
          <Home />
        </Route>
        <Route path="/">
          <SignUpLogIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
