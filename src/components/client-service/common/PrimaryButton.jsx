import { Button } from "@mui/material";
import React from "react";

function PrimaryButton({ theme, children, ...props }) {
  return (
    <Button
      variant="contained"
      sx={{ bgcolor: "info", color: "#fff" }}
      disableElevation
      {...props}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
