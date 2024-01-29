import React from "react";
import { ButtonBase, Tooltip } from "@mui/material";

function NavbarButton({ref=null, theme, Icon, tooltip = "", ...props }) {
  return (
    <Tooltip ref={ref} title={tooltip}>
      <ButtonBase
        sx={{ borderRadius: "12px", overflow: "hidden", position: "relative" }}
        {...props}
      >
        
          <Icon
            stroke={
              theme.palette.secondary.main
            }
            size="1.3rem"
          />
      
      </ButtonBase>
    </Tooltip>
  );
}

export default NavbarButton;
