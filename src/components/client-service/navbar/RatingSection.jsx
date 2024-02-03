import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { COMMON_DATA_ALL_TABLE } from "src/utils/constants";
// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// assets
import { TbCalendarTime, TbStars } from "react-icons/tb";
import NavbarButtonWithOverlay from "./NavbarButtonWithOverlay";
import { randomNumberGenerator } from "src/utils/helper";
import useShowDialog from "src/hooks/useShowDialog";
import DataGridTableDialog from "../table/DataGridTableDialog";
import DataGridTable from "../table/DataGridTable";
import { useDispatch } from "react-redux";
import { api } from "src/services/client-service/api";

// ==============================|| NOTIFICATION ||============================== //

const RatingSection = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [value, setValue] = useState("");
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const prevOpen = useRef(open);

  const handleChange = (event) => {
    if (event?.target.value) setValue(event?.target.value);
  };

  const handleShowReminderDialog = () => {
    setOpen(false);
    setOpenDialog(true);
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);
  return (
    <Badge badgeContent={4} color="warning">
      <NavbarButtonWithOverlay
        tooltipTitle="Ratings"
        openDialog={openDialog}
        Icon={TbStars}
        subChildren={
          <AddReminderDialog
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          />
        }
      >
        <RatingTable theme={theme} />
      </NavbarButtonWithOverlay>
    </Badge>
  );
};

export default RatingSection;

const AddReminderDialog = ({ openDialog, setOpenDialog }) => {
  const [value, setValue] = useState(3);
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Add Rating</DialogTitle>
        <Rating
          name="simple-controlled"
          value={value}
          style={{ paddingInline: 40, paddingBlock: 20 }}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            color="success"
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

const RatingTable = ({ theme }) => {
  const [showDialog, setShowDialog] = useShowDialog(false);
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState({
    data: [],
    columns: [],
    tableTitle: "",
  });
  const handleClick = (res, columns) => {
    console.log("🚀 ~ handleClick ~ data:", res);
    const filterData = Object.values(res.data)[0];
    setTableData({
      ...tableData,
      data: filterData,
      columns,
      tableTitle: Object.keys(res.data)[0]?.split("_")?.join(" "),
    });
    setShowDialog(true);
  };

  return (
    <>
      <Grid container direction="column">
        <Grid item pb={2} xs={12} bgcolor={'info.main'}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{ pt: 2, px: 2 }}
          >
            <Grid item>
              <Stack direction="row" spacing={4}>
                <Typography fontSize={16} variant="subtitle1" color={"#fff"}>
                  Client Ratings & Feedback
                </Typography>
              </Stack>
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
                backgroundColor: 'background.default',
              }}
            >
              <Table sx={{ minWidth: 320 }} aria-label="customized table">
                <TableHead sx={{ bgcolor: 'background.default' }}>
                  <TableRow>
                    <TableCell sx={{ fontSize: 14 }}>Stars</TableCell>
                    <TableCell align="center" sx={{ fontSize: 14 }}>
                      Total
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => {
                    let trigger;
                    let res;
                    if (row.fetchQuery) {
                      [trigger, res] = row.fetchQuery?.();
                    }
                    const handleButtonClick = () => {
                      trigger?.();
                    };
                    useEffect(() => {
                      res?.data && handleClick(res, row.columns);
                    }, [res]);
                    return (
                      <TableRow
                        key={row.stars}
                        sx={{
                          transition: "linear",
                          transitionDuration: "300ms",
                          ":hover": {
                            bgcolor:
                              theme.palette.mode === "dark"
                                ? 'background.default'
                                : 'background.default',
                          },
                        }}
                      >
                        <TableCell
                          sx={{ fontSize: 14, py: 1.2 }}
                          component="th"
                          scope="row"
                        >
                          {
                            <Rating
                              name="half-rating-read"
                              defaultValue={row.stars}
                              precision={0.5}
                              readOnly
                            />
                          }
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: 14, py: 1.2 }}
                          align="center"
                        >
                          <Button
                            onClick={() => handleButtonClick()}
                            color="secondary"
                          >
                            {row.rating}
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </PerfectScrollbar>
        </Grid>
      </Grid>
      {
        <DataGridTableDialog
          title={tableData.tableTitle}
          open={showDialog}
          setOpen={setShowDialog}
          dataGrid={
            tableData.data.length !== 0 && (
              <DataGridTable data={tableData.data} />
            )
          }
        />
      }
    </>
  );
};

const rows = [
  {
    stars: 5,
    rating: randomNumberGenerator(),
    fetchQuery: () => api.endpoints.getUserRating.useLazyQuery(),
    columns: [
      { id: "client_details", label: "client details" },
      { id: "program_details", label: "program details" },
      { id: "rating", label: "Rating" },
      { id: "feedback", label: "Feedback" },
    ],
  },
  {
    stars: 4,
    rating: randomNumberGenerator(),
    fetchQuery: () => api.endpoints.getUserRating.useLazyQuery(),
    columns: [
      { id: "client_details", label: "client details" },
      { id: "program_details", label: "program details" },
      { id: "rating", label: "Rating" },
      { id: "feedback", label: "Feedback" },
    ],
  },
  {
    stars: 3,
    rating: randomNumberGenerator(),
    fetchQuery: () => api.endpoints.getUserRating.useLazyQuery(),
    columns: [
      { id: "client_details", label: "client details" },
      { id: "program_details", label: "program details" },
      { id: "rating", label: "Rating" },
      { id: "feedback", label: "Feedback" },
    ],
  },
  {
    stars: 2,
    rating: randomNumberGenerator(),
    fetchQuery: () => api.endpoints.getUserRating.useLazyQuery(),
    columns: [
      { id: "client_details", label: "client details" },
      { id: "program_details", label: "program details" },
      { id: "rating", label: "Rating" },
      { id: "feedback", label: "Feedback" },
    ],
  },
  {
    stars: 1,
    rating: randomNumberGenerator(),
    fetchQuery: () => api.endpoints.getUserRating.useLazyQuery(),
    columns: [
      { id: "client_details", label: "client details" },
      { id: "program_details", label: "program details" },
      { id: "rating", label: "Rating" },
      { id: "feedback", label: "Feedback" },
    ],
  },
];
