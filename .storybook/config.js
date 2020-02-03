import { configure, addParameters } from '@storybook/react';
import {
    INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';

import '../src/semantic/dist/semantic.css';
import requireContext from 'require-context.macro';

// automatically import all files ending in *.stories.js
const req = requireContext('../src/components', true, /\.stories\.js$/);


const loadStories = () => {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
addParameters({viewports: INITIAL_VIEWPORTS});
