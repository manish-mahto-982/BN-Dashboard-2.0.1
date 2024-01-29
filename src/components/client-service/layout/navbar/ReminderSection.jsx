import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// assets
import {
  TbCalendarTime,
  TbCirclePlus,
  TbPlus,
  TbStars,
  TbX,
} from "react-icons/tb";
import {
  DateTimePicker,
  LocalizationProvider,
  pickersLayoutClasses,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import NavbarButtonWithOverlay from "../../navbar/NavbarButtonWithOverlay";
import { useMaterialUIController } from "src/context";

// ==============================|| NOTIFICATION ||============================== //

const ReminderSection = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [controller, dispatch] = useMaterialUIController();
  const { sidenavColor } = controller;

  const theme = useTheme();
  const handleOpenSubChildDialog = () => {
    setOpenDialog(true);
    return openDialog;
  };

  return (
    <Badge badgeContent={2} overlap="circular" sx={{mr:1,mt:0.2}} color="warning">
      <NavbarButtonWithOverlay
        tooltipTitle="Reminders"
        openDialog={openDialog}
        Icon={TodayRoundedIcon}
        subChildren={
          <AddReminderDialog
            sidenavColor={sidenavColor}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            theme={theme}
          />
        }
      >
        <ReminderTable
          theme={theme}
          handleOpenSubChildDialog={handleOpenSubChildDialog}
        />
      </NavbarButtonWithOverlay>
    </Badge>
  );
};

export default ReminderSection;

const AddReminderDialog = ({
  openDialog,
  setOpenDialog,
  theme,
  sidenavColor,
}) => {
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"#fff"}
        >
          Set Reminder
          <IconButton onClick={handleClose}>
            <TbX stroke="#fff" />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ bgcolor: theme.palette.background.default }}>
          <TextField
            autoFocus
            color="secondary"
            variant="standard"
            id="title"
            label="Title"
            type="text"
            fullWidth
            sx={{ mt: 3 }}
          />
          <TextField
            autoFocus
            color="secondary"
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            sx={{ mt: 4 }}
          />
          <Box mt={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                slotProps={{
                  layout: {
                    sx: {
                      [`.${pickersLayoutClasses.contentWrapper}`]: {
                        bgcolor: theme.palette.background.default,
                      },
                      [`.${pickersLayoutClasses.actionBar}`]: {
                        bgcolor: theme.palette.background.alt,
                      },
                      "& .MuiDialogActions-root button.MuiButtonBase-root,.MuiButtonBase-root.MuiPickersDay-root.Mui-selected,.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root":
                        {
                          bgcolor: sidenavColor,
                          color: "#fff",
                        },
                      "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected":
                        {},
                    },
                  },
                }}
                defaultValue={dayjs()}
              />
            </LocalizationProvider>
          </Box>
        </DialogContent>
        <DialogActions sx={{ bgcolor: theme.palette.background.alt }}>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: sidenavColor }}
            disableElevation
            style={{ color: "white" }}
            onClick={handleClose}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const ReminderTable = ({ theme, handleOpenSubChildDialog, sidenavColor }) => {
  const rows = [
    {
      title: "Important reminder",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, vitae!",
      reminderDate: "Mon 20 Jan 24,11:00 AM",
    },
    {
      title: "2nd reminder",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, vitae!",
      reminderDate: "Mon 21 Jan 24,11:00 AM",
    },
  ];
  return (
    <Grid container direction="column">
      <Grid item pb={2} xs={12} bgcolor={sidenavColor}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ pt: 2, px: 2 }}
        >
          <Grid
            item
            display={"flex"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <Stack direction="row" spacing={2} alignItems={"center"}>
              <TbCalendarTime stroke="#fff" size={22} />
              <Typography fontSize={16} variant="subtitle1" color={"#fff"}>
                Reminders
              </Typography>
            </Stack>
            <Tooltip title="Set reminder" placement="left">
              <IconButton onClick={handleOpenSubChildDialog}>
                <TbPlus size={20} color="#fff" />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <PerfectScrollbar
          style={{
            overflowY: "scroll",
            maxHeight: "400px",
          }}
        >
          <TableContainer
            component={Paper}
            style={{
              borderRadius: 0,
              backgroundColor: theme.palette.background.default,
            }}
          >
            <Table
              sx={{ minWidth: 360, maxWidth: 400 }}
              aria-label="customized table"
            >
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.title}
                    sx={{
                      transition: "linear",
                      transitionDuration: "300ms",
                      ":hover": {
                        bgcolor:
                          theme.palette.mode === "dark"
                            ? theme.palette.background.default
                            : theme.palette.background.alt,
                      },
                    }}
                  >
                    <TableCell
                      sx={{ fontSize: 13, py: 2 }}
                      component="th"
                      scope="row"
                    >
                      {row.title}

                      <Typography
                        color={theme.palette.primary[300]}
                        lineHeight={1.2}
                        pt={1}
                      >
                        {row.description}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ fontSize: 14, py: 2 }} align="right">
                      {row.reminderDate.split(",")[1]}
                      <Typography fontWeight={700} whiteSpace={"nowrap"}>
                        {row.reminderDate.split(",")[0]}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </PerfectScrollbar>
      </Grid>
    </Grid>
  );
};
