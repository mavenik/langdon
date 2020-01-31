import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import {Header, Image} from 'semantic-ui-react';
import NavSidebar from './NavSidebar';

export const items = [
    {content: 'Home', to: '/home'},
    {content: 'Home', to: '/home'},
    {content: 'Home', to: '/home'},
    {content: 'About Us', to: '/about'}
  ]

export const user = {
  profilePictureUrl: 'https://react.semantic-ui.com/images/avatar/large/matthew.png'
}
export const content= (
  <>
    <Header as='h3'>Application Content</Header>
    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
  </>
)

storiesOf('NavSidebar', module)
  .addDecorator(StoryRouter())
  .add('default', () => {
    return (
      <NavSidebar items={items}>
        {content}
      </NavSidebar>
    )
  })
  .add('logged in', () => {
    return (
      <NavSidebar items={items} user={user}>
        {content}
      </NavSidebar>
    )
  });
