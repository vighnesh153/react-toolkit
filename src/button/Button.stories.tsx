import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  rvColor: 'primary',
  rvLabel: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  rvColor: 'secondary',
  rvLabel: 'Secondary',
};

export const Link = Template.bind({});
Link.args = {
  rvColor: 'primary',
  rvLabel: 'Primary',
  rvIsLink: true,
  href: 'https://vighnesh153.com',
};

export const Success = Template.bind({});
Success.args = {
  rvColor: 'success',
  rvLabel: 'Success',
};

export const Error = Template.bind({});
Error.args = {
  rvColor: 'error',
  rvLabel: 'Error',
};

export const Info = Template.bind({});
Info.args = {
  rvColor: 'info',
  rvLabel: 'Info',
};

export const Warning = Template.bind({});
Warning.args = {
  rvColor: 'warning',
  rvLabel: 'Warning',
};

export const Large = Template.bind({});
Large.args = {
  rvLabel: 'Button',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  rvLabel: 'Button',
  size: 'small',
};
