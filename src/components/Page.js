import React from 'react';
import ResponsiveLayout from './ResponsiveLayout';
import {Auth} from 'aws-amplify';

export default function Page(props){
  const handleSignOut = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <ResponsiveLayout 
      menuItems={props.menuItems} 
      handleSignIn={() => Auth.federatedSignIn()}
      handleSignOut={() => handleSignOut()}
    >
      {props.children}
    </ResponsiveLayout>
  );
}
