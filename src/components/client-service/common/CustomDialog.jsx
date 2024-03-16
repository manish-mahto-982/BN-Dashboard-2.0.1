import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";
import { TbX } from "react-icons/tb";
import { TransitionSlidUp } from "../table/DataGridTableDialog";

function CustomDialog({
  openDialog,
  setOpenDialog,
  theme,
  dialogTitle,
  dialogContent,
  dialogActionMain,
}) {
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Dialog
        open={openDialog}
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
          {dialogTitle}
          <IconButton onClick={handleClose}>
            <TbX stroke="#fff" />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ bgcolor: "background.default" }}>
          {dialogContent}
        </DialogContent>
        <DialogActions sx={{ bgcolor: "background.default" }}>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "info.main" }}
            disableElevation
            style={{ color: "white" }}
            onClick={handleClose}
          >
            {dialogActionMain}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CustomDialog;
