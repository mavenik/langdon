import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Sidebar, Button, Icon, Segment, Menu, Image} from 'semantic-ui-react';

export default function NavSidebar(props) {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (event, { name }) => setActiveItem(name)

  var userButton;
  if(props.user) {
    userButton = <Menu.Item as={Link} position='right' to="#">
      <Image src={props.user.profilePictureUrl} avatar/>
    </Menu.Item>
  } else {
    userButton = <Menu.Item 
      as={Link} 
      position='right' 
      to="#"
      onClick={props.handleSignIn}
    >
      Sign In
    </Menu.Item>
  }

  return (
    <div>
      <Button icon onClick={() => setSidebarVisible(!sidebarVisible)}>
        <Icon name="bars" />
      </Button>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='overlay'
          vertical
          inverted
          width='thin'
          onHide={() => setSidebarVisible(false)}
          visible={sidebarVisible}
          style={{height: '100vh !important'}}
        >
          {userButton}
          {props.items.map( item => <Menu.Item 
            {...item}
            name={item.content.toLowerCase().replace(/\s+/g,'-')}
            onClick={handleItemClick}
            as={Link}
            active={activeItem === item.content.toLowerCase().replace(/\s+/g,'-')} />
          )}
      </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            {props.children}
          </Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
    </div>
  )
}
