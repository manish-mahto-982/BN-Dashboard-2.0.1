import {
  Autocomplete,
  Box,
  Button,
  Card,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MDBadge from "src/components/theme/common/MDBadge";
import MDBox from "src/components/theme/common/MDBox";
import MDTypography from "src/components/theme/common/MDTypography";
import React from "react";
import useSwalWrapper from "src/vendors/sweetalert2/hooks";

import "./css/style.css";
import MDButton from "src/components/theme/common/MDButton";
import AddLead from "src/components/theme/layout/Navbars/DashboardNavbar/TopbarPopup/AddLead";
function PrimeSegment() {
  const Swal = useSwalWrapper();
  const sweetAlerts = () => {
    Swal.fire({
      icon: "success",

      title: "Success",
      text: "Lead Assign Successfully",
    });
  };
  const columns = [
    {
      field: "NameDetails",
      headerName: "Name & Details",
      width: 250,
      renderCell: (params) => (
        <div
          style={{
            paddingBottom: "20%",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div>
            <strong>Name: </strong>

            {params.row.NameDetails}
          </div>
          <div>
            <strong>Email: </strong>
            {params.row.email}
          </div>
          <div>
            <strong>Mobile: </strong>
            {params.row.mobileNo}
          </div>
          <div>
            <strong>Gender: </strong>
            {params.row.gender}
          </div>
          <div>
            <strong>Age: </strong>
            {params.row.age}
          </div>
          <div>
            <strong>Date: </strong>
            {params.row.date}
          </div>
        </div>
      ),
    },
    {
      field: "HealthIssueBMI",
      headerName: "Health Issue & BMI",
      width: 200,
      renderCell: (params) => (
        <div
          style={{
            paddingBottom: "20%",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div>
            <strong style={{ color: "green" }}>HS SnapShot</strong>
          </div>
          <div>
            <strong>Taken: </strong>
            {params.row.HSTaken}
          </div>
          <div>
            <strong>Health Category: </strong>
            {params.row.healthCategory}
          </div>
          <div>
            <strong>Medi. Issue: </strong>
            {params.row.mediIssues}
          </div>
          <div>
            <strong>Curr. Wt: </strong>
            {params.row.currWT}
          </div>
          <div>
            <strong>Height: </strong>
            {params.row.Height}
          </div>
          <div>
            <strong>BMI: </strong>
            {params.row.BMI}
          </div>
        </div>
      ),
    },
    {
      field: "SourceTypeStatus",
      headerName: "Source Type & Status",

      width: 210,
      renderCell: (params) => (
        <div
          style={{
            paddingBottom: "20%",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div>
            <strong>Curr. Source: </strong>
            {params.row.currSource}
          </div>
          <div>
            <strong>Prev. Source: </strong>
            {params.row.prevSource}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <strong style={{ marginRight: "5px" }}>Lead Type:</strong>
            <MDBox ml={-1}>
              <MDBadge
                badgeContent={params.row.leadType === "new" ? "New" : "OC"}
                color={params.row.leadType === "new" ? "info" : "primary"}
                variant="gradient"
                size="sm"
              />
            </MDBox>
          </div>

          <div>
            <strong>Lead. Status: </strong>
            {params.row.leadStatus}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <strong style={{ marginRight: "5px" }}>Lead Source: </strong>
            <MDBox ml={-1}>
              <MDBadge
                badgeContent={params.row.sourceType === "web" ? "Web" : "App"}
                color={params.row.sourceType === "web" ? "warning" : "success"}
                variant="gradient"
                size="sm"
              />
            </MDBox>
          </div>
          {params.row.sourceType === "web" ? (
            <div>
              <strong style={{ color: "red" }}>App Not Downloaded</strong>
            </div>
          ) : null}
        </div>
      ),
    },

    {
      field: "KeyInsight",
      headerName: "Key Insight",
      sortable: false,
      width: 170,
      renderCell: (params) => (
        <div
          style={{
            paddingBottom: "20%",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div>
            <strong>Note: </strong>
            {params.row.KeyInsight}
          </div>
        </div>
      ),
    },
    {
      field: "FUNote",
      headerName: "FU Note",
      sortable: false,
      width: 140,
      renderCell: (params) => (
        <div
          style={{
            paddingBottom: "20%",
            flexDirection: "column",
            alignItems: "flex-start",
            whiteSpace: "normal",
            height: "auto", // Allow the cell to grow as needed
          }}
        >
          <div>
            <strong>Prev. FU: </strong>
            {params.row.prevFU}
          </div>
        </div>
      ),
    },
    {
      field: "Action",
      headerName: "Action",
      sortable: false,
      width: 180,
      renderCell: (params) => (
        <div
          style={{
            paddingBottom: "20%",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={counsellor}
            sx={{ width: 150 }}
            onChange={sweetAlerts}
            renderInput={(params) => (
              <TextField {...params} label="Assign To" />
            )}
          />
        </div>
      ),
    },
  ];

  const counsellor = [
    { label: "Chelsi" },
    { label: "Siddhi" },
    { label: "Akansha" },
  ];
  const rows = [
    {
      id: 1,
      NameDetails: "Shraddha jadhav",
      email: "shraddhajadhav2333@gmaill.com",
      mobileNo: "9021883625",
      gender: "female",
      age: 14,
      date: "2-3-2024",
      HealthIssueBMI: "ggs",
      healthCategory: "overweight",
      mediIssues: " Low Immunity",
      HSTaken: "0 days ago",
      currWT: "58 kg",
      Height: "5.3 ft",
      BMI: "26.76",
      currSource: "Whatsapp",
      sourceType: "web",
      prevSource: "Your BN Health Score Result",
      leadType: "new",
      leadStatus: "To Engage",
      KeyInsight:
        "22nd Jan 2024 She was usually around the heavier side in the 80s mostly but the last 4 years increased. : Health management,Weight Loss",
      prevFU: "22nd Jan 2024 connected on wa",
    },
    {
      id: 2,
      NameDetails: "Shraddha jadhav",
      email: "shraddha@gmaill.com",
      mobileNo: "9021883625",
      gender: "female",
      age: 14,
      date: "2-3-2024",
      HealthIssueBMI: "ggs",
      healthCategory: "overweight",
      mediIssues: " Low Immunity",
      HSTaken: "0 days ago",
      currWT: "58 kg",
      Height: "5.3 ft",
      BMI: "26.76",
      currSource: "Whatsapp",
      sourceType: "app",
      prevSource: "Your BN Health Score Result",
      leadType: "oc",
      leadStatus: "To Engage",
      KeyInsight:
        "22nd Jan 2024 She was usually around the heavier side in the 80s mostly but the last 4 years increased. : Health management,Weight Loss",
      prevFU: "22nd Jan 2024 connected on wa",
    },
    {
      id: 3,
      NameDetails: "Shraddha jadhav",
      email: "shraddha@gmaill.com",
      mobileNo: "9021883625",
      gender: "female",
      age: 14,
      date: "2-3-2024",
      HealthIssueBMI: "ggs",
      healthCategory: "overweight",
      mediIssues: " Low Immunity",
      HSTaken: "0 days ago",
      currWT: "58 kg",
      Height: "5.3 ft",
      BMI: "26.76",
      currSource: "Whatsapp",
      sourceType: "web",
      prevSource: "Your BN Health Score Result",
      leadType: "new",
      leadStatus: "To Engage",
      KeyInsight:
        "22nd Jan 2024 She was usually around the heavier side in the 80s mostly but the last 4 years increased. : Health management,Weight Loss",
      prevFU: "22nd Jan 2024 connected on wa",
    },
    {
      id: 4,
      NameDetails: "Shraddha jadhav",
      email: "shraddha@gmaill.com",
      mobileNo: "9021883625",
      gender: "female",
      age: 14,
      date: "2-3-2024",
      HealthIssueBMI: "ggs",
      healthCategory: "overweight",
      mediIssues: " Low Immunity",
      HSTaken: "0 days ago",
      currWT: "58 kg",
      Height: "5.3 ft",
      BMI: "26.76",
      currSource: "Whatsapp",
      sourceType: "web",
      prevSource: "Your BN Health Score Result",
      leadType: "new",
      leadStatus: "To Engage",
      KeyInsight:
        "22nd Jan 2024 She was usually around the heavier side in the 80s mostly but the last 4 years increased. : Health management,Weight Loss",
      prevFU: "22nd Jan 2024 connected on wa",
    },
    {
      id: 5,
      NameDetails: "Shraddha jadhav",
      email: "shraddha@gmaill.com",
      mobileNo: "9021883625",
      gender: "female",
      age: 14,
      date: "2-3-2024",
      HealthIssueBMI: "ggs",
      healthCategory: "overweight",
      mediIssues: " Low Immunity",
      HSTaken: "0 days ago",
      currWT: "58 kg",
      Height: "5.3 ft",
      BMI: "26.76",
      currSource: "Whatsapp",
      sourceType: "app",
      prevSource: "Your BN Health Score Result",
      leadType: "new",
      leadStatus: "To Engage",
      KeyInsight:
        "22nd Jan 2024 She was usually around the heavier side in the 80s mostly but the last 4 years increased. : Health management,Weight Loss",
      prevFU: "22nd Jan 2024 connected on wa",
    },
  ];

  //   const getRowId = (row) => row.id;

  //   const getRowHeight = () => 200; // Adjust the height as needed
  return (
    <Box sx={{ height: "300", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "15px",
          marginBottom: "5px",
        }}
      >
        <MDTypography variant="h6" fontWeight="medium">
          Prime Segment
        </MDTypography>

        <div>
          <AddLead />
        </div>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          // "& .MuiDataGrid-cell": {
          //   marginRight: "10px", // Adjust the value to add space between columns
          // },
          "& .MuiDataGrid-virtualScrollerContent": {
            // paddingBottom: 1 * 2, // to compensate space between rows
            boxSizing: "content-box",
          },
          "& .MuiDataGrid-cell": {
            marginRight: "5", // Adjust the value to add space between columns
          },

          "&.MuiDataGrid-root .MuiDataGrid-row": {
            borderRadius: "2px",
            // borderTopStyle: "solid",
            borderBottomStyle: "solid",
            borderColor: "#0066cb",
            marginTop: "2px",
            backgroundColor: "#ffffff",
            "&:hover": {
              backgroundColor: "#cee0e4de", // Change the hover color
            },
          },
          "&.MuiDataGrid-root .MuiDataGrid-columnHeaders": {
            marginBottom: "2px",
            border: 0,
            backgroundColor: "#e4e6edde",
          },
        }}
        getRowHeight={() => "auto"}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 2,
            },
          },
        }}
        pageSizeOptions={[2]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default PrimeSegment;
