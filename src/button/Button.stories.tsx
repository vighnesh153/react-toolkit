import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MuiThemeProvider } from '@material-ui/core';

import { Button, ButtonProps } from './Button';
import theme from '../theme';

export default {
  title: 'Docs/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <MuiThemeProvider theme={theme}>
    <Button {...args} />
  </MuiThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  rvColor: 'primary',
  rvLabel: 'Primary',
};
