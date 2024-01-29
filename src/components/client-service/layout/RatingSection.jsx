import {
  Button,
  Grid,
  Icon,
  IconButton,
  Paper,
  Rating,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { navbarIconButton } from "src/components/theme/layout/Navbars/DashboardNavbar/styles";
import Menu from "@mui/material/Menu";
import PerfectScrollbar from "react-perfect-scrollbar";
import { randomNumberGenerator } from "src/utils/helper";
import { api } from "src/services/client-service/api";
import MDTypography from "src/components/theme/common/MDTypography";
import DataTable from "src/components/theme/layout/Tables/DataTable";
import DataGridTableDialog from "../table/DataGridTableDialog";
import { DataGrid } from "@mui/x-data-grid";
import DataGridTable from "../table/DataGridTable";
function RatingSection({ light, darkMode, transparentNavbar }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
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
  const handleCloseTable = () => setOpen(false);
  return (
    <>
      <Tooltip title="Ratings">
        <IconButton
          sx={navbarIconButton}
          disableRipple
          onClick={handleOpenTable}
        >
          <Icon sx={iconsStyle}>star</Icon>
        </IconButton>
      </Tooltip>
      <RatingTable {...{ open, handleCloseTable, setOpen, theme }} />
    </>
  );
}

export default RatingSection;

const RatingTable = ({ open, handleCloseTable, setOpen, theme }) => {
  const [tableData, setTableData] = useState({
    data: [],
    columns: [],
    tableTitle: "",
  });
  const [showTable, setShowTable] = useState(false);
  const handleClick = (res, columns) => {
    console.log("🚀 ~ handleClick ~ data:", res);
    const filterData = Object.values(res.data)[0];
    setTableData({
      ...tableData,
      data: filterData,
      columns,
      tableTitle: Object.keys(res.data)[0]?.split("_")?.join(" "),
    });
    setOpen(false);
    setShowTable(true);
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
        onClose={handleCloseTable}
        sx={{ mt: 2, maxHeight: 440 }}
      >
        <Grid container direction="column">
          <Grid
            item
            pb={2}
            borderBottom={`1px solid ${theme.palette.divider}`}
            xs={12}
            bgcolor={"primary"}
          >
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ pt: 2, px: 2 }}
            >
              <Grid item>
                <Stack direction="row" spacing={4}>
                  <MDTypography fontSize={16} fontWeight="medium" color="text">
                    Client Ratings & Feedback
                  </MDTypography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TableContainer
              component={Paper}
              style={{
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <Table sx={{ minWidth: 320 }} aria-label="customized table">
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
                                ? theme.palette.background.default
                                : theme.palette.background.alt,
                          },
                        }}
                      >
                        <TableCell sx={{ fontSize: 14, py: 0.5 }} scope="row">
                          {
                            <Rating
                              name="half-rating-read"
                              defaultValue={row.stars}
                              precision={0.5}
                              size="medium"
                              readOnly
                            />
                          }
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: 14, py: 0.5 }}
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
          </Grid>
        </Grid>
      </Menu>
      {
        <DataGridTableDialog
          title={tableData.tableTitle}
          open={showTable}
          setOpen={setShowTable}
          dataGrid={
            tableData.data.length !== 0 && (
              <DataGridTable  data={tableData.data} />
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
