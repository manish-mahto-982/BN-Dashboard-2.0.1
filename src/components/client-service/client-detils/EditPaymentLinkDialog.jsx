import { InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import CustomDialog from "../common/CustomDialog";
import MDDropDown from "src/components/theme/common/MDDropdown";
import DateField from "../forms/DateField";

function EditPaymentLinkDialog({ openDialog, setOpenDialog, theme }) {
  const { control } = useForm({
    defaultValues: {
      pay_program_name: "",
      edit_add_text: "",
      session_day: "",
      edit_email: "",
      edit_prog_amt: "",
      edit_extended_pay_date: "",
    },
  });
  return (
    <CustomDialog
      dialogTitle={"Edit Payment Link"}
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
      theme={theme}
      dialogContent={
        <Stack width={300} direction={"column"} rowGap={3} mt={3}>
          <Controller
            name="program_name"
            control={control}
            render={({ field }) => (
              <MDDropDown label="Program Name" options={options} />
            )}
          />
          <Controller
            name="edit_add_text"
            control={control}
            render={({ field }) => (
              <TextField
                label="Add Your Description"
                color="secondary"
                placeholder="Reason"
              />
            )}
          />
          <Controller
            name="session_day"
            control={control}
            render={({ field }) => (
              <ComboBox label="Session Days" options={daysOptions} />
            )}
          />
          <Controller
            name="edit_email"
            control={control}
            render={({ field }) => (
              <TextField {...field} color="secondary" label="Email" />
            )}
          />
          <Controller
            name="edit_prog_amt"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                type="number"
                color="secondary"
                value={value}
                label="With normal TextField"
                id="outlined-start-adornment"
                onChange={(event) => {
                  const inputValue = event.target.value;
                  const numericValue = parseFloat(inputValue);

                  if (
                    (!isNaN(numericValue) && numericValue >= 0) ||
                    inputValue === ""
                  ) {
                    onChange(numericValue);
                  } else {
                    // Handle invalid input, e.g., setting the value to 0
                    onChange(0);
                  }
                }}
                inputProps={{ min: 0 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₹</InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Controller
            name="edit_extended_pay_date"
            control={control}
            render={({ field }) => {
              return <DateField {...field} theme={theme} />;
            }}
          />
        </Stack>
      }
      dialogActionMain={"Add"}
    />
  );
}

export default EditPaymentLinkDialog;

const options = [
  "Select",
  "BODY TRANSFORMATION",
  "WEIGHT LOSS-PRO",
  "BEAT PCOS",
  "WEIGHT LOSS +",
  "ACTIVE",
  "Plateau Breaker",
  "Reform Intermittent",
  "ReNeU",
  "WEIGHT LOSS CLEANSE",
  "SUGAR DETOX CLEANSE",
  "FLAT STOMACH CLEANSE",
  "10 DAY INTERMITTENT FASTING",
  "Shape Up",
  "Transform (weight loss)",
  "POST FESTIVE DETOX CLEANSE",
  "14-Day Fitness Challenge",
  "Slim Possible",
];

const daysOptions = [
  "Select",
  "30 Days",
  "60 Days",
  "90 Days",
  "1 Day",
  "3 Days",
  "10 Days",
  "14 Days",
];
