import { FormControlLabel, Switch, styled } from "@mui/material";
import React, { useState } from "react";
import { IOSStyleSwitch } from "./NotificationSwitch";


function WatiSwitch({ defaultValue = false }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <FormControlLabel
      labelPlacement="start"
      control={
        <IOSStyleSwitch
          defaultValue={value}
          setValue={setValue}
        />
      }
      sx={{
        whiteSpace: "nowrap",
        "& .MuiFormControlLabel-label": {
          textTransform: "uppercase",
          fontWeight: 600,
          fontSize: "14px",
          mr: 0.5,
        },
      }}
      label="Wati"
    />
  );
}

export default WatiSwitch;
