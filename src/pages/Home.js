import React, {useEffect} from 'react';
import Page from '../components/Page';
import {Auth, API} from 'aws-amplify';
import {listLanguages as query} from '../graphql/queries';

const menuItems = [
  {content: 'Home', to: "/"},
  {content: 'About', to: "/about"}
]
export default function Home(props){
  useEffect(()=>{
    Auth.currentUserCredentials()
      .then((credentials) => {
        const authMode = credentials.authenticated ? 'AMAZON_COGNITO_USER_POOLS' : 'AWS_IAM';
        API.graphql({query, authMode})
          .then((data) => console.log(data))
          .catch((err) => console.error(err));

      })
      .catch((err) => console.error(err));

  }, [])
  return (
    <Page menuItems={menuItems}>
      {props.children}
    </Page>
  );
}
