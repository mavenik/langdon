import React, {useState} from 'react';
import {Header} from 'semantic-ui-react';
import './semantic/dist/semantic.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import {userContext} from './userContext';
import {Auth, Hub} from 'aws-amplify';

function App() {
  const [user, setUser] = useState(null);
  Hub.listen('auth', (data) => {
    const {payload} = data;
    console.log(payload);
    if(payload.event === 'signIn')
    {
      Auth.currentAuthenticatedUser()
        .then(user => {
          console.log(user);
          var profilePictureUrl;
          if(user.attributes.identities){
            const identity = JSON.parse(user.attributes.identities)[0];
            const userId = identity.userId;
            if(identity.providerName === 'Facebook')
            {
              profilePictureUrl = 'https://graph.facebook.com/'+userId+'/picture';
            }else{
              profilePictureUrl = 'https://api.adorable.io/avatars/80/'+userId;
            }
          }else {
            profilePictureUrl = 'https://api.adorable.io/avatars/80/'+user.attributes.email;
          } // else

          setUser({profilePictureUrl: profilePictureUrl, autheticatedUser: user});
        }) // then
        .catch(err => console.log(err))
    } // if

    if(payload.event === 'signIn_failure')
    {alert('Login failed! Please try again.')}
  });

  return (
    <userContext.Provider value={user}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home>
              <Header as='h3'>Application Content</Header>
            </Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
