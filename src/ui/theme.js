import { createMuiTheme } from "@material-ui/core/styles";

const textColor = "#e8ebe9ad";
const primary = "#000e27";
const secondary = "#FFBA60";

export default createMuiTheme({
  //default theme
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          background: `${primary}`,
        },
      },
    },
  },
  palette: {
    common: {
      arcBlue: "#0B72B9",
      arcOrange: `${secondary}`,
      textColor: `${textColor}`,
    },
    primary: {
      main: `${primary}`,
    },
    secondary: {
      main: `${secondary}`,
    },
    typography: {
      h3: {
        fontweight: 300,
      },
    },
    background: {
      default: `${primary}`,
    },
  },
});
