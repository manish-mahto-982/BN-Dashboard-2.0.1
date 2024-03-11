import { InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import CustomDialog from "src/components/client-service/common/CustomDialog";
import ComboBox from "src/components/client-service/forms/ComboBox";

function AddWalletDialog({ openDialog, setOpenDialog, theme }) {
  const { control } = useForm({
    defaultValues: {
      wallet_amount: "",
      suggested_description: "",
      description: "",
    },
  });
  return (
    <CustomDialog
      dialogTitle={"Add Wallet Amount"}
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
      theme={theme}
      dialogContent={
        <Stack width={300} direction={"column"} rowGap={3} mt={3}>
          <Controller
            name="wallet_amount"
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
            name="suggested_description"
            control={control}
            render={({ field }) => (
              <ComboBox label="Description" options={options} />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                label="Add Your Description"
                color="secondary"
                placeholder="Reason"
              />
            )}
          />
        </Stack>
      }
      dialogActionMain={"Add"}
    />
  );
}

export default AddWalletDialog;

const options = [
  "",
  "Any other - Please mention",
  "Founders Birthday",
  "Gave feedback on social media",
  "Gave Video feedback",
  "Good mail",
  "Inchloss tracker approval",
  "Limited Period Offer [48 hours Promotion]",
  "Lost 5 kgs / 10 kgs OR  amazing weight loss",
  "Milestone achieved",
  "Occasion / festival",
  "Participated in contest/challenge",
  "Participating in BN- Quiz",
  "Photo tracker approval",
  "Referred a friend/family member/colleagues",
  "Regular / punctual",
  "Shared goals with us",
  "Shared meal picture",
  "Social media recommendation",
  "Surprise on the occasion of Dhanteras",
  "Valentines Day Gift",
  "Weight tracker approval",
  "Winning BN- Quiz",
  "Your Reference Enrolled Successfully",
];
