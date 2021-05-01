import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Theme from './theme';

export const theme = Theme;
export const createTheme = createMuiTheme;
export const ThemeProvider = MuiThemeProvider;

export { Button, ButtonProps } from './button';
