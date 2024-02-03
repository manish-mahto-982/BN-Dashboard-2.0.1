import { Grid, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

function FeedbackContent() {
  const { control } = useForm();
  return (
    <Grid container>
      <Grid item xs={12} md={6} mt={2}>
        <Controller
          name="halftime_feedback"
          control={control}
          render={({ field }) => (
            <TextField
              color="secondary"
              fullWidth
              multiline
              rows={4}
              label="Halftime Feedback"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} mt={4} />
      <Grid item xs={12} md={6}>
        <Controller
          name="program_feedback"
          control={control}
          render={({ field }) => (
            <TextField
              color="secondary"
              fullWidth
              multiline
              rows={4}
              label="Program Feedback"
              {...field}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default FeedbackContent;
