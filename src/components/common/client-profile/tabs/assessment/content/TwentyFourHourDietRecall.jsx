import { Box, Grid, Stack, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import ComboBox from "src/components/common/forms/ComboBox";
import TimeField from "src/components/common/forms/TimeField";
export default function TwentyFourHourDietRecall({ theme }) {
  const { control } = useForm({
    defaultValues: defaultValues,
  });
  return (
    <Box sx={{}}>
      <Grid container rowGap={5} columnSpacing={4}>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="sleep_time"
            render={({ field }) => (
              <TimeField label={"Sleep time"} theme={theme} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="wakeup_time"
            render={({ field }) => (
              <TimeField label={"Wake up time"} theme={theme} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="break_time"
            render={({ field }) => (
              <TimeField label={"Break Time"} theme={theme} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="break_menu"
            render={({ field }) => (
              <TextField
                fullWidth
                label="Break Menu"
                color="secondary"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="midmorning_time"
            render={({ field }) => (
              <TimeField label={"Midmorning time"} theme={theme} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="midmorning_menu"
            render={({ field }) => (
              <TextField
                fullWidth
                label="Midmorning Menu"
                color="secondary"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="lateve_time"
            render={({ field }) => (
              <TimeField label={"Lateve time"} theme={theme} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="lateve_menu"
            render={({ field }) => (
              <TextField
                fullWidth
                label="Lateve Menu"
                color="secondary"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="lunch_time"
            render={({ field }) => (
              <TimeField label={"Lunch time"} theme={theme} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="lunch_menu"
            render={({ field }) => (
              <TextField
                fullWidth
                label="Lunch Menu"
                color="secondary"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="tea_time"
            render={({ field }) => (
              <TimeField label={"Tea time"} theme={theme} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="tea_menu"
            render={({ field }) => (
              <TextField
                fullWidth
                label="Tea Menu"
                color="secondary"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="dinner_time"
            render={({ field }) => (
              <TimeField label={"Dinner time"} theme={theme} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="dinner_menu"
            render={({ field }) => (
              <TextField
                fullWidth
                label="Dinner Menu"
                color="secondary"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="bed_time"
            render={({ field }) => (
              <TimeField label={"Bed time"} theme={theme} {...field} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="bed_menu"
            render={({ field }) => (
              <TextField
                fullWidth
                label="Bed Menu"
                color="secondary"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="midnight_munching_time"
            render={({ field }) => (
              <TimeField
                label={"Midnight munching time"}
                theme={theme}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="midnight_munching_menu"
            render={({ field }) => (
              <TextField
                fullWidth
                label="Midnight munching Menu"
                color="secondary"
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
  sleep_time: "",
  wakeup_time: "",
  break_time: "",
  break_menu: "Poha",
  midmorning_time: "",
  midmorning_menu: "Poha",
  lateve_time: "",
  lateve_menu: "",
  lunch_time: "",
  lunch_menu: "",
  tea_time: "",
  tea_menu: "",
  dinner_time: "",
  dinner_menu: "",
  bed_time: "",
  bed_menu: "",
  midnight_munching_time: "",
  midnight_munching_menu: "",
};
