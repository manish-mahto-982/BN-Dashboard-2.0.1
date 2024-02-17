import { Box, Grid, Stack, TextField } from "@mui/material";
import React, { memo } from "react";
import { Controller, useForm } from "react-hook-form";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import ComboBox from "src/components/client-service/forms/ComboBox";
import TimeField from "src/components/client-service/forms/TimeField";

function NaturalSpicesContent({ theme }) {
  const { control } = useForm({});
  return (
    <Box sx={{}}>
      <Grid container rowGap={5} columnSpacing={4}>
        {labels.map((label, index) => (
          <Grid key={String(label + index)} item xs={6}>
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

export default memo(NaturalSpicesContent);

const options = ["None", "Can buy", "Can't buy"];

const labels = [
  "Cinnamon Powder",
  "Triphala Powder / Tablets",
  "Fennel Seeds [Saunf]",
  "Hemp Seeds",
  "Methi Seeds [Fenugreek Seeds]",
  "Garden Cress Seeds [Halim]",
  "Chia Seeds",
  "Apple Cider Vinegar",
  "Jeera [Cumin Seeds]",
  "Peppercorns",
  "Fresh Tulsi Leaves",
  "Fresh Parsley",
  "Matcha Tea",
  "Chamomile Tea",
  "Moringa Tea",
  "Kayam Churna Powder / Tablet",
  "Wheat Grass Powder",
  "Komala Gutika [By Sheth Brothers]",
  "Spirulina Powder / Tablet / Capsule",
  "Cold Pressed Flaxseed Oil",
  "Cold Pressed Coconut Oil",
  "Sunflower Seeds [Unsalted]",
  "Pumpkin Seeds [Unsalted]",
  "Kombucha",
  "Nutmeg Powder",
  "Ashwagandha Powder / Roots",
  "Mulethi Powder / Roots",
  "Peppermint Tea",
  "Earl Grey Tea",
  "Spearmint Tea",
  "Coriander Seed",
  "Amla Juice",
  "Aloe Vera Juice [Unsweetened]",
  "Yakult / Yakult Light / Aktifit",
  "Castor Oil",
  "Balsamic Vinegar",
  "Resource Diabetic Protein [Plain, Without Any Flavour]",
  "Chyawanprash [Sugar Free]",
  "Isabgol [Psyllium Husk]",
];
