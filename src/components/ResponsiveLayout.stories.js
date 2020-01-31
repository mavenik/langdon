import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import {items, user, content} from './NavSidebar.stories';
import ResponsiveLayout from './ResponsiveLayout';

storiesOf('ResponsiveLayout', module)
  .addDecorator(StoryRouter())
  .add('default', () => {
    return (
      <ResponsiveLayout menuItems={items}>
        {content}
      </ResponsiveLayout>
    )})
  .add('logged in', () => {
    return (
      <ResponsiveLayout menuItems={items} user={user}>
        {content}
      </ResponsiveLayout>
    )});
