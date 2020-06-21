import React from 'react';
import './App.css';
import HomePage from '../HomePage/HomePage';
import {Route, Switch} from 'react-router-dom';
import About from '../About/About'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Switch>
        <Route
        exact
        path={'/'}
        component={HomePage}/>
        <Route
        exact
        path={'/about'}
        component={About}/>
      </Switch>
    </div>
  )
  };
}

export default App;
