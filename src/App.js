import React from 'react';

import './App.css';

import { Home } from './Components/Home'
import { Department } from './Components/Department'
import { Employee } from './Components/Employee'
import { Registration } from './Components/Registration'
import { Login } from './Components/Login'
/* new version
let Login=require('./Components/Login') */
import { Contact } from './Components/Contact'
import { Navigation } from './Components/Navigation'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="Container">
        {/* 
      //It's run like root page
      <Home></Home>
      <Department></Department> 
      <Employee></Employee> */}


        {/* It's same for all pages */}
        <h4 className="m-3 d-flex justify-content-center">React Js with Web Api</h4>
        <Navigation></Navigation>
        <switch>
          {/* Type in Url and get the page */}
          <Route path="/" component={Home} exact />
          <Route path="/department" component={Department} />
          <Route path="/employee" component={Employee} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
