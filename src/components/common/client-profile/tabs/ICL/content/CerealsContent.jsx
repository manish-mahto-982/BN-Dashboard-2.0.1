import { Box, Grid, Stack, TextField } from "@mui/material";
import React, { memo } from "react";
import { Controller, useForm } from "react-hook-form";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import ComboBox from "src/components/common/forms/ComboBox";
import TimeField from "src/components/common/forms/TimeField";

function CerealsContent({ theme }) {
  const { control } = useForm({});
  return (
    <Box sx={{}}>
      <Grid container rowGap={5} columnSpacing={4}>
        {grainsFields.map((label) => (
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

export default memo(CerealsContent);

const options = ["None", "Can buy", "Can't buy"];
const grainsFields = [
  "Jowar",
  "Bajra",
  "Ragi",
  "Multigrain Atta [No Maida]",
  "Wheat Bran",
  "Dalia / Bulgur-wheat",
  "Barley",
  "Quinoa",
  "Brown Poha",
  "Red Poha",
  "Whole Wheat / Multigrain Pasta",
  "Whole Wheat / Multigrain Noodles",
  "White Rice Flakes [Poha]",
  "Brown Rice [No Basmati]",
  "Cous-cous [NRI]",
  "Proso Millet",
  "Red Rice",
  "Foxtail Millet",
];
