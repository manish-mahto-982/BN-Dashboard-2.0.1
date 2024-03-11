import { Typography } from "@mui/material";
import React from "react";

function InputLabel({ label, ...props }) {
  return (
    <Typography mt={3} mb={1} color={"#697586"} {...props}>
      {label}
    </Typography>
  );
}

export default InputLabel;
