import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonBase,
  CardActions,
  Chip,
  ClickAwayListener,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Paper,
  Popover,
  Popper,
  Rating,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";

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
<<<<<<< HEAD
import moment from "moment";
=======
>>>>>>> c6e2c0431352c8ca305fb0321f33981d1a7eba8f
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Transitions from "../extended/Transitions";
import NavbarButton from "./NavbarButton";
import NavbarButtonWithOverlay from "./NavbarButtonWithOverlay";
import {
  DateTimePicker,
  LocalizationProvider,
  pickersLayoutClasses,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

// ==============================|| NOTIFICATION ||============================== //

const RatingSection = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const handleOpenSubChildDialog = () => {
    setOpenDialog(true);
    return openDialog;
  };

  return (
    <Badge badgeContent={2} color="warning">
      <NavbarButtonWithOverlay
        tooltipTitle="Reminders"
        openDialog={openDialog}
        Icon={TbCalendarTime}
        subChildren={
          <AddReminderDialog
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

export default RatingSection;

const AddReminderDialog = ({ openDialog, setOpenDialog, theme }) => {
  const [value, setValue] = useState(3);
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
<<<<<<< HEAD
          bgcolor={theme.palette.bnBlue[500]}
=======
          bgcolor={'info.main'}
>>>>>>> c6e2c0431352c8ca305fb0321f33981d1a7eba8f
        >
          Set Reminder
          <IconButton onClick={handleClose}>
            <TbX stroke="#fff" />
          </IconButton>
        </DialogTitle>
<<<<<<< HEAD
        <DialogContent sx={{ bgcolor: theme.palette.background.default }}>
=======
        <DialogContent sx={{ bgcolor: 'background.default' }}>
>>>>>>> c6e2c0431352c8ca305fb0321f33981d1a7eba8f
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
<<<<<<< HEAD
                        bgcolor: theme.palette.background.default,
                      },
                      [`.${pickersLayoutClasses.actionBar}`]: {
                        bgcolor: theme.palette.background.alt,
                      },
                      "& .MuiDialogActions-root button.MuiButtonBase-root,.MuiButtonBase-root.MuiPickersDay-root.Mui-selected,.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root":
                        {
                          bgcolor: theme.palette.bnBlue[500],
=======
                        bgcolor: 'background.default',
                      },
                      [`.${pickersLayoutClasses.actionBar}`]: {
                        bgcolor: 'background.default',
                      },
                      "& .MuiDialogActions-root button.MuiButtonBase-root,.MuiButtonBase-root.MuiPickersDay-root.Mui-selected,.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root":
                        {
                          bgcolor: 'info.main',
>>>>>>> c6e2c0431352c8ca305fb0321f33981d1a7eba8f
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
<<<<<<< HEAD
        <DialogActions sx={{ bgcolor: theme.palette.background.alt }}>
=======
        <DialogActions sx={{ bgcolor: 'background.default' }}>
>>>>>>> c6e2c0431352c8ca305fb0321f33981d1a7eba8f
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
<<<<<<< HEAD
            sx={{ bgcolor: theme.palette.bnBlue[500] }}
=======
            sx={{ bgcolor: 'info.main' }}
>>>>>>> c6e2c0431352c8ca305fb0321f33981d1a7eba8f
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

const ReminderTable = ({ theme, handleOpenSubChildDialog }) => {
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
<<<<<<< HEAD
      <Grid item pb={2} xs={12} bgcolor={theme.palette.bnBlue[500]}>
=======
      <Grid item pb={2} xs={12} bgcolor={'info.main'}>
>>>>>>> c6e2c0431352c8ca305fb0321f33981d1a7eba8f
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
<<<<<<< HEAD
              backgroundColor: theme.palette.background.default,
=======
              backgroundColor: 'background.default',
>>>>>>> c6e2c0431352c8ca305fb0321f33981d1a7eba8f
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
<<<<<<< HEAD
                            ? theme.palette.background.default
                            : theme.palette.background.alt,
=======
                            ? 'background.default'
                            : 'background.default',
>>>>>>> c6e2c0431352c8ca305fb0321f33981d1a7eba8f
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
