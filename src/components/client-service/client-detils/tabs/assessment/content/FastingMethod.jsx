import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import CustomDialog from "src/components/client-service/common/CustomDialog";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import ComboBox from "src/components/client-service/forms/ComboBox";
import TimeField from "src/components/client-service/forms/TimeField";
import LayoutContainerTitle from "src/components/client-service/layout/LayoutContainerTitle";
import useShowDialog from "src/hooks/useShowDialog";
import { fastingWindowOptions } from "src/utils/constants";

function FastingMethod({ theme }) {
  const [open, setOpen] = useShowDialog(false);
  const { control } = useForm({
    defaultValues: {
      note_khyati: "Note to Khyati",
    },
  });
  return (
    <>
      <Grid container rowGap={5} columnSpacing={4}>
        <Grid item xs={12}>
          <FlexBoxBetween minWidth={"100%"}>
            <LayoutContainerTitle theme={theme} title={"Fasting Method"} />
            <PrimaryButton theme={theme} onClick={() => setOpen(true)}>
              Edit
            </PrimaryButton>
          </FlexBoxBetween>
        </Grid>
        <Grid item xs={6}>
          <TextField color="secondary" rows={4} fullWidth />
        </Grid>
      </Grid>
      <CustomDialog
        theme={theme}
        openDialog={open}
        setOpenDialog={setOpen}
        dialogTitle={"Fasting Method"}
        dialogActionMain={"Save"}
        dialogContent={
          <Box width={300} pt={4}>
            <ComboBox label="Fasting Window" options={fastingWindowOptions} sx={{pb:4}} />
            <TimeField label={"Start Time"} theme={theme}/>
          </Box>
        }
      />
    </>
  );
}

export default FastingMethod;
