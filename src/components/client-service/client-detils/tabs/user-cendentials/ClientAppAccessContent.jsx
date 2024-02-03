import { Box, FormControlLabel } from "@mui/material";
import React, { useState } from "react";

import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import InputLabel from "src/components/client-service/forms/InputLabel";
import { IOSStyleSwitch } from "src/components/client-service/switches/NotificationSwitch";
import MDDropDown from "src/components/theme/common/MDDropdown";
import { updateDieStatusToArr, updateScreenToArr } from "src/utils/constants";

function ClientAppAccessContent() {
  const [value, setValue] = useState(false);
  return (
    <FlexBoxBetween width={"100%"}>
      <Box>
        <InputLabel label={"Update Screen To"} />
        <MDDropDown options={updateScreenToArr} selectedInd={1} />
      </Box>
      <Box>
        <InputLabel label={"Update Diet To"} />
        <DropDown options={updateDieStatusToArr} selectedInd={1} />
      </Box>
      <Box>
        <InputLabel label={"Allow Web Access"} />
        <FormControlLabel
          control={
            <IOSStyleSwitch
              sx={{ m: 1 }}
              defaultValue={value}
              setValue={setValue}
            />
          }
                  sx={{
              
            "& .MuiFormControlLabel-label": {
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "14px",
             mr:0
            },
          }}
        />
      </Box>
    </FlexBoxBetween>
  );
}

export default ClientAppAccessContent;
