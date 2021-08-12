import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";

import Navbar from "./Navbar";



import Breathe from "./Breathe";


import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


const App =() => {


    return (
          <Router>
          <Navbar />
          <Switch>
              <Route exact path= "/" component={Home} />
              <Route exact path= "/service" component={Service} />
              <Route exact path= "/contact" component={Contact} />
              
              <Route exact path= "/breathe" component={Breathe} />
              <Redirect to="/" />
          </Switch>
          </Router>
    );
};

export default App;
