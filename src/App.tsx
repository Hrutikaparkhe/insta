import Facebook from '@mui/icons-material/Facebook';
import React from 'react';
import Layout from './components/Layout/Layout';
import Facebook1 from './components/LogIn/Facebook/Facebook';
import { Switch, Route, Router } from "react-router-dom";
import history from './components/history';
import { useState } from "react";
import Header from './components/LogIn/Facebook/Header/Header';
// import Layout from './components/Layout/Layout';
import logo from './logo.svg';
import Home from './components/Home/Home';

const App = () => {
return(
 <>
 <Switch>
 <Route
          exact
          path="/"
          component={() => <Layout  />}
        />
 <Route
          exact
          path="/fblogin"
          component={() => <Facebook1  />}
        />

<Route
          exact
          path="/login"
          component={() => <Home />}
        />
 </Switch>
  {/* <Layout/>  */}
  {/* <Header/> */}
  {/* <Facebook1/> */}
   </> 
 
)
}


export default App;
