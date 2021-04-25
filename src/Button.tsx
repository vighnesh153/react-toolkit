import React, { useEffect, useState } from 'react';

import MuiButton, {
  ButtonProps as MuiButtonProps,
} from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';

import theme from './theme';

export interface ButtonProps extends MuiButtonProps {
  /**
   * Text inside the button
   */
  rvLabel?: string;
  /**
   * Color of the button
   */
  rvColor?: 'error' | 'warning' | 'success' | 'info' | 'primary' | 'secondary';
}

const StyledButton = withStyles({
  root: {
    padding: (props: MuiButtonProps) => theme.spacing(
      1
          + (props.size === 'small' ? -0.5 : 0)
          + (props.size === 'large' ? 0.5 : 0),
      5 + (props.size === 'small' ? -1 : 0) + (props.size === 'large' ? 2 : 0),
    ),
    fontSize: (props: MuiButtonProps) => `${
      (props.size === 'small' ? 0.8 : 0)
        + (props.size === 'large' ? 1.2 : 0)
        + (props.size === 'medium' ? 1 : 0)
    }rem`,
    borderRadius: 60,
    fontWeight: 'bold',
  },
})(MuiButton);

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  rvLabel = 'Button',
  rvColor = 'primary',
  size = 'medium',
  variant = 'contained',
  ...props
}: ButtonProps) => {
  const [newTheme, setNewTheme] = useState(theme);

  useEffect(() => {
    const newThemeValue = createMuiTheme({
      ...theme,
      palette: {
        primary: {
          main: theme.palette[rvColor].main,
        },
      },
    });
    setNewTheme(newThemeValue);
  }, [rvColor]);

  return (
    <MuiThemeProvider theme={newTheme}>
      <StyledButton {...props} variant={variant} color="primary" size={size}>
        {rvLabel}
      </StyledButton>
    </MuiThemeProvider>
  );
};
