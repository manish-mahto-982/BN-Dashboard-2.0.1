import {
  Autocomplete,
  Box,
  Button,
  Card,
  TextField,
  TextareaAutosize,
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
function TodaysFU() {
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
      headerName: "User Details",
      width: 290,
      renderCell: (params) => (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "3px",
            }}
          >
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
      field: "KeyInsight",
      headerName: "Key Insight",
      sortable: false,
      width: 210,
      renderCell: (params) => (
        <div>
          <div>
            <strong>Note: </strong>
            {params.row.KeyInsight}
          </div>
        </div>
      ),
    },
    {
      field: "SuggestedProgramDetails",
      headerName: "Sugg. Program Details",
      width: 460,
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
            <strong>Sugg. Prg.: </strong>
            {params.row.SuggProgramDetails}
            {"(60 Days)"}
          </div>
          <div>
            <strong>Mrp: Rs. 1879 Qty: Rs.18799 : </strong>
            {" (Suggested 25 Days Ago)"}
          </div>
          <div>
            <strong>Payment Mode Suggested: </strong>
            {"Bank Details"}
          </div>
          <div style={{ display: "flex" }}>
            <MDButton
              variant="contained"
              color="darkblue"
              size="small"
              alignItems="center"
              sx={{ width: "70%", m: "1px" }}
            >
              Send Payment Details
            </MDButton>
            <MDButton
              variant="contained"
              color="skyblue"
              size="small"
              alignItems="center"
              sx={{ width: "70%", m: "1px" }}
            >
              Edit Program Details
            </MDButton>
          </div>
        </div>
      ),
    },
    {
      field: "FUDetails",
      headerName: "FU Details",
      width: 200,
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
            <strong>FU On:</strong>Call
          </div>
          <div>
            <strong>FU Time: </strong> 10:00:00
          </div>
          <div>
            <strong>Key Insights: </strong> test
          </div>
          <div>
            <strong>Last Note: -</strong>
          </div>

          <div style={{ display: "flex" }}>
            <MDButton
              variant="contained"
              color="success"
              size="small"
              alignItems="center"
              sx={{ m: "1px" }}
            >
              Next FU Set
            </MDButton>
          </div>
        </div>
      ),
    },
    {
      field: "FUNote",
      headerName: "FU Note",
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <div>
          <div>
            <TextareaAutosize
              placeholder="Add notes..."
              minRows={2}
              style={{
                width: "100%",
                // margin: "10px",
                padding: "8px",
                border: "1px solid #ccc", // Added border style
                borderRadius: "4px", // Added border-radius for rounded corners
              }}
            />
            <MDButton variant="contained" color="info" size="small">
              Save
            </MDButton>
          </div>
        </div>
      ),
    },
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
          Todays FU
        </MDTypography>

        <div style={{ display: "flex" }}>
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

export default TodaysFU;
