import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {ThemeProvider as EmotionTheming} from "@emotion/react"
import theme from '../src/theme';

/** If the string contains a phrase, prefix it. This is useful for making ordering sections */
const prefix = (phrase, prefix) => (/** @type {string} */ value) => {
  const index = value.indexOf(phrase);
  return index > -1 ? value.substr(0, index) + prefix + value.substr(index) : value;
};
const pipe = (...fns) => value => fns.reduce((result, fn) => fn(result), value);

function storySort(a, b) {
  const prefixFn = pipe(
    prefix('welcome-', '0'),
    prefix('about', '0-a'),
    prefix('getting-started', '0-b'),
    prefix('theming-', '0-c'),
    prefix('changelog-', '0-d'),

    prefix('components-', '3'),

    prefix('private-', '4'),

    // Always at top in any folder
    prefix('readme-', '0a'),
  );

  const left = prefixFn(a[0]);
  const right = prefixFn(b[0]);

  return left === right ? 0 : left.localeCompare(right);
}

export const parameters = {
  layout: 'centered',
  viewMode: 'docs',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
	options: {
    storySort,
  },
};

export const decorators = [
  (Story) => {
  console.log(Story)
  return (
    <EmotionTheming theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </EmotionTheming>
  )
  },
];
