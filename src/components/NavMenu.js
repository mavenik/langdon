import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Image} from 'semantic-ui-react';

export default function NavMenu(props) {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (event, { name }) => setActiveItem(name)

  var userButton;
  if(props.user) {
    userButton = <Image src={props.user.profilePictureUrl} avatar/>
  } else {
    userButton = 'Sign In'
  }

  return (
    <Menu>
      {props.items.map( item => <Menu.Item 
        {...item}
        name={item.content.toLowerCase().replace(/\s+/g,'-')}
        onClick={handleItemClick} as={Link} 
        active={activeItem === item.content.toLowerCase().replace(/\s+/g,'-')} />)}
      <Menu.Item as={Link} position='right'>
        {userButton}
      </Menu.Item>
    </Menu>
  )
}
