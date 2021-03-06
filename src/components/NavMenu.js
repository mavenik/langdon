import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import UserDropdown from './UserDropdown';
import {userContext} from '../userContext';

export default function NavMenu(props) {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (event, { name }) => setActiveItem(name)

  return (
    <Menu>
      {props.items.map( item => <Menu.Item 
        {...item}
        name={item.content.toLowerCase().replace(/\s+/g,'-')}
        key={item.content.toLowerCase().replace(/\s+/g,'-')}
        onClick={handleItemClick} as={Link} 
        active={activeItem === item.content.toLowerCase().replace(/\s+/g,'-')}
      />)}
      <userContext.Consumer>
        {(user) => {
          if(user)
          {
            return <Menu.Item position='right'>
              <UserDropdown user={user} handleSignOut={props.handleSignOut}/>
            </Menu.Item>
          }
          else
          {
            return <Menu.Item as={Link} position='right' to='#'
              onClick={props.handleSignIn}
            >
              Sign In
            </Menu.Item>
          }
        }}
      </userContext.Consumer>
    </Menu>
  )
}
