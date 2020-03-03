import React from 'react';
import { Switch, Route, NavLink} from "react-router-dom";
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import HomePage from './components/HomePage'
import DoctorView from './components/DoctorView'
import OnDuty from './components/OnDuty'
import NewPatientForm from './components/NewPatienForm'

function App() {
  const activeStyle={
    fontWeight: "bold",
    color: "red"
  }

  return (
    <div className="App">
     
      <Navbar>
        <NavLink activeStyle={activeStyle} exact to="/">Home</NavLink>
        <NavLink activeStyle={activeStyle} to="/onduty">Doctor Schedule</NavLink>
        <NavLink activeStyle={activeStyle} to="/signup">Patient Signup</NavLink>
        <NavLink activeStyle={activeStyle} to="/doctorview">Patient database</NavLink>
      </Navbar>
      <Switch>
        <Route path="/onduty" component={OnDuty} />
        <Route path="/doctorview" component={DoctorView} />
        <Route path="/signup" component={NewPatientForm} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
