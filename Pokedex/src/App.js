import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import backgroundImage from './pattern.png'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Pokemon from  './components/pokemon/Pokemon';

class App extends React.Component{
  render(){
    return(
    <Router>
      <div className="App" style={{background:`url(${backgroundImage})`}}>
        <Navbar />
        <div className='container'>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path = '/pokemon/:pokemonIndex' component={Pokemon}></Route>
        </Switch>

        </div>
      </div>
    </Router>
    )
  }
}

export default App;
