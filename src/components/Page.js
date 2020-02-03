import React, {useState, useEffect} from 'react';
import ResponsiveLayout from './ResponsiveLayout';
import {Auth} from 'aws-amplify';

export default function Page(props){
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getCurrentUser(){
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
          }

          setUser({profilePictureUrl: profilePictureUrl, autheticatedUser: user});
        })
        .catch(err => console.log(err))
    }
    getCurrentUser();
  }, []);

  const handleSignOut = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <ResponsiveLayout 
      menuItems={props.menuItems} 
      user={user}
      handleSignIn={() => Auth.federatedSignIn()}
      handleSignOut={() => handleSignOut()}
    >
      {props.children}
    </ResponsiveLayout>
  );
}
