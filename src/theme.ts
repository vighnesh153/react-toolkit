import { createMuiTheme } from '@material-ui/core/styles';

import './styles/index.css';

// const defaultTheme = createMuiTheme({});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#37474F',
    },
    secondary: {
      main: '#FF7043',
    },
  },
});

export default theme;
