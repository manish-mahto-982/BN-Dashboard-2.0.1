import { Autocomplete, Grid, Input, TextField } from "@mui/material";
import { Resizable } from "re-resizable";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import ComboBox from "src/components/common/forms/ComboBox";
import MDInput from "src/components/theme/common/MDInput";

const SalesPersonalDetailsContent = () => {
  const { control } = useForm({
    defaultValues: {
      reassign_to: "",
      primary_source: "BN-LEAD-APP",
      tags: "",
    },
  });
  return (
    <Grid container columnSpacing={2} rowSpacing={4}>
      <Grid item xs={12} md={6}>
        <Controller
          name="reassign_to"
          control={control}
          render={({ field }) => (
            <ComboBox options={options} {...field} label="Reassign to" />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="primary_source"
          control={control}
          render={({ field }) => (
            <MDInput disabled {...field} label="Primary Source" fullWidth />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <ComboBox options={tagsOptions} {...field} label="Tags" fullWidth />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="life_style"
          control={control}
          render={({ field }) => (
            <Autocomplete
              multiple
              fullWidth
              limitTags={2}
              id="multiple-limit-tags"
              options={lifeStyleOptions}
              getOptionLabel={(option) => option.title}
              defaultValue={[lifeStyleOptions[3]]}
              renderInput={(params) => (
                <MDInput
                  {...params}
                  label="Life Style"
                  // placeholder="Favorites"
                  sx={{
                    ".MuiOutlinedInput-root": { padding: "5px !important" },
                  }}
                />
              )}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="clinical_condition"
          control={control}
          render={({ field }) => (
            <Autocomplete
              multiple
              fullWidth
              limitTags={2}
              id="multiple-limit-tags"
              options={clinicalConditionOptions}
              getOptionLabel={(option) => option.title}
              defaultValue={[clinicalConditionOptions[1]]}
              renderInput={(params) => (
                <MDInput
                  {...params}
                  label="Clinical Condition"
                  // placeholder="Favorites"
                  sx={{
                    ".MuiOutlinedInput-root": { padding: "5px !important" },
                  }}
                />
              )}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="prev_health_history"
          control={control}
          render={({ field }) => (
            <Autocomplete
              multiple
              fullWidth
              limitTags={2}
              id="multiple-limit-tags"
              options={prevHealthHistoryOptions}
              getOptionLabel={(option) => option.title}
              defaultValue={[prevHealthHistoryOptions[1]]}
              renderInput={(params) => (
                <MDInput
                  {...params}
                  label="Prev Health History"
                  // placeholder="Favorites"
                  sx={{
                    ".MuiOutlinedInput-root": { padding: "5px !important" },
                  }}
                />
              )}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="target_oriented"
          control={control}
          render={({ field }) => (
            <Autocomplete
              multiple
              fullWidth
              limitTags={2}
              id="multiple-limit-tags"
              options={targetOrientedOptions}
              getOptionLabel={(option) => option.title}
              defaultValue={[targetOrientedOptions[1]]}
              renderInput={(params) => (
                <MDInput
                  {...params}
                  label="Target Oriented"
                  // placeholder="Favorites"
                  sx={{
                    ".MuiOutlinedInput-root": { padding: "5px !important" },
                  }}
                />
              )}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="meal_management"
          control={control}
          render={({ field }) => (
            <ComboBox
              options={mealManagementOptions}
              {...field}
              label="Meal Management"
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="frequency"
          control={control}
          render={({ field }) => (
            <ComboBox options={[]} {...field} label="Frequency" />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="frequency"
          control={control}
          render={({ field }) => (
            <Resizable style={{ position: "relative" }}>
              <TextField
                color="secondary"
                // multiline
                rows={2}
                {...field}
                fullWidth
                sx={{ height: "100%" ,position:"absolute"}}
                label="Consultation Note"
              />
            </Resizable>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default SalesPersonalDetailsContent;

const options = [
  "Kajal",
  "Prajakta",
  "Arpita",
  "Khyati",
  "Urmila",
  "Shraddha",
  "Nazneen",
  "Anam",
  "Aasiya",
  "Nikitak",
  "PoojaG",
  "Gunjan",
  "Shalini Anokhii",
  "Jyoti",
  "Charu",
  "Aqsa",
  "Chelsi",
  "PrajaktaT",
  "Vartika",
  "Sadaf",
  "Chaitali",
  "Sahejpreet",
  "Riya",
  "Siddhi",
  "Akansha Gayatri",
];

const tagsOptions = [
  "Ethnicity",
  "South Indian",
  "North Indian",
  "Bengali Punjabi Sindhi",
  "Gujarati",
  "Rajasthani",
  "Maharashtrian",
  "Muslim",
  "Christianity",
  "Marwadi",
  "International",
  "Sikh",
  "Parsi",
  "Jain]",
];

const mealManagementOptions = ["Home Cooked", "Outside Meals"];

const lifeStyleOptions = [
  { title: "Sedentary" },
  { title: "Homemaker" },
  { title: "Working Out" },
  { title: "Nuclear" },
  { title: "Joint Family" },
  { title: "Busy executive" },
  { title: "Traveller" },
  { title: "Windows Shopping" },
  { title: "Student Life / Living Alone" },
  { title: "Gym" },
  { title: "Swim" },
  { title: "Yoga" },
  { title: "Zumba" },
];

const clinicalConditionOptions = [
  { title: "DM Thyroid PCOS" },
  { title: "PCOD" },
  { title: "IBS" },
  { title: "IBD" },
  { title: "BP" },
  { title: "Cholestrol" },
  { title: "Post Pregnency" },
  { title: "PMS HTN" },
  { title: "Dislypedemia" },
  { title: "Cancer" },
  { title: "Liver Disorders" },
  { title: "Heart Disorders" },
  { title: "Body Pain" },
  { title: "Endometriosis" },
  { title: "Adenomyosis" },
  { title: "Menopause" },
  { title: "Micronutrient deficiency" },
  { title: "Kidney Disorders Gut Health Issues" },
  { title: "Arthritis" },
];

const prevHealthHistoryOptions = [
  { title: "Tried Diet But No Result" },
  { title: "Tried Diet But No Sustainability" },
  { title: "Tried Diet But No Consistency" },
  { title: "Never Tried Diets" },
  { title: "Is On a Diet" },
  { title: "Got Results Want to lose more" },
];

const targetOrientedOptions = [
  { title: "Health management" },
  { title: "Weight Loss" },
  { title: "Weight Gain" },
];
