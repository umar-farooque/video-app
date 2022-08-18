import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#081221',
    },
    secondary: {
      main: '#0e1a2b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
