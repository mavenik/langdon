import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import NavMenu from './NavMenu';
import {userContext} from '../userContext';

const items = [
  {content: 'Home',  to: '/home'},
  {content: 'About Us', to: '/about'}
]

const user = {
  profilePictureUrl: 'https://react.semantic-ui.com/images/avatar/large/matthew.png'
}
storiesOf('NavMenu', module)
  .addDecorator(StoryRouter())
  .add('default', () => <NavMenu items={items} />);

storiesOf('NavMenu', module)
  .addDecorator(StoryRouter())
  .addDecorator((story) => (
    <userContext.Provider value={user}>
      {story()}
    </userContext.Provider>
  ))
  .add('logged in', () => <NavMenu items={items} user={user} />);
