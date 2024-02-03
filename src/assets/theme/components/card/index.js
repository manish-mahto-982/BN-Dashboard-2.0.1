

// Material Dashboard 2 React Base Styles
import colors from "src/assets/theme/base/colors";
import borders from "src/assets/theme/base/borders";
import boxShadows from "src/assets/theme/base/boxShadows";

// Material Dashboard 2 React Helper Function
import rgba from "src/assets/theme/functions/rgba";

const { black, white } = colors;
const { borderWidth, borderRadius } = borders;
const { md } = boxShadows;

const card = {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundColor: white.main,
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: md,
      overflow: "visible",
    },
  },
};

export default card;
