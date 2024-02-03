import React from "react";
import CSLayout from "../cs-dashboard/layout";
import { Card, Dialog, DialogActions, Grid, Tooltip } from "@mui/material";
import MDButton from "src/components/theme/common/MDButton";
import { TbPlus } from "react-icons/tb";
import useShowDialog from "src/hooks/useShowDialog";
import MDTypography from "src/components/theme/common/MDTypography";
import MDBox from "src/components/theme/common/MDBox";
import { TransitionSlidUp } from "src/components/client-service/table/DataGridTableDialog";

const Drafts = () => {
  const [show, setShow] = useShowDialog(false);
  return (
    <CSLayout>
      <Grid container>
        <Grid xs={12} item>
          <Card className={`w-full`}>
            <MDBox
              className={`flex w-full flex-row items-center justify-between`}
            >
              <MDTypography variant={"h6"}>Drafts table</MDTypography>
              <Tooltip title="Add draft" placement="left">
                <MDButton
                  startIcon={<TbPlus size={20} />}
                  onClick={() => setShow(true)}
                  color="secondary"
                  variant="contained"
                  disableElevation
                  sx={{
                    color: "white",
                    fontSize: 15,
                    bgcolor: "info.main",
                  }}
                >
                  NEW
                </MDButton>
              </Tooltip>
            </MDBox>

            {/* <DraftsTable /> */}
          </Card>
        </Grid>
      </Grid>
    </CSLayout>
  );
};

export default Drafts;



export const ADD_DRAFT_INITIAL_STATE = { title: "", type: 1, description: "" };
export const AddDraftDialog = ({
  show,
  setShow,
  theme,
  data = ADD_DRAFT_INITIAL_STATE,
}) => {
  const { handleSubmit, control } = useForm({
    defaultValues: data,
  });
  const handleClose = () => setShow(false);
  return (
    <>
      <Dialog
        open={show}
        onClose={handleClose}
        TransitionComponent={TransitionSlidUp}
      >
        <DialogTitle
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"#fff"}
          bgcolor={theme.palette.bnBlue[500]}
        >
          Add Draft
          <IconButton onClick={handleClose}>
            <TbX stroke="#fff" />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ bgcolor: theme.palette.background.default }}>
          <Controller
            name={"title"}
            control={control}
            render={({
              field: { onChange, value, name },
              fieldState: { error },
              formState,
            }) => (
              <TextField
                autoFocus
                name={name}
                color="secondary"
                variant="standard"
                id="title"
                label="Title"
                type="text"
                fullWidth
                value={value}
                onChange={onChange}
                sx={{ mt: 3, minWidth: "400px" }}
              />
            )}
          />

          <Typography mt={3.5} mb={1} color={"#697586"}>
            Type
          </Typography>
          <DropDown options={DRAFT_OPTIONS} selectedInd={data.type} />
          <Typography mt={3.5} mb={1} color={"#697586"}>
            Description
          </Typography>
          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <ReactQuill
                theme="snow"
                style={{ height: 160, marginBottom: 40, width: "100%" }}
                value={value}
                onChange={onChange}
              />
            )}
          />
        </DialogContent>
        <DialogActions sx={{ bgcolor: theme.palette.background.alt }}>
          <MDButton color="secondary" onClick={handleClose}>
            Cancel
          </MDButton>
          <MDButton
            variant="contained"
            sx={{ bgcolor: theme.palette.bnBlue[500] }}
            disableElevation
            style={{ color: "white" }}
            onClick={handleClose}
          >
            Add
          </MDButton>
        </DialogActions>
      </Dialog>
    </>
  );
};
