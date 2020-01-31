import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-viewport/register';
import {withInfo} from '@storybook/addon-info';
import {addDecorator} from '@storybook/react';

addDecorator(withInfo);
