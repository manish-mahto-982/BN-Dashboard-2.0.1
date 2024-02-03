

// Material Dashboard 2 React Base Styles
import borders from "src/assets/theme/base/borders";

// Material Dashboard 2 React Helper Functions
import pxToRem from "src/assets/theme/functions/pxToRem";

const { borderRadius } = borders;

const cardMedia = {
  styleOverrides: {
    root: {
      borderRadius: borderRadius.xl,
      margin: `${pxToRem(16)} ${pxToRem(16)} 0`,
    },

    media: {
      width: "auto",
    },
  },
};

export default cardMedia;
