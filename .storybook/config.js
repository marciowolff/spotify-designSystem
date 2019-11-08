import { configure } from "@storybook/react";

// import { addParameters } from '@storybook/react'
// import anbimaTheme from './anbimaTheme'

// import './reset.css'
// import './fonts.css'

const req = require.context("../src", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Option defaults.
/*addParameters({
  options: {
    theme: anbimaTheme,
    hierarchySeparator: /\|/
  },
});
*/
configure(loadStories, module);
