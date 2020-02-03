import React from 'react';
import {Header} from 'semantic-ui-react';
import './semantic/dist/semantic.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/'>
        <Home>
          <Header as='h3'>Application Content</Header>
        </Home>
      </Route>
    </Switch>
    </Router>
      );
}

export default App;
