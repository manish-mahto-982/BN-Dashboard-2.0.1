

// Material Dashboard 2 React base styles
import colors from "src/assets/theme/base/colors";
import borders from "src/assets/theme/base/borders";
import boxShadows from "src/assets/theme/base/boxShadows";

// Material Dashboard 2 React helper functions
// import rgba from "src/assets/theme/functions/rgba";
import pxToRem from "src/assets/theme/functions/pxToRem";
import linearGradient from "src/assets/theme/functions/linearGradient";

const { white, gradients, grey, transparent } = colors;
const { borderWidth } = borders;
const { md } = boxShadows;

const switchButton = {
  defaultProps: {
    disableRipple: false,
  },

  styleOverrides: {
    switchBase: {
      color: gradients.dark.main,

      "&:hover": {
        backgroundColor: transparent.main,
      },

      "&.Mui-checked": {
        color: gradients.dark.main,

        "&:hover": {
          backgroundColor: transparent.main,
        },

        "& .MuiSwitch-thumb": {
          borderColor: `${gradients.dark.main} !important`,
        },

        "& + .MuiSwitch-track": {
          backgroundColor: `${gradients.dark.main} !important`,
          borderColor: `${gradients.dark.main} !important`,
          opacity: 1,
        },
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: "0.3 !important",
      },

      "&.Mui-focusVisible .MuiSwitch-thumb": {
        backgroundImage: linearGradient(gradients.info.main, gradients.info.state),
      },
    },

    thumb: {
      backgroundColor: white.main,
      boxShadow: md,
      border: `${borderWidth[1]} solid ${grey[400]}`,
    },

    track: {
      width: pxToRem(32),
      height: pxToRem(15),
      backgroundColor: grey[400],
      border: `${borderWidth[1]} solid ${grey[400]}`,
      opacity: 1,
    },

    checked: {},
  },
};

export default switchButton;