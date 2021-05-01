import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ThemeProvider } from '..';

import { Button, ButtonProps } from './Button';
import theme from '../theme';

export default {
  title: 'Docs/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  rvColor: 'primary',
  rvLabel: 'Primary',
};
