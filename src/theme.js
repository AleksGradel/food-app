import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00BCD4",
      light: "#B2EBF2",
      dark: "#0097A7",
    },
    secondary: {
      main: "#CDDC39",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    divider: "#BDBDBD",
  },
});

export default theme;