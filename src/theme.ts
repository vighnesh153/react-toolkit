import { createTheme } from '@mui/material';

import './styles/index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(200, 18%, 26%)',
    },
    secondary: {
      main: 'hsl(14, 100%, 63%)',
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: [
      '"Roboto"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(', '),
    h1: {
      fontSize: '4.5rem',
    },
    h2: {
      fontSize: '3.75rem',
    },
    h3: {
      fontSize: '3rem',
    },
    h4: {
      fontSize: '2.25rem',
    },
    h5: {
      fontSize: '1.875rem',
    },
    h6: {
      fontSize: '1.5rem',
    },
    subtitle1: {
      fontSize: '1.25rem',
    },
    subtitle2: {
      fontSize: '1.125rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    caption: {
      fontSize: '0.75rem',
    },
  },
});

export default theme;
