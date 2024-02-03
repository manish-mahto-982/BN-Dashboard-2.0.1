import { IconButton, Tooltip } from "@mui/material";
import React from "react";

function IconButtonWithToolTip({
  Icon,
  tooltipTitle,
  tooltipProps,
  iconButtonProps,
}) {
  return (
    <Tooltip title={tooltipTitle} {...tooltipProps}>
      <IconButton {...iconButtonProps}>
        {<Icon />}
      </IconButton>
    </Tooltip>
  );
}

export default IconButtonWithToolTip;
