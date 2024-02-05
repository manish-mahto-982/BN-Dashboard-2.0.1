import { Grid, Stack, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import LayoutContainerTitle from "src/components/client-service/layout/LayoutContainerTitle";

function NoteToMentorAndKhyati({ theme }) {
  const { control } = useForm({defaultValues:{
    note_khyati:"Note to Khyati"
  }});
  return (
    <Grid container rowGap={5} columnSpacing={4}>
      <Grid item xs={12}>
        <LayoutContainerTitle theme={theme} title={"Note to Khyati"} />
      </Grid>
      <Grid item xs={6}>
        <Controller
          name="note_khyati"
          control={control}
          render={({ field }) => (
            <TextField
              color="secondary"
              multiline
              rows={10}
              {...field}
              fullWidth
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
  );
}

export default NoteToMentorAndKhyati;
