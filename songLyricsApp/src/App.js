import React from 'react';
import './App.css'
import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './components/index';
import {Provider} from './context';
import Lyrics from './components/tracks/Lyrics'

class App extends React.Component{
  render(){
    return(
  <Provider>
    <Router>
      <React.Fragment>
        <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path="/" component={Index}></Route>
            <Route exact path='/lyrics/track/:id' component={Lyrics}></Route>
            </Switch>
          </div>
      </React.Fragment>
    </Router>
  </Provider>
    );
  }
}

export default App;
