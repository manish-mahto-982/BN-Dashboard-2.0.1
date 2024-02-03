

/**
  The boxShadow() function helps you to create a box shadow for an element
 */

// Material Dashboard 2 React helper functions
import rgba from "src/assets/theme/functions/rgba";
import pxToRem from "src/assets/theme/functions/pxToRem";

function boxShadow(offset = [], radius = [], color, opacity, inset = "") {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity
  )}`;
}

export default boxShadow;
