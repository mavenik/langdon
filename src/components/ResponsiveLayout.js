import React from 'react';
import {Responsive, Container} from 'semantic-ui-react';
import NavMenu from './NavMenu';
import NavSidebar from './NavSidebar';
import Footer from './Footer';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const DesktopLayout = (props) => {
  return (
    <>
      <NavMenu 
        items={props.menuItems} 
        handleSignIn={props.handleSignIn}
        handleSignOut={props.handleSignOut}
      />
      <Container>
        {props.children}
      </Container>
      <Footer />
    </>
  )
}

const MobileLayout = (props) => {
  return (
    <>
      <NavSidebar 
        items={props.menuItems} 
        handleSignIn={props.handleSignIn}
        handleSignOut={props.handleSignOut}
      >
        <Container>
          {props.children}
        </Container>
      </NavSidebar>
      <Footer/>
    </>
  )
}

export default function ResponsiveLayout(props){
  return (
    <>
      <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
        <MobileLayout 
          menuItems={props.menuItems} 
          handleSignIn={props.handleSignIn}
          handleSignOut={props.handleSignOut}
        >
          {props.children}
        </MobileLayout>
      </Responsive>

      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <DesktopLayout 
          menuItems={props.menuItems} 
          handleSignIn={props.handleSignIn}
          handleSignOut={props.handleSignOut}
        >
          {props.children}
        </DesktopLayout>
      </Responsive>
    </>
  )
}
