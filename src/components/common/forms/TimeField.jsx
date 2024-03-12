import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { memo } from "react";

const TimeField = React.forwardRef(
  ({ label, value = null, onChange, theme }, ref) => {
    console.log("🚀 ~ TimeField ~ value:", value);
    return (
      <LocalizationProvider ref={ref} dateAdapter={AdapterDayjs}>
        <TimePicker
          label={label}
          onChange={onChange}
          {...(value !== null || ("" && { value }))}
          sx={{
            width: "100%",
            "& .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl": {
              color: 'info.main',
            },
            "& .MuiInputBase-input.MuiOutlinedInput-input:focus": {
              outline: `solid  ${'info.main'}`,
            },
            "& .MuiPaper-root": {
              bgcolor: `${"background.default"} !important`,
            },
          }}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </LocalizationProvider>
    );
  },
);
export default memo(TimeField);
