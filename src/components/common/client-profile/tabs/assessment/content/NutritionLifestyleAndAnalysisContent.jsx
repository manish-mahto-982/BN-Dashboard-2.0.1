import { Box, Grid, Stack, TextField } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
const ComboBox = React.lazy(
  () => import("src/components/client-service/forms/ComboBox"),
);
import TimeField from "src/components/client-service/forms/TimeField";
import {
  cardioDurationOptions,
  cardioFrequencyOptions,
  cookMealAtHomeOptions,
  designationOptions,
  doYouExerciseOptions,
  fastOptions,
  howOftenEatFromHotel,
  howOftenTravelOptions,
  jobMealOptions,
  occupationOptions,
  otherWorkoutDurationOptions,
  otherWorkoutFrequencyOptions,
  pilateFrequencyOptions,
  pilatesDurationOptions,
  sleepDurationOptions,
  travelForJobOptions,
  waterIntakePerDayOptions,
  weightTrainingDurationOptions,
  weightTrainingFrequencyOptions,
  weightTrainingOptions,
  workStatusOptions,
  yogaDurationOptions,
  yogaFrequencyOptions,
} from "src/utils/constants";

function NutritionLifestyleAndAnalysisContent({ theme }) {
  const { control } = useForm({
    defaultValues: defaultValues,
  });
  return (
    <Box sx={{}}>
      <Grid container rowGap={5} columnSpacing={4}>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="work_status"
            render={({ field: { value, onChange } }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  options={workStatusOptions}
                  value={value}
                  onChange={onChange}
                  label="Work Status"
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="occupation"
            render={({ field: { value, onChange } }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  options={occupationOptions}
                  value={value}
                  onChange={onChange}
                  label="Occupation"
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="designation"
            render={({ field: { value, onChange } }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  options={designationOptions}
                  value={value}
                  onChange={onChange}
                  label="Designation"
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="job_time"
            render={({ field }) => (
              <TimeField label={"Job Start Time"} {...field} theme={theme} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="job_hour"
            render={({ field }) => (
              <TimeField label={"Job End Time"} {...field} theme={theme} />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="job_meal"
            render={({ field: { value, onChange } }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  options={jobMealOptions}
                  value={value}
                  onChange={onChange}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="meal_quantity"
            render={({ field }) => (
              <TextField
                color="secondary"
                fullWidth
                label="Meal Quantity"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="meal_type"
            render={({ field }) => (
              <TextField
                color="secondary"
                fullWidth
                label="Meal Quantity"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="canteen_foods"
            render={({ field }) => (
              <TextField
                color="secondary"
                fullWidth
                label="Meal Quantity"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="travel_for_job"
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  label="Travel for job?"
                  options={travelForJobOptions}
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="how_often_do_travel_in_month"
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  label="How often do travel in month"
                  options={howOftenTravelOptions}
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="how_often_do_travel_in_month"
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  label="How often do travel in month"
                  options={howOftenTravelOptions}
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="fast"
            render={({ field }) => (
              <>
                <React.Suspense fallback={"loading..."}>
                  <ComboBox label="Fast" options={fastOptions} {...field} />
                </React.Suspense>
                <TextField
                  sx={{ mt: "16px" }}
                  placeholder="Please specify"
                  color="secondary"
                />
              </>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="fasting_food"
            render={({ field }) => (
              <TextField
                fullWidth
                label="Fasting food"
                color="secondary"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="sleep_duration"
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  label="Sleep Duration"
                  options={sleepDurationOptions}
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"water_intake_per_day"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  label="Water Intake Per Day"
                  options={waterIntakePerDayOptions}
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"do_you_fast"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  label="Do you fast"
                  options={["Yes", "No"]}
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"how_often_do_you_eat_from_hotel"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  label="How often do you eat from hotel"
                  options={howOftenEatFromHotel}
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"cuisine"}
            render={({ field }) => (
              <TextField
                fullWidth
                color="secondary"
                label="Cuisine"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"who_cook_meal_at_home"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  options={cookMealAtHomeOptions}
                  color="secondary"
                  label="Who cook meal at home"
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"food_dislike"}
            render={({ field }) => (
              <TextField
                fullWidth
                color="secondary"
                label="Food Dislike"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"food_preference"}
            render={({ field }) => (
              <TextField
                fullWidth
                color="secondary"
                label="Food Preference"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"do_you_exercise"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  options={doYouExerciseOptions}
                  color="secondary"
                  label="Do You Exercise"
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"cardio_frequency"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  options={cardioFrequencyOptions}
                  color="secondary"
                  label="Cardio Frequency"
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"cardio_duration"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  options={cardioDurationOptions}
                  color="secondary"
                  label="Cardio Duration"
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"weight_training"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  options={weightTrainingOptions}
                  color="secondary"
                  label="Weight training"
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"weight_training_frequency"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  options={weightTrainingFrequencyOptions}
                  color="secondary"
                  label="Weight training frequency"
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"weight_training_duration"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  options={weightTrainingDurationOptions}
                  color="secondary"
                  label="Weight training duration"
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"weight_training_time"}
            render={({ field }) => (
              <TimeField
                label={"Weight training time"}
                theme={theme}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"other_exercise"}
            render={({ field }) => (
              <TextField
                label="Other Exercise"
                fullWidth
                {...field}
                color="secondary"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"pilates_frequency"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  label="Pilate Frequency"
                  options={pilateFrequencyOptions}
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"pilates_duration"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  label="Pilate Duration"
                  options={pilatesDurationOptions}
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"yoga_frequency"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  label="Yoga Frequency"
                  options={yogaFrequencyOptions}
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"yoga_duration"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  label="Yoga Duration"
                  options={yogaDurationOptions}
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"other_workout_frequency"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  label="Other workout frequency"
                  options={otherWorkoutFrequencyOptions}
                  {...field}
                />
              </React.Suspense>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name={"other_workout_duration"}
            render={({ field }) => (
              <React.Suspense fallback={"loading..."}>
                <ComboBox
                  label="Other workout duration"
                  options={otherWorkoutDurationOptions}
                  {...field}
                />
              </React.Suspense>
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

export default NutritionLifestyleAndAnalysisContent;

const defaultValues = {
  work_status: workStatusOptions[1],
  occupation: "",
  designation: "",
  job_time: dayjs().format("hh:mm A"),
  job_hour: dayjs().format("hh:mm A"),
  job_meal: "",
  meal_quantity: "",
  meal_type: "",
  canteen_foods: "",
  travel_for_job: "",
  how_often_do_travel_in_month: "",
  do_you_travel_in_country: "",
  daily_activity_level: "",
  eating_habit: "",
  consumption_of_fruits: "",
  how_often_do_you_eat_non_veg: "",
  preferred_meal: "",
  do_you_smoke: "",
  how_often_do_you_consume_alcohol: "",
  how_often_do_you_eat_from_hotel: "",
  fast: "",
  fasting_food: "",
  do_you_fast: "",
  sleep_duration: "",
  cuisine: "Indian",
  water_intake_per_day: "",
  who_cook_meal_at_home: "",
  food_dislike: "Karela",
  food_preference: "Pasta",
  do_you_exercise: "No",
  cardio_frequency: "",
  cardio_duration: "",
  weight_training: "",
  weight_training_frequency: "",
  weight_training_duration: "",
  weight_training_time: "",
  other_exercise: "",
  pilates_frequency: "",
  pilates_duration: "",
  yoga_frequency: "",
  yoga_duration: "",
  other_workout_frequency: "",
  other_workout_duration: "",
};
