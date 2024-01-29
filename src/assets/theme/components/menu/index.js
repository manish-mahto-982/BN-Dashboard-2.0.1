

// Material Dashboard 2 React base styles
import boxShadows from "src/assets/theme/base/boxShadows";
import typography from "src/assets/theme/base/typography";
import colors from "src/assets/theme/base/colors";
import borders from "src/assets/theme/base/borders";

// Material Dashboard 2 React helper functions
import pxToRem from "src/assets/theme/functions/pxToRem";

const { lg } = boxShadows;
const { size } = typography;
const { text, white } = colors;
const { borderRadius } = borders;

const menu = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: lg,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md,
    },
  },
};

export default menu;
