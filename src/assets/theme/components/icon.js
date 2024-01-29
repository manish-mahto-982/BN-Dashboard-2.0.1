

// Balance Nutrition React helper functions
import pxToRem from "src/assets/theme/functions/pxToRem";

const icon = {
  defaultProps: {
    fontSize: "inherit",
    baseClassName: "material-icons-round",
  },

  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important",
    },

    fontSizeSmall: {
      fontSize: `${pxToRem(20)} !important`,
    },

    fontSizeLarge: {
      fontSize: `${pxToRem(36)} !important`,
    },
  },
};

export default icon;
