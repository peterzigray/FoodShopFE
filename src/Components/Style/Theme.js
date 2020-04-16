import { createMuiTheme } from '@material-ui/core/styles';

const arcGreen = '#80cbc4';
const arcRed = '#f50057';

export default createMuiTheme({
  palette: {
    // common: {
    //   blue: `${arcBlue}`,
    //   orange: `${arcRed}`,
    // },
    primary: {
      main: `${arcGreen}`,
    },
    secondary: {
      main: `${arcRed}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
  },
});
