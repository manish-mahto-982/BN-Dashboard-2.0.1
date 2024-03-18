import {
  Autocomplete,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  Switch,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";
import { Resizable } from "re-resizable";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import ComboBox from "src/components/common/forms/ComboBox";
import DateField from "src/components/common/forms/DateField";
import TimeField from "src/components/common/forms/TimeField";
import MDInput from "src/components/theme/common/MDInput";
import MDTypography from "src/components/theme/common/MDTypography";
import { programOptions } from "src/utils/constants";

const SalesPersonalDetailsContent = () => {
  const { control } = useForm({
    defaultValues: {
      reassign_to: "",
      primary_source: "BN-LEAD-APP",
      tags: "",
    },
  });
  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={4} paddingTop={2} >
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
              <MDInput {...field} label="Primary Source" fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <ComboBox
                options={tagsOptions}
                {...field}
                label="Tags"
                fullWidth
              />
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
                  sx={{ height: "100%", position: "absolute" }}
                  label="Consultation Note"
                />
              </Resizable>
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="suggested_program"
            control={control}
            render={({ field }) => (
              <ComboBox
                options={programOptions}
                {...field}
                label="Suggested Program"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="program_days"
            control={control}
            render={({ field }) => (
              <ComboBox options={[]} {...field} label="Suggested Program" />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="program_amount"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Program Amount" fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FlexBoxBetween className="h-full">
            <MDTypography fontSize="medium">Payment link</MDTypography>{" "}
            <Switch />
          </FlexBoxBetween>
        </Grid>
        {radioGroupsArr.map((item, index) => (
          <Grid key={String(item.groupName + index)} item xs={12} md={6}>
            <MDTypography
              fontSize="medium"
              id="demo-row-radio-buttons-group-label"
            >
              {item.groupName}
            </MDTypography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              {item.radios.map((radio, index) => (
                <FormControlLabel
                  key={String(radio.label + index)}
                  value={radio.value}
                  control={<Radio />}
                  label={radio.label}
                />
              ))}
            </RadioGroup>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 6 }} />
      <Grid container columnSpacing={2} rowSpacing={4}>
        <Grid item xs={12} md={6}>
          <DateField fullWidth label="Next Fu Date" value={dayjs()} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TimeField label="Next Fu Time" value={dayjs()} />
        </Grid>

        {followUpFormRadioGroup.map((item, index) => (
          <Grid key={String(item.groupName + index)} item xs={12} md={6}>
            <MDTypography
              fontSize="medium"
              id="demo-row-radio-buttons-group-label"
            >
              {item.groupName}
            </MDTypography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              {item.radios.map((radio, index) => (
                <FormControlLabel
                  key={String(radio.label + index)}
                  value={radio.value}
                  control={<Radio />}
                  label={radio.label}
                />
              ))}
            </RadioGroup>
          </Grid>
        ))}
        <Grid item xs={12}>
          <PrimaryButton>Submit</PrimaryButton>
        </Grid>
      </Grid>
    </>
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

const radioGroupsArr = [
  {
    groupName: "Communication",
    radios: [
      {
        value: "asking queries",
        label: "Asking Queries",
      },
      {
        value: "cold replies",
        label: "Cold Replies",
      },
    ],
  },
  {
    groupName: "Awarness Level",
    radios: [
      {
        value: "low",
        label: "Low",
      },
      {
        value: "medium",
        label: "Medium",
      },
      {
        value: "high",
        label: "High",
      },
    ],
  },
  {
    groupName: "Motivational Level",
    radios: [
      {
        value: "low",
        label: "Low",
      },
      {
        value: "medium",
        label: "Medium",
      },
      {
        value: "high",
        label: "High",
      },
    ],
  },
  {
    groupName: "Language",
    radios: [
      {
        value: "english",
        label: "English",
      },
      {
        value: "medium",
        label: "Medium",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
  },
];

const followUpFormRadioGroup = [
  {
    groupName: "Followup Form",
    radios: [
      {
        value: "whatsapp",
        label: "WhatsApp",
      },
      {
        value: "call",
        label: "Call",
      },
      {
        value: "bn app",
        label: "BN App",
      },
    ],
  },
];
