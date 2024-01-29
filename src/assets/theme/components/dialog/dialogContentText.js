

// Material Dashboard 2 React base styles
import typography from "src/assets/theme/base/typography";
import colors from "src/assets/theme/base/colors";

// Material Dashboard 2 React helper functions
// import pxToRem from "src/assets/theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;

const dialogContentText = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
    },
  },
};

export default dialogContentText;
