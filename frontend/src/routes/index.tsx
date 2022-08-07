import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import RegisterPage from "../pages/register";

const Routes = () => {

  return (
    <Switch>
      <Route component={RegisterPage} exact path='/'/>
      <Route component={Dashboard} exact path='/dashboard'/>
    </Switch>
  )
};

export default Routes;