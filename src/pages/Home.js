import React from 'react';
import Page from '../components/Page';

const menuItems = [
  {content: 'Home', to: "/"},
  {content: 'About', to: "/about"}
]
export default function Home(props){
  return (
    <Page menuItems={menuItems}>
      {props.children}
    </Page>
  );
}
