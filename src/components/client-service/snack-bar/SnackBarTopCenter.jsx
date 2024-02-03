import React from "react";
import Slide from "@mui/material/Slide";
import { Alert, Snackbar } from "@mui/material";

function TransitionLeft(props) {
  return <Slide {...props} direction="top" />;
}

export const SNACKBAR_TOP_CENTER_INITIAL_STATE = {
  open: false,
  vertical: "top",
  horizontal: "center",
  message: "Copied Successfully!",
  severity: "success",
};

function SnackBarTopCenter({ state, setAlertState }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={3300}
      open={state.open}
      onClose={() => setAlertState({ ...state, open: false })}
      TransitionComponent={TransitionLeft}
    >
      <Alert
        onClose={() => setAlertState({ ...state, open: false })}
        severity={state.severity}
        sx={{ width: "100%" }}
      >
        {state.message}
      </Alert>
    </Snackbar>
  );
}

export default SnackBarTopCenter;
