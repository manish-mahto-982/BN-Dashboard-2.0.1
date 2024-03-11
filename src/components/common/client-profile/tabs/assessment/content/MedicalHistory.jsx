import { Grid, TextField } from "@mui/material";
import React, { memo } from "react";
import { Controller, useForm } from "react-hook-form";
import ComboBox from "src/components/client-service/forms/ComboBox";
const MemoizedComboBox = memo(ComboBox);

// Memoized TextField component
const MemoizedTextField = memo(TextField);
function MedicalHistory({ theme }) {
  const { control } = useForm({ defaultValues });
  return (
    <Grid container rowGap={5} columnSpacing={4}>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="medical_issue"
          render={({ field }) => (
            <MemoizedComboBox
              fullWidth
              color="secondary"
              options={["Yes", "No"]}
              label="Medical Issue"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="acidity"
          render={({ field }) => (
            <MemoizedComboBox
              fullWidth
              color="secondary"
              options={["Yes", "No"]}
              label="Acidity"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="acidity_type"
          render={({ field }) => (
            <MemoizedComboBox
              fullWidth
              color="secondary"
              options={["Mild", "Severe"]}
              label="Acidity Severity"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="diabetes"
          render={({ field }) => (
            <MemoizedComboBox
              fullWidth
              color="secondary"
              options={["Yes", "No"]}
              label="Diabetes"
              {...field}
            />
          )}
        />
      </Grid>

      <Grid item xs={6}>
        <Controller
          control={control}
          name="diabetes_type"
          render={({ field }) => (
            <MemoizedComboBox
              fullWidth
              color="secondary"
              options={[
                "Type 1",
                "Type 2",
                "Pre Diabetes",
                "Gestational Diabetes",
              ]}
              label="Acidity Severity"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="constipation"
          render={({ field }) => (
            <MemoizedComboBox
              fullWidth
              color="secondary"
              options={["Yes", "No"]}
              label="Constipation"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="constipation_type"
          render={({ field }) => (
            <MemoizedComboBox
              fullWidth
              color="secondary"
              options={["Mild", "Severe"]}
              label="Constipation Severity"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="hypertension"
          render={({ field }) => (
            <MemoizedTextField
              fullWidth
              color="secondary"
              label="Hypertension"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="thyroid"
          render={({ field }) => (
            <MemoizedComboBox
              fullWidth
              color="secondary"
              options={["Yes", "No"]}
              label="Constipation"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="thyroid_type"
          render={({ field }) => (
            <MemoizedComboBox
              fullWidth
              color="secondary"
              options={["Hyperthyroid", "Hypothyroid"]}
              label="Thyroid Severity"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="thyroid_type"
          render={({ field }) => (
            <MemoizedComboBox
              fullWidth
              color="secondary"
              options={["Hyperthyroid", "Hypothyroid"]}
              label="Thyroid Severity"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="medi"
          render={({ field }) => (
            <MemoizedComboBox
              fullWidth
              color="secondary"
              options={["Yes", "No"]}
              label="Medications / Vitamins"
              {...field}
            />
          )}
        />
      </Grid>

      <Grid item xs={6}>
        <Controller
          name="med1_name"
          control={control}
          render={({ field }) => (
            <MemoizedTextField
              fullWidth
              color="secondary"
              {...field}
              label="Medication 1 Name"
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          name="med1_dose"
          control={control}
          render={({ field }) => (
            <MemoizedTextField
              fullWidth
              color="secondary"
              {...field}
              label="Medication 1 Dose"
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          name="med1_ailment"
          control={control}
          render={({ field }) => (
            <MemoizedTextField
              fullWidth
              color="secondary"
              {...field}
              label="Medication 1 Ailment"
            />
          )}
        />
      </Grid>

      {/* Medication 2 Fields */}
      <Grid item xs={6}>
        <Controller
          name="med2_name"
          control={control}
          render={({ field }) => (
            <MemoizedTextField
              fullWidth
              color="secondary"
              {...field}
              label="Medication 2 Name"
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          name="med2_dose"
          control={control}
          render={({ field }) => (
            <MemoizedTextField
              fullWidth
              color="secondary"
              {...field}
              label="Medication 2 Dose"
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          name="med2_ailment"
          control={control}
          render={({ field }) => (
            <MemoizedTextField
              fullWidth
              color="secondary"
              {...field}
              label="Medication 2 Ailment"
            />
          )}
        />
      </Grid>

      {/* Medication 3 Fields */}
      <Grid item xs={6}>
        <Controller
          name="med3_name"
          control={control}
          render={({ field }) => (
            <MemoizedTextField
              fullWidth
              color="secondary"
              {...field}
              label="Medication 3 Name"
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          name="med3_dose"
          control={control}
          render={({ field }) => (
            <MemoizedTextField
              fullWidth
              color="secondary"
              {...field}
              label="Medication 3 Dose"
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          name="med3_ailment"
          control={control}
          render={({ field }) => (
            <MemoizedTextField
              fullWidth
              color="secondary"
              {...field}
              label="Medication 3 Ailment"
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          name="pcod"
          control={control}
          render={({ field }) => (
            <MemoizedComboBox options={["Yes", "No"]} {...field} label="Pcod" />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default MedicalHistory;

const defaultValues = {
  user_id: "",
  assessment_id: "",
  medical_issue: "",
  acidity: "",
  acidity_type: "",
  diabetes: "",
  diabetes_type: "",
  constipation: "",
  constipation_type: "",
  hypertension: "",
  thyroid: "",
  thyroid_type: "",
  other_specification: "",
  period: "",
  pms: "",
  menopause: "",
  lmp: "",
  medi: "",
  med1_name: "",
  med1_dose: "",
  med1_aliment: "",
  med2_name: "",
  med2_dose: "",
  med2_aliment: "",
  med3_name: "",
  med3_dose: "",
  med3_aliment: "",
  pcod: "",
};
