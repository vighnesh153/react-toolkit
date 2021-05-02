import React, { useEffect, useState } from 'react';

import MuiButton, {
  ButtonProps as MuiButtonProps,
} from '@material-ui/core/Button';
import {
  lighten,
  darken,
  MuiThemeProvider,
  Theme,
  useTheme,
} from '@material-ui/core';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';

const getBgColor = (props: MuiButtonProps, localMuiTheme: Theme): string => {
  switch (props.variant) {
    case 'contained':
      return localMuiTheme.palette.primary.main;
    default:
      return 'inherit';
  }
};

const getHoverBgColor = (props: MuiButtonProps, theme: Theme): string => {
  switch (props.variant) {
    case 'outlined':
      return lighten(
        theme.palette.primary.main,
        theme.palette.action.hoverOpacity * 24,
      );
    case 'contained':
      return theme.palette.primary.dark;
    default:
      return 'inherit';
  }
};

const getColor = (props: MuiButtonProps, theme: Theme): string => {
  switch (props.variant) {
    case 'contained':
      return theme.palette.primary.contrastText;
    default:
      return theme.palette.primary.main;
  }
};

export interface ButtonProps extends MuiButtonProps {
  /**
   * Text inside the button
   */
  rvLabel?: string;
  /**
   * Color of the button
   */
  rvColor?: 'error' | 'warning' | 'success' | 'info' | 'primary' | 'secondary';
  /**
   * Is the button a link?
   */
  rvIsLink?: boolean;
}

const StyledButton = withStyles((theme) => ({
  root: {
    fontWeight: 'bold',
    borderColor: lighten(
      theme.palette.primary.light,
      theme.palette.action.hoverOpacity * 5,
    ),
    background: (props: MuiButtonProps) => getBgColor(props, theme),
    color: (props: MuiButtonProps) => getColor(props, theme),
    '&:hover': {
      borderColor: darken(
        theme.palette.primary.light,
        theme.palette.action.hoverOpacity,
      ),
      background: (props: MuiButtonProps) => getHoverBgColor(props, theme),
      textDecoration: (props: MuiButtonProps) => (props.variant === 'text' ? 'underline' : ''),
    },
  },
}))(MuiButton);

/**
 *
 * Primary UI component for user interaction.
 *
 */
export const Button: React.FC<ButtonProps> = ({
  rvLabel = 'Button',
  rvColor = 'primary',
  rvIsLink,
  size = 'medium',
  variant = 'contained',
  ...props
}: ButtonProps) => {
  const theme = useTheme();
  const [buttonTheme, setButtonTheme] = useState(theme);

  useEffect(() => {
    const newButtonTheme = createMuiTheme({
      ...theme,
      palette: {
        ...theme.palette,
        primary: {
          main: theme.palette[rvColor].main,
        },
      },
    });
    setButtonTheme(newButtonTheme);
  }, [rvColor]);

  return (
    <MuiThemeProvider theme={buttonTheme}>
      <StyledButton
        id={`button-${rvLabel?.toLowerCase().replace(' ', '-')}`}
        variant={rvIsLink ? 'text' : variant}
        color="primary"
        size={size}
        disableRipple={rvIsLink}
        {...props}
      >
        {rvLabel}
      </StyledButton>
    </MuiThemeProvider>
  );
};
