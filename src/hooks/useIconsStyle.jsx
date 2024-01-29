import React from 'react'

const useIconsStyle = ({
    palette: { dark, white, text },
    functions: { rgba },
  },transparentNavbar,light,darkMode,) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });
export default useIconsStyle