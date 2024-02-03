import { Box, Grid, Stack, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import ComboBox from "src/components/client-service/forms/ComboBox";
import TimeField from "src/components/client-service/forms/TimeField";

function SnackContent({ theme }) {
  const { control } = useForm({});
  return (
    <Box sx={{}}>
      <Grid container rowGap={5} columnSpacing={4}>
        {drySnacksFields.map((label) => (
          <Grid item xs={6}>
            <Controller
              control={control}
              name={label.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase()}
              render={({ field }) => (
                <ComboBox label={label} options={options} {...field} />
              )}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SnackContent;

const options = ["None", "Can buy", "Can't buy"];
const drySnacksFields = [
  "Dry Khakhra [Plain]",
  "Kurmura (Puffed Rice)",
  "Roasted Chana [Unsalted]",
  "Roasted Peanuts [Unsalted]",
  "Peanut Butter [Unsweetened]",
  "Makhana [Lotus Seeds]",
  "High Fibre Crackers [NRI]",
  "Ryvita Crackers [NRI]",
  "Oats Cakes [NRI]",
  "Rice Cake [NRI]",
  "Kefir [NRI] [Unflavoured]",
  "Threptin Diskettes / Lite",
  "Belvita Bran Biscuits [NRI]",
  "Puffed Jowar",
  "Wasa Crakers [NRI]",
  "Cold-Pressed Juice [Raw Pressery]",
  "Laban [NRI]",
];
