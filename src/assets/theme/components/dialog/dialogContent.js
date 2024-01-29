

// Material Dashboard 2 React base styles
import typography from "src/assets/theme/base/typography";
import borders from "src/assets/theme/base/borders";
import colors from "src/assets/theme/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "src/assets/theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;
const { borderWidth, borderColor } = borders;

const dialogContent = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: text.main,
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${borderColor}`,
      borderBottom: `${borderWidth[1]} solid ${borderColor}`,
    },
  },
};

export default dialogContent;
