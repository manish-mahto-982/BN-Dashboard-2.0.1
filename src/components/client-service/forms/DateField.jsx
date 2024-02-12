import {
  DatePicker,
  LocalizationProvider,
  pickersLayoutClasses,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";

function DateField({ theme, value = dayjs("MM/DD/YYYY"), onChange,label='' }) {
  console.log("🚀 ~ DateField ~ theme:", theme);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
       label={label}
        value={value}
        onChange={onChange}
        sx={{
          ".MuiButtonBase-root.MuiIconButton-root": {
            color:'text.main'
          }
        }}
        slotProps={{
          layout: {
            sx: {
              [`.${pickersLayoutClasses.contentWrapper}`]: {
                bgcolor: "background.default",
              },
              [`.${pickersLayoutClasses.actionBar}`]: {
                bgcolor: "background.default",
              },
              "& .MuiDialogActions-root button.MuiButtonBase-root,.MuiButtonBase-root.MuiPickersDay-root.Mui-selected,.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root":
                {
                  bgcolor: "info.main",
                  color: "#fff !important",
                },
              "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {},
              ".MuiButtonBase-root.MuiPickersDay-root.MuiPickersDay-dayWithMargin":
                {
                  color: "text.main",
                },
              ".MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel":
                {
                  color: "text.main",
                },
              ".MuiPickersCalendarHeader-label": {
                color: "text.main",
              },
              ".MuiTypography-root.MuiTypography-overline": {
                color: "text.main",
              },
              ".MuiPickersToolbar-root.MuiPickersLayout-toolbar": {
                backgroundColor: "background.default",
              },
              ".MuiPickersCalendarHeader-root .MuiIconButton-root": {
                color: "text.main",
              },
              
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default DateField;
