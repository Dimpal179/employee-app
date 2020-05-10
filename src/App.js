import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

import './App.css';

import { Home } from './Components/Home'
import { Department } from './Components/Department'
import { Employee } from './Components/Employee'
import { Registration } from './Components/Registration'
import { Login } from './Components/Login'
/* new version
let Login=require('./Components/Login') */
import { Contact } from './Components/Contact'
import {Navbar} from './Components/Navbar'
import {Header} from './Components/Header'
import {Footer} from './Components/Footer'

import { Route, Redirect, Switch } from "react-router-dom";


function App() {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get("http://localhost:3000")
        .then((res) => {
          setMessage(res.data);
        })
        .catch((err) => {});
    };

    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);

      setUser({ user });
    } catch (ex) {}
    fetchdata();
  }, []);

  return (

    <React.Fragment>
    <Navbar u={user} />

    <div className="">
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/department" component={Department}></Route>
        <Route path="/employee" component={Employee}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/contact" component={Contact}></Route>
       {/*  <Route path="/entertainment" component={Entertainment}></Route>
        <Route path="/selfAssesment" component={SelfAssesment}></Route>
        <Route path="/allReports" component={AllReports}></Route>
        <Route path="/searchReport" component={SearchReport}></Route>
        <Route path="/reportuser" component={ReportUser}></Route>
        <Route path="/emergency" component={Emergency}></Route> */}
       
        <Redirect from="/" to="/home" />
        //
        <Redirect to="" />
      </Switch>
    </div>
    <br></br>

    <Footer />
  </React.Fragment>

  );
}

export default App;
