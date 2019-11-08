import { create } from '@storybook/theming';

import logo from '../src/assets/images/logo.png'

// export default create({
const anbimaTheme = create({
  base: 'light',

  // colorPrimary: 'hotpink',
  // colorSecondary: 'deepskyblue',

  // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  appContentBg: '#EDF0F2',
  // appBorderColor: 'grey',
  appBorderColor: '#EDF0F2',
  appBorderRadius: 4,

  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  // brandTitle: 'ANBIMA storybook',
  // brandUrl: 'https://example.com',
  // brandUrl: '../src/assets/images/logo.png',
  brandImage: logo,
});

export default anbimaTheme