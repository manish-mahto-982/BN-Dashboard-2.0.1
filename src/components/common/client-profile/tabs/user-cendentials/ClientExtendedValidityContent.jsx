import { Checkbox, FormControlLabel, TextField, useTheme } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import DateField from "src/components/common/forms/DateField";

function ClientExtendedValidityContent() {
  const { control } = useForm({
    defaultValues: {
      validityDate: "1991-11-04",
    },
  });
  const theme = useTheme();
  return (
    <>
      <FlexBoxBetween flexWrap={"wrap"} gap={2}>
        <TextField
          id="program-name"
          label="Program Name"
          variant="outlined"
          color="secondary"
        />
        <TextField
          id="enter-days"
          label="Enter Days"
          variant="outlined"
          color="secondary"
          type="number"
          sx={{
            "& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button":
              {
                " -webkit-appearance": "none",
                margin: 0,
              },
          }}
        />
        <Controller
          control={control}
          name="validityDate"
          render={({ field: { value, onChange } }) => (
            <DateField label="Validity" theme={theme} value={dayjs(value)} onChange={onChange} />
          )}
        />
        <TextField
          id="wallet_debit"
          label="Wallet Debit"
          variant="outlined"
          color="secondary"
          type="number"
          sx={{
            "& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button":
              {
                " -webkit-appearance": "none",
                margin: 0,
              },
          }}
        />
      </FlexBoxBetween>
      <FlexBoxBetween sx={{ mt: 3 }}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Send Notification"
        />
        <PrimaryButton theme={theme}>Save</PrimaryButton>
      </FlexBoxBetween>
    </>
  );
}

export default ClientExtendedValidityContent;
