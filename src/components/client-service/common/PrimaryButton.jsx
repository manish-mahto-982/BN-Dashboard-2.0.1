import { Button } from "@mui/material";
import React from "react";

function PrimaryButton({ theme, children, ...props }) {
  return (
    <Button
      variant="contained"
      sx={{ bgcolor: 'info' }}
      disableElevation
      style={{ color: "white" }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
