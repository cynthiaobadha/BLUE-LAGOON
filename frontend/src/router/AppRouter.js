import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateUser from "../components/users";
import Doctors from "../component/doctors"
import Navbar from "../component/navbar"
import Hero from "../component/Hero";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Hero}/>
          <Route path = "/CreateUser" component={CreateUser}/>
          <Route path = "/Doctors" component={Doctors}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;