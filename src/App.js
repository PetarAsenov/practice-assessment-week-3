import React from 'react';
import { Switch, Route, Link, NavLink} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage'
import DoctorView from './components/DoctorView'
import OnDuty from './components/OnDuty'
import NewPatientForm from './components/NewPatienForm'

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
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
