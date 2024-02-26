import React from "react";
import CSLayout from "../cs-dashboard/layout";
import {
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import MDButton from "src/components/theme/common/MDButton";
import { TbPlus, TbX } from "react-icons/tb";
import { Controller, useForm } from "react-hook-form";
import useShowDialog from "src/hooks/useShowDialog";
import MDTypography from "src/components/theme/common/MDTypography";
import MDBox from "src/components/theme/common/MDBox";
import { TransitionSlidUp } from "src/components/client-service/table/DataGridTableDialog";
import MDDropDown from "src/components/theme/common/MDDropdown";
import { draftOptions } from "src/utils/constants";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DraftsTable from "src/components/client-service/quick-access/DraftsTable";
const Drafts = () => {
  const [show, setShow] = useShowDialog(false);
  return (
    <>
      <CSLayout>
        <Grid container >
          <Grid xs={12} item>
            <Card className={`w-full p-4`}>
              <MDBox
                className={`flex w-full flex-row items-center justify-between pt-4 pb-8`}
              >
                <MDTypography variant={"h6"}>Drafts table</MDTypography>
                <Tooltip title="Add draft" placement="left">
                  <MDButton
                    startIcon={<TbPlus size={14} />}
                    onClick={() => setShow(true)}
                    color="secondary"
                    variant="contained"
                    disableElevation
                    sx={{
                      color: "white",
                      fontSize: 12,
                      bgcolor: "info.main",
                    }}
                  >
                    NEW
                  </MDButton>
                </Tooltip>
              </MDBox>
              <DraftsTable />
            </Card>
          </Grid>
        </Grid>
      </CSLayout>
      <AddDraftDialog show={show} setShow={setShow} />
    </>
  );
};

export default Drafts;

export const ADD_DRAFT_INITIAL_STATE = { title: "", type: 1, description: "" };
export const AddDraftDialog = ({
  show,
  setShow,
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
          bgcolor={"info.main"}
        >
          Add Draft
          <IconButton onClick={handleClose}>
            <TbX stroke="#fff" />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ bgcolor: "background.default" }}>
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

          <MDTypography mt={3.5} mb={1} color={"#697586"} fontSize="small">
            Type
          </MDTypography>
          <MDDropDown options={draftOptions} selectedInd={data.type} />
          <MDTypography mt={3.5} mb={1} color={"#697586"} fontSize="small">
            Description
          </MDTypography>
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
        <DialogActions sx={{ bgcolor: "background.default" }}>
          <MDButton color="secondary" onClick={handleClose}>
            Cancel
          </MDButton>
          <MDButton
            variant="contained"
            sx={{ bgcolor: "info.main" }}
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
