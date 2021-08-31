import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Admin from "./components/Admin";
import NavBar from "./components/NavBar";
import Users from "./components/Users";




const MyRouter = () => {
  return (
    <Router>
        <NavBar />
      <Switch>
        <Route exact path="/users/:userId" component={Users} />
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
};

export default MyRouter;
