import {
  DatePicker,
  LocalizationProvider,
  pickersLayoutClasses,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";

function DateField({ theme, value=dayjs('MM/DD/YYYY'), onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={onChange}
        slotProps={{
          layout: {
            sx: {
              [`.${pickersLayoutClasses.contentWrapper}`]: {
                bgcolor: 'background.default',
              },
              [`.${pickersLayoutClasses.actionBar}`]: {
                bgcolor: 'background.default',
              },
              "& .MuiDialogActions-root button.MuiButtonBase-root,.MuiButtonBase-root.MuiPickersDay-root.Mui-selected,.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root":
                {
                  bgcolor: 'info.main',
                  color: "#fff",
                },
              "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {},
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default DateField;
