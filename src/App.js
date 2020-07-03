import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import CreateSponsor from './Components/CreateSponsor';
import SponsorDetail from './Components/SponsorDetail';


function App() {

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/create-sponsor' component={CreateSponsor} />
          <Route path='/sponsor/:id' component={SponsorDetail} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
