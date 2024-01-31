import {
  Badge,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Icon,
  IconButton,
  InputAdornment,
  Paper,
  Rating,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Tooltip,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { navbarIconButton } from "src/components/theme/layout/Navbars/DashboardNavbar/styles";
import Menu from "@mui/material/Menu";
import { randomNumberGenerator } from "src/utils/helper";
import { api } from "src/services/client-service/api";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useMaterialUIController } from "src/context";
import {
  TbCalendarTime,
  TbCirclePlus,
  TbPlus,
  TbStars,
  TbX,
} from "react-icons/tb";
import MDTypography from "src/components/theme/common/MDTypography";
import {
  CalendarIcon,
  DateTimePicker,
  LocalizationProvider,
  pickersLayoutClasses,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { TransitionSlidUp } from "../../table/DataGridTableDialog";
function RatingSection({ light, darkMode, transparentNavbar }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [showAddReminderDialog, setShowAddReminderDialog] = useState(false);
  const [controller, dispatch] = useMaterialUIController();
  const { sidenavColor } = controller;
  const handleOpenTable = (event) => setOpen(event.currentTarget);
  const iconsStyle = ({
    palette: { dark, white, text },
    functions: { rgba },
  }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;
      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }
      return colorValue;
    },
  });
  const handleCloseDialog = () => setOpen(false);
  return (
    <>
      <Badge badgeContent={2} color={"warning"} overlap="circular">
        <Tooltip title="Ratings">
          <IconButton
            sx={navbarIconButton}
            disableRipple
            onClick={handleOpenTable}
          >
            <Icon sx={iconsStyle}>today</Icon>
          </IconButton>
        </Tooltip>
        <ReminderTable
          {...{
            open,
            handleCloseDialog,
            setOpen,
            theme,
            darkMode,
            setShowAddReminderDialog,
            sidenavColor,
          }}
        />
      </Badge>
      <AddReminderDialog
        {...{ theme, sidenavColor }}
        openDialog={showAddReminderDialog}
        setOpenDialog={setShowAddReminderDialog}
      />
    </>
  );
}

export default RatingSection;

const ReminderTable = ({
  open,
  handleCloseDialog,
  setOpen,
  theme,
  darkMode,
  setShowAddReminderDialog,
  sidenavColor,
}) => {
  const [tableData, setTableData] = useState({
    data: [],
    columns: [],
    tableTitle: "",
  });
  const handleClick = (res, columns) => {
    const filterData = Object.values(res.data)[0];
    setTableData({
      ...tableData,
      data: filterData,
      columns,
      tableTitle: Object.keys(res.data)[0]?.split("_")?.join(" "),
    });
    setOpen(false);
    setShowAddReminderDialog(true);
  };
  return (
    <>
      <Menu
        anchorEl={open}
        anchorReference={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={Boolean(open)}
        onClose={handleCloseDialog}
        sx={{
          mt: 2,
          height: 440,
        }}
      >
        <Grid container width={330}>
          <Grid
            item
            pb={2}
            xs={12}
            bgcolor={`${sidenavColor}.main`}
            borderRadius={2}
          >
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
                  <MDTypography fontSize={16} color={"white"}>
                    Reminders
                  </MDTypography>
                </Stack>
                <Tooltip title="Set reminder" placement="left">
                  <IconButton onClick={() => setShowAddReminderDialog(true)}>
                    <TbPlus size={20} color="#fff" />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <>
              <TableContainer
                component={Paper}
                style={{
                  // borderRadius: 0,
                  backgroundColor: theme.palette.background.default,
                  boxShadow: "none",
                  marginTop: 4,
                  borderRadius: 8,
                }}
              >
                <Table aria-label="customized table">
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.title}
                        sx={{
                          transition: "linear",
                          transitionDuration: "300ms",
                          ":hover": {
                            bgcolor: darkMode
                              ? theme.palette.background.main
                              : theme.palette.background.main,
                          },
                        }}
                      >
                        <TableCell
                          sx={{ fontSize: 13, py: 2, color: "light.main" }}
                          component="th"
                          scope="row"
                        >
                          <MDTypography variant={""}>{row.title}</MDTypography>
                          <MDTypography
                            color={theme.palette.primary[300]}
                            lineHeight={1.2}
                            fontSize={"medium"}
                            pt={1}
                          >
                            {row.description}
                          </MDTypography>
                        </TableCell>
                        <TableCell sx={{ fontSize: 14, py: 2 }} align="right">
                          <MDTypography variant={""} whiteSpace={"nowrap"}>
                            {row.reminderDate.split(",")[1]}
                          </MDTypography>
                          <MDTypography
                            fontWeight={"bold"}
                            fontSize={14}
                            variant={"h6"}
                            whiteSpace={"nowrap"}
                          >
                            {row.reminderDate.split(",")[0]}
                          </MDTypography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          </Grid>
        </Grid>
      </Menu>
    </>
  );
};

const AddReminderDialog = ({
  openDialog,
  setOpenDialog,
  theme,
  sidenavColor,
}) => {
  const [value, setValue] = useState(3);
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Dialog open={openDialog} onClose={handleClose}  TransitionComponent={TransitionSlidUp}>
        <DialogTitle
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"#fff"}
          bgcolor={`${sidenavColor}.main`}
        >
          <MDTypography color={"white"} fontWeight={"regular"} fontSize={'nor'}>
            {" "}
            Set Reminder
          </MDTypography>
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
                      [`.${pickersLayoutClasses.actionBar}`]: {},
                      "& .MuiClock-pin ,.MuiClockPointer-root": {
                        bgcolor: `${sidenavColor}.main`,
                      },

                      "& .MuiClockPointer-thumb": {
                        borderColor: `${sidenavColor}.main`,
                        bgcolor: "white !important",
                      },
                      "& .MuiDialogActions-root button.MuiButtonBase-root,.MuiButtonBase-root.MuiPickersDay-root.Mui-selected,.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root":
                        {
                          bgcolor: `${sidenavColor}.main`,
                          color: "#fff",
                        },
                      "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {
                        bgcolor: `${sidenavColor}.main`,
                        color: "#fff",
                      },
                      "& .Mui-selected": {
                        borderColor: `${sidenavColor}.main `,
                      },
                      //   time select style
                      "& .MuiList-root.MuiList-padding.MuiMultiSectionDigitalClockSection-root":
                        {
                          pr: 21,
                        },
                      "& .MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMultiSectionDigitalClockSection-item":
                        {
                          bgcolor: `${sidenavColor}.main`,
                          maxWidth: 10,
                        },
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
            sx={{ bgcolor: `${sidenavColor}.main` }}
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
