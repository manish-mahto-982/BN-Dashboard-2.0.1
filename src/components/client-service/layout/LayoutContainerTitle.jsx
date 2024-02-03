import { Typography } from "@mui/material";
import React from "react";

function LayoutContainerTitle({ title, theme }) {
  return (
    <Typography
      fontSize={16}
      color={'text.main'}
      textTransform={"capitalize"}
    >
      {title}
    </Typography>
  );
}

export default LayoutContainerTitle;
