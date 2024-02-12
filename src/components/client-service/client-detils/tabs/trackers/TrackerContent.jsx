import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  gridClasses,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  DateTimePicker,
  LocalizationProvider,
  pickersLayoutClasses,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
import {
  TbCamera,
  TbCheck,
  TbEdit,
  TbRuler2,
  TbScaleOutline,
  TbTrash,
} from "react-icons/tb";

import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import IconButtonWithToolTip from "src/components/client-service/common/IconButtonWithToolTip";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import ComboBox from "src/components/client-service/forms/ComboBox";
import DateField from "src/components/client-service/forms/DateField";
import LayoutContainerTitle from "src/components/client-service/layout/LayoutContainerTitle";

import useShowDialog from "src/hooks/useShowDialog";

import {
  AddInchDialog,
  AddPhotoDialog,
  AddWeightDialog,
  EditInchDialog,
  EditPhotoDialog,
  EditWeightDialog,
} from "./Dialogs";
import MDBox from "src/components/theme/common/MDBox";
import MDButton from "src/components/theme/common/MDButton";

function TrackerContent({ theme }) {
  const [open, setOpen] = useShowDialog(false);
  const [openEdit, setOpenEdit] = useShowDialog(false);
  const [openAddInch, setOpenAddInch] = useShowDialog(false);
  const [openEditInch, setOpenEditInch] = useShowDialog(false);
  const [openAddPhoto, setOpenAddPhoto] = useShowDialog(false);
  const [openEditPhoto, setOpenEditPhoto] = useShowDialog(false);
  const editClick = (params) => {
    console.log(params);
    setOpenEdit(true);
  };
  const columns = [
    {
      field: "date",
      headerName: "Date",
      headerClassName: "custom-data-grid-table-header",
      flex: 1,
      sortable: false,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "session",
      headerName: "Session",
      headerClassName: "custom-data-grid-table-header",
      flex: 1,
      sortable: false,
    },
    {
      field: "day",
      headerName: "Day",
      headerClassName: "custom-data-grid-table-header",
      flex: 1,
      sortable: false,
    },
    {
      field: "wt",
      headerName: "Wt (kg)",
      headerClassName: "custom-data-grid-table-header",
      flex: 1,
      sortable: false,
    },
    {
      field: "diff",
      headerName: "Diff (kg)",
      headerClassName: "custom-data-grid-table-header",
      flex: 1,
      sortable: false,
    },
    {
      field: "action",
      headerName: "Action",
      headerClassName: "custom-data-grid-table-header",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <FlexBoxBetween width={"100%"}>
          <IconButtonWithToolTip
            iconButtonProps={{
              color: "success",
              onClick: () => editClick(params),
            }}
            Icon={() => <TbEdit size={18} />}
          />
          <IconButtonWithToolTip
            iconButtonProps={{ color: "error" }}
            Icon={() => <TbTrash size={18} />}
          />
          <MDBox
            sx={{
              display: "flex",
              alignItems: "center",
              px: 1.5,
              py: 0.5,
              borderRadius: 10,
              columnGap: 0.5,
              bgcolor: `rgba(0,255,0,0.15)`,
              color: "success.main",
            }}
          >
            Approved
            {/* <TbCheck size={16} /> */}
          </MDBox>
        </FlexBoxBetween>
      ),
    },
  ];
  const inchColumns = [
    {
      field: "date",
      headerName: "Date",
      headerClassName: "custom-data-grid-table-header",
      flex: 1,
      minWidth: 160,
      sortable: false,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "session",
      headerName: "Session",
      headerClassName: "custom-data-grid-table-header",
      flex: 1,
      minWidth: 90,
      sortable: false,
    },
    {
      field: "day",
      headerName: "Day",
      minWidth: 100,
      headerClassName: "custom-data-grid-table-header",
      flex: 1,
      sortable: false,
    },
    {
      field: "chest",
      headerName: "Chest",
      headerClassName: "custom-data-grid-table-header",
      flex: 1,
      minWidth: 75,
      sortable: false,
    },
    {
      field: "waist",
      headerName: "Waist",
      headerClassName: "custom-data-grid-table-header",
      flex: 1,
      minWidth: 75,
      sortable: false,
    },
    {
      field: "hip",
      headerName: "Hip",
      headerClassName: "custom-data-grid-table-header",
      minWidth: 55,
      flex: 1,
      sortable: false,
    },
    {
      field: "action",
      headerName: "Action",
      headerClassName: "custom-data-grid-table-header",
      flex: 1,
      minWidth: 170,
      sortable: false,
      renderCell: (params) => (
        <FlexBoxBetween width={"100%"}>
          <IconButtonWithToolTip
            iconButtonProps={{
              color: "success",
              onClick: () => editClick(params),
            }}
            Icon={() => <TbEdit size={18} />}
          />
          <IconButtonWithToolTip
            iconButtonProps={{ color: "error" }}
            Icon={() => <TbTrash size={18} />}
          />
          <MDBox
            sx={{
              display: "flex",
              alignItems: "center",
              px: 1.5,
              py: 0.5,
              borderRadius: 10,
              columnGap: 0.5,
              bgcolor: `rgba(0,255,0,0.15)`,
              color: `success.main`,
            }}
          >
            Approved
            {/* <TbCheck size={16} /> */}
          </MDBox>
        </FlexBoxBetween>
      ),
    },
  ];
  return (
    <>
      <Box height={"100%"}>
        <Grid container pb={3}>
          {/* Weight Tracker */}
          <Grid item xs={12} pb={3}>
            <FlexBoxBetween minWidth={"100%"}>
              <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                <TbScaleOutline
                  size={32}
                  color={"info"}
                  strokeWidth={1.2}
                  style={{
                    padding: "6px",
                    backgroundColor: "background.default",
                    borderRadius: "50%",
                  }}
                />
                <LayoutContainerTitle theme={theme} title={"Weight Tracker"} />
              </Stack>

              <PrimaryButton theme={theme} onClick={() => setOpen(true)}>
                Add Weight
              </PrimaryButton>
            </FlexBoxBetween>
            <MDBox className={"overflow-x-scroll"}>
              <DataGrid
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                  },
                }}
                disableColumnMenu={true}
                rows={data}
                getRowId={(params) => params.date}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                columns={columns}
                slots={{
                  pagination: () => (
                    <Typography
                      fontSize={"small"}
                      textAlign={"center"}
                      mx={"auto"}
                    >
                      Total weight loss in this session :{" "}
                      <span style={{ color: "red", fontWeight: 600 }}>
                        18.70 Kg
                      </span>
                    </Typography>
                  ),
                }}
                sx={{
                  minWidth: "980px",
                  mt: 2,
                  fontSize: "small",
                  bgcolor: "background.default",
                  ".MuiDataGrid-cell:focus-within": { outline: "none" },
                  [`& .${gridClasses.cell}`]: {
                    py: 1,
                  },
                  "& .MuiTablePagination-selectLabel,.MuiTablePagination-displayedRows":
                    {
                      fontSize: "small",
                    },
                  color: "text.dark",
                  ".MuiTablePagination-root": {
                    color: "text.dark",
                    ".MuiTablePagination-actions button": {
                      color: "text.dark",
                    },
                  },
                }}
              />
            </MDBox>
          </Grid>
          {/* Inch Tracker */}
          <Grid item xs={12} pb={3} mt={6}>
            <FlexBoxBetween minWidth={"100%"}>
              <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                <TbRuler2
                  size={32}
                  color={"info"}
                  strokeWidth={1.2}
                  style={{
                    padding: "6px",
                    backgroundColor: "background.default",
                    borderRadius: "50%",
                  }}
                />
                <LayoutContainerTitle theme={theme} title={"Inch Tracker"} />
              </Stack>
              <PrimaryButton theme={theme} onClick={() => setOpenAddInch(true)}>
                Add Inch
              </PrimaryButton>
            </FlexBoxBetween>
            <MDBox className={"overflow-x-scroll"}>
              <DataGrid
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                  },
                }}
                disableColumnMenu={true}
                rows={inchData}
                getRowId={(params) => params.date}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                columns={inchColumns}
                slots={{
                  pagination: null,
                }}
                sx={{
                  minWidth: "740px",
                  mt: 2,
                  fontSize: "small",
                  bgcolor: "background.default",
                  ".MuiDataGrid-cell:focus-within": { outline: "none" },
                  [`& .${gridClasses.cell}`]: {
                    py: 1,
                  },
                  "& .MuiTablePagination-selectLabel,.MuiTablePagination-displayedRows":
                    {
                      fontSize: "small",
                    },
                  color: "text.dark",
                  ".MuiTablePagination-root": {
                    color: "text.dark",
                    ".MuiTablePagination-actions button": {
                      color: "text.dark",
                    },
                  },
                }}
              />
            </MDBox>
          </Grid>
          {/* Photo Tracker */}
          <Grid item xs={12} pb={3} mt={6}>
            <FlexBoxBetween minWidth={"100%"}>
              <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                <TbCamera
                  size={32}
                  color={"info"}
                  strokeWidth={1.2}
                  style={{
                    padding: "6px",
                    backgroundColor: "background.default",
                    borderRadius: "50%",
                  }}
                />
                <LayoutContainerTitle theme={theme} title={"Photo Tracker"} />
              </Stack>
              <PrimaryButton
                theme={theme}
                onClick={() => setOpenAddPhoto(true)}
              >
                Add Photo
              </PrimaryButton>
            </FlexBoxBetween>
          </Grid>
          <Grid item xs={12} sx={6} lg={4}>
            <Card
              elevation={0}
              variant="outlined"
              sx={{
                maxWidth: 300,
                ":hover": {
                  boxShadow: "#000",
                },
              }}
            >
              <CardHeader
                title="Assessment Photo"
                sx={{
                  textAlign: "center",
                }}
              />
              <Divider sx={{ pt: 0 }} />
              <CardMedia
                sx={{
                  height: 300,
                  width: 150,
                  objectFit: "cover",
                  mx: "auto",
                  my: 1,
                }}
                image="https://www.balancenutrition.in/images/testimonial/before_f3895dd5.png?cache=4"
                title="green iguana"
              />

              <CardActions sx={{ justifyContent: "space-between" }}>
                <MDButton color="error" size="small">
                  Delete
                </MDButton>
                <MDButton color="info" size="small">
                  Edit
                </MDButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
      {
        <>
          <AddWeightDialog theme={theme} open={open} setOpen={setOpen} />
          <EditWeightDialog
            theme={theme}
            open={openEdit}
            setOpen={setOpenEdit}
          />
          <AddInchDialog
            theme={theme}
            open={openAddInch}
            setOpen={setOpenAddInch}
          />
          <EditInchDialog
            theme={theme}
            open={openEditInch}
            setOpen={setOpenEditInch}
          />
          <AddPhotoDialog
            theme={theme}
            open={openAddPhoto}
            setOpen={setOpenAddPhoto}
          />
          <EditPhotoDialog
            theme={theme}
            open={openEditPhoto}
            setOpen={setOpenEditPhoto}
          />
        </>
      }
    </>
  );
}

export default TrackerContent;

const data = [
  {
    date: dayjs().format("Do MMM | hh:mm a"),
    session: 0,
    day: "Start Weight",
    wt: 70,
    diff: 0,
  },
];

const inchData = [
  {
    date: dayjs().format("Do MMM | hh:mm a"),
    session: 0,
    day: "Start Weight",
    chest: 50,
    waist: 50,
    hip: 50.1,
  },
];
