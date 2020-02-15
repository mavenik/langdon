import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import {items, user, content} from './NavSidebar.stories';
import ResponsiveLayout from './ResponsiveLayout';
import {userContext} from '../userContext';

storiesOf('ResponsiveLayout', module)
  .addDecorator(StoryRouter())
  .add('default', () => {
    return (
      <ResponsiveLayout menuItems={items}>
        {content}
      </ResponsiveLayout>
    )})

storiesOf('ResponsiveLayout', module)
  .addDecorator(StoryRouter())
  .addDecorator((story) => (
    <userContext.Provider value={user}>
      {story()}
    </userContext.Provider>
  ))
  .add('logged in', () => {
    return (
      <ResponsiveLayout menuItems={items} user={user}>
        {content}
      </ResponsiveLayout>
    )});
