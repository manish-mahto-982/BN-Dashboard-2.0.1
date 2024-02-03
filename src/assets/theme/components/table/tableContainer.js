

// Material Dashboard 2 React base styles
import colors from "src/assets/theme/base/colors";
import boxShadows from "src/assets/theme/base/boxShadows";
import borders from "src/assets/theme/base/borders";

const { white } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

const tableContainer = {
  styleOverrides: {
    root: {
      backgroundColor: white.main,
      boxShadow: md,
      borderRadius: borderRadius.xl,
    },
  },
};

export default tableContainer;
