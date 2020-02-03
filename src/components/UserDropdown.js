import React from 'react';
import {Link} from 'react-router-dom';
import {Dropdown, Image} from 'semantic-ui-react';

export default function UserDropdown(props) {
  const trigger = <Image avatar src={props.user.profilePictureUrl}/>;

  return (
    <Dropdown 
      trigger={trigger}
      icon={null}
      inline
      simple
      direction='left'
    >
      <Dropdown.Menu>
        <Dropdown.Item key='account' as={Link} text='Account' icon='user' to='/account'/>
        <Dropdown.Item key='sign-out'
          text='Sign Out' icon='sign out' onClick={props.handleSignOut}/>
      </Dropdown.Menu>
    </Dropdown>
  )
}
