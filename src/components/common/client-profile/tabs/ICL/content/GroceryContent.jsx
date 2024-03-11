import { Box, Grid, Stack, TextField } from "@mui/material";
import React, { memo } from "react";
import { Controller, useForm } from "react-hook-form";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import ComboBox from "src/components/common/forms/ComboBox";
import TimeField from "src/components/common/forms/TimeField";

function GroceryContent({ theme }) {
  const { control } = useForm({});
  return (
    <Box sx={{}}>
      <Grid container rowGap={5} columnSpacing={4}>
        {dairyProteinsFields.map((label) => (
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

export default memo(GroceryContent);

const options = ["None", "Can buy", "Can't buy"];

const dairyProteinsFields = [
  "Oats",
  "Soya Chunks",
  "Muesli [Sugar Free]",
  "Feta Cheese",
  "Greek Yoghurt [Unflavored]",
  "Breads - Rye / Multigrain / Whole Wheat / Pita",
  "Soy Milk [Unflavored]",
  "Amul Kool [India]",
  "Energee [Aarey] [Maharashtra]",
  "MTR Milk [South India]",
  "Ricotta Cheese",
  "Raw Organic Honey",
  "Almond Milk [Unflavoured]",
];
