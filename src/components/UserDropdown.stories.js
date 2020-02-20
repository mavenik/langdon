import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import UserDropdown from './UserDropdown';

const user = {
  profilePictureUrl: 'https://react.semantic-ui.com/images/avatar/large/matthew.png'
}

storiesOf('UserDropdown', module)
  .addDecorator(StoryRouter())
  .add('default', 
    () => <UserDropdown user={user} handleSignOut={() => alert('Signed out')}/>);
