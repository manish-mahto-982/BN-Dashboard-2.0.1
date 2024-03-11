import { Box, Grid, Stack, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import ComboBox from "src/components/common/forms/ComboBox";
import TimeField from "src/components/common/forms/TimeField";
export default function FoodFrequency({ theme }) {
  const { control } = useForm({
    defaultValues: defaultValues,
  });
  return (
    <Box sx={{}}>
      <Grid container rowGap={5} columnSpacing={4}>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="pizza_freq"
            render={({ field }) => (
              <ComboBox
                label={"Pizza/Burger Frequency"}
                options={options}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="biscuit_freq"
            render={({ field }) => (
              <ComboBox
                label={"Biscuits/Cookies Frequency"}
                options={options}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="chapati_freq"
            render={({ field }) => (
              <ComboBox
                label="Roti/Chapati Frequency"
                options={options}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="chaat_freq"
            render={({ field }) => (
              <ComboBox label="Chaat Frequency" options={options} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="rice_freq"
            render={({ field }) => (
              <ComboBox label="Rice Frequency" options={options} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="bread_freq"
            render={({ field }) => (
              <ComboBox
                label="Bread/Pav Frequency"
                options={options}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="paneer_freq"
            render={({ field }) => (
              <ComboBox label="Paneer Frequency" options={options} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="cheese_freq"
            render={({ field }) => (
              <ComboBox label="Cheese Frequency" options={options} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="mithai_freq"
            render={({ field }) => (
              <ComboBox
                label="Indian Mithai Frequency"
                options={options}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="fruit_freq"
            render={({ field }) => (
              <ComboBox label="Fruits Frequency" options={options} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="fried_freq"
            render={({ field }) => (
              <ComboBox
                label="Fried Snacks Frequency"
                options={options}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="nuts_freq"
            render={({ field }) => (
              <ComboBox
                label="Nuts/Dry Fruits Frequency"
                options={options}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="breverage_freq"
            render={({ field }) => (
              <ComboBox
                label="Aerated Beverages/Juices Frequency"
                options={options}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="tea_freq"
            render={({ field }) => (
              <ComboBox label="Tea Frequency" options={options} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="cofee_freq"
            render={({ field }) => (
              <ComboBox label="Coffee Frequency" options={options} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="cereal_freq"
            render={({ field }) => (
              <ComboBox
                label="Breakfast Cereal Frequency"
                options={options}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="seafood_freq"
            render={({ field }) => (
              <ComboBox
                label="Seafood Frequency"
                options={options}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="fish_freq"
            render={({ field }) => (
              <ComboBox label="Fish Frequency" options={options} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="chicken_freq"
            render={({ field }) => (
              <ComboBox
                label="Chicken Frequency"
                options={options}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="mutton_freq"
            render={({ field }) => (
              <ComboBox label="Mutton Frequency" options={options} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="beef_freq"
            render={({ field }) => (
              <ComboBox label="Beef Frequency" options={options} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="pork_freq"
            render={({ field }) => (
              <ComboBox label="Pork Frequency" options={options} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="egg_freq"
            render={({ field }) => (
              <ComboBox label="Eggs Frequency" options={options} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="midnight_freq"
            render={({ field }) => (
              <ComboBox
                label="Midnight Snacks Frequency"
                options={options}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="dessert_freq"
            render={({ field }) => (
              <ComboBox
                label="Western Desserts & Ice-Cream Frequency"
                options={options}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <PrimaryButton theme={theme}>Save</PrimaryButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

const defaultValues = {
  user_id: "",
  assessment_id: "",
  pizza_freq: "",
  biscuit_freq: "",
  chapati_freq: "",
  chaat_freq: "",
  rice_freq: "",
  bread_freq: "",
  paneer_freq: "",
  cheese_freq: "",
  mithai_freq: "",
  fruit_freq: "",
  fried_freq: "",
  nuts_freq: "",
  breverage_freq: "",
  tea_freq: "",
  cofee_freq: "",
  cereal_freq: "",
  seafood_freq: "",
  fish_freq: "",
  chicken_freq: "",
  mutton_freq: "",
  beef_freq: "",
  pork_freq: "",
  egg_freq: "",
  midnight_freq: "",
  dessert_freq: "",
};

const options = [
  "None",
  "Daily",
  "Once A Week",
  "Twice A Week",
  "Thrice A Week",
  "Once In 15 Days",
];
