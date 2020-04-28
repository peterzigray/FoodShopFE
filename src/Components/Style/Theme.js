import { createMuiTheme } from '@material-ui/core/styles';

const arcGreen = '#26a69a';
//'#80cbc4';
const arcRed = '#f50057';

export default createMuiTheme({
  // MuiPaper: {
  //   elevation1: 0,
  // },
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
