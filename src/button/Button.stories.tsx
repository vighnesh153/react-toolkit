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

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  rvColor: 'primary',
  rvLabel: 'Disabled',
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  rvColor: 'primary',
  rvLabel: 'Secondary',
  variant: 'outlined',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  rvColor: 'primary',
  rvLabel: 'Disabled',
  variant: 'outlined',
  disabled: true,
};

export const Link = Template.bind({});
Link.args = {
  rvColor: 'primary',
  rvLabel: 'Link',
  rvIsLink: true,
};

export const Success = Template.bind({});
Success.args = {
  rvColor: 'success',
  rvLabel: 'Success',
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

export const Error = Template.bind({});
Error.args = {
  rvColor: 'error',
  rvLabel: 'Error',
};
