import { Badge, Icon, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { navbarIconButton } from "src/components/theme/layout/Navbars/DashboardNavbar/styles";
function AddDailyTaskOption({ light, darkMode, transparentNavbar }) {
  const iconsStyle = ({
    palette: { dark, white, text },
    functions: { rgba },
  }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;
      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }
      return colorValue;
    },
  });
  return (
    <>
      <Badge badgeContent={2} color={"warning"} overlap="circular">
        <Tooltip title="Add Task">
          <IconButton sx={navbarIconButton} disableRipple onClick={() => {}}>
            <Icon sx={iconsStyle}>add_circle</Icon>
          </IconButton>
        </Tooltip>
      </Badge>
    </>
  );
}

export default AddDailyTaskOption;
