import { Box, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider, pickersLayoutClasses } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import CustomDialog from "src/components/client-service/common/CustomDialog";
import ComboBox from "src/components/common/forms/ComboBox";

export const AddWeightDialog = ({ open, setOpen, theme }) => (
  <CustomDialog
    dialogTitle={"Add Weight"}
    dialogContent={
      <Box width={300} mt={4}>
        <TextField
          type="number"
          label="Session"
          fullWidth
          color="secondary"
          sx={{ pb: 3 }}
        />
        <ComboBox options={["Start weight", "Mid weight", "End weight"]} />
        <TextField
          type="number"
          label="Weight in Kg."
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />
      </Box>
    }
    openDialog={open}
    theme={theme}
    setOpenDialog={setOpen}
    dialogActionMain={"Save"}
  />
);

export const EditWeightDialog = ({ open, setOpen, theme }) => (
  <CustomDialog
    dialogTitle={"Edit Weight"}
    dialogContent={
      <Box width={300} mt={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            slotProps={{
              textField: {
                fullWidth: true,
                color: "secondary",
                label: "Date",
              },
              layout: {
                sx: {
                  [`.${pickersLayoutClasses.contentWrapper}`]: {
                    bgcolor: 'background.default',
                  },
                  [`.${pickersLayoutClasses.actionBar}`]: {
                    bgcolor: 'background.default',
                  },
                  "& .MuiDialogActions-root button.MuiButtonBase-root,.MuiButtonBase-root.MuiPickersDay-root.Mui-selected,.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root":
                    {
                      bgcolor: 'info.main',
                      color: "#fff",
                    },
                  "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {},
                },
              },
            }}
            defaultValue={dayjs()}
          />
        </LocalizationProvider>
        <TextField
          type="number"
          label="Session"
          fullWidth
          color="secondary"
          sx={{ my: 3 }}
        />
        <ComboBox options={["Start weight", "Mid weight", "End weight"]} />
        <TextField
          type="number"
          label="Weight in Kg."
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />
      </Box>
    }
    openDialog={open}
    theme={theme}
    setOpenDialog={setOpen}
    dialogActionMain={"Save"}
  />
);
export const AddInchDialog = ({ open, setOpen, theme }) => (
  <CustomDialog
    dialogTitle={"Add Inch"}
    dialogContent={
      <Box width={300} mt={4}>
        <TextField
          type="number"
          label="Session"
          fullWidth
          color="secondary"
          sx={{ pb: 3 }}
        />
        <ComboBox
          options={["Start weight", "Mid weight", "End weight", "Other"]}
        />
        <TextField
          type="number"
          label="Chest"
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />
        <TextField
          type="number"
          label="Waist"
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />
        <TextField
          type="number"
          label="Hip"
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />
      </Box>
    }
    openDialog={open}
    theme={theme}
    setOpenDialog={setOpen}
    dialogActionMain={"Save"}
  />
);

export const EditInchDialog = ({ open, setOpen, theme }) => (
  <CustomDialog
    dialogTitle={"Edit Inch"}
    dialogContent={
      <Box width={300} mt={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            slotProps={{
              textField: {
                fullWidth: true,
                color: "secondary",
                label: "Date",
              },
              layout: {
                sx: {
                  [`.${pickersLayoutClasses.contentWrapper}`]: {
                    bgcolor: 'background.default',
                  },
                  [`.${pickersLayoutClasses.actionBar}`]: {
                    bgcolor: 'background.default',
                  },
                  "& .MuiDialogActions-root button.MuiButtonBase-root,.MuiButtonBase-root.MuiPickersDay-root.Mui-selected,.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root":
                    {
                      bgcolor: 'info.main',
                      color: "#fff",
                    },
                  "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {},
                },
              },
            }}
            defaultValue={dayjs()}
          />
        </LocalizationProvider>
        <TextField
          type="number"
          label="Session"
          fullWidth
          color="secondary"
          sx={{ my: 3 }}
        />
        <ComboBox
          options={["Start weight", "Mid weight", "End weight", "Other"]}
        />
        <TextField
          type="number"
          label="Chest"
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />
        <TextField
          type="number"
          label="Waist"
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />
        <TextField
          type="number"
          label="Hip"
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />  
      </Box>
    }
    openDialog={open}
    theme={theme}
    setOpenDialog={setOpen}
    dialogActionMain={"Save"}
  />
);
export const AddPhotoDialog = ({ open, setOpen, theme }) => (
  <CustomDialog
    dialogTitle={"Add Photo"}
    dialogContent={
      <Box width={300} mt={4}>
        <TextField
          type="number"
          label="Session"
          fullWidth
          color="secondary"
          sx={{ pb: 3 }}
        />
        <ComboBox
          options={["Start weight", "Mid weight", "End weight", "Other"]}
        />
        <TextField
          type="number"
          label="Chest"
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />
        <TextField
          type="number"
          label="Waist"
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />
        <TextField
          type="number"
          label="Hip"
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />
      </Box>
    }
    openDialog={open}
    theme={theme}
    setOpenDialog={setOpen}
    dialogActionMain={"Save"}
  />
);

export const EditPhotoDialog = ({ open, setOpen, theme }) => (
  <CustomDialog
    dialogTitle={"Edit Photo"}
    dialogContent={
      <Box width={300} mt={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            slotProps={{
              textField: {
                fullWidth: true,
                color: "secondary",
                label: "Date",
              },
              layout: {
                sx: {
                  [`.${pickersLayoutClasses.contentWrapper}`]: {
                    bgcolor: 'background.default',
                  },
                  [`.${pickersLayoutClasses.actionBar}`]: {
                    bgcolor: 'background.default',
                  },
                  "& .MuiDialogActions-root button.MuiButtonBase-root,.MuiButtonBase-root.MuiPickersDay-root.Mui-selected,.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root":
                    {
                      bgcolor: 'info',
                      color: "#fff",
                    },
                  "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {},
                },
              },
            }}
            defaultValue={dayjs()}
          />
        </LocalizationProvider>
        <TextField
          type="number"
          label="Session"
          fullWidth
          color="secondary"
          sx={{ my: 3 }}
        />
        <ComboBox
          options={["Start weight", "Mid weight", "End weight", "Other"]}
        />
        <TextField
          type="number"
          label="Chest"
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />
        <TextField
          type="number"
          label="Waist"
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />
        <TextField
          type="number"
          label="Hip"
          fullWidth
          color="secondary"
          sx={{ mt: 3 }}
        />  
      </Box>
    }
    openDialog={open}
    theme={theme}
    setOpenDialog={setOpen}
    dialogActionMain={"Save"}
  />
);
