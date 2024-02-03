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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MDBadge from "src/components/theme/common/MDBadge";
import MDBox from "src/components/theme/common/MDBox";
import MDTypography from "src/components/theme/common/MDTypography";
import React from "react";
import useSwalWrapper from "src/vendors/sweetalert2/hooks";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import "./css/style.css";
import MDButton from "src/components/theme/common/MDButton";
import AddLead from "src/components/theme/layout/Navbars/DashboardNavbar/TopbarPopup/AddLead";
function RateShared() {
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
      width: 300,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            paddingBottom: "20%",
            flexDirection: "column",
            alignItems: "flex-start",
            whiteSpace: "normal",
            height: "auto", // Allow the cell to grow as needed
          }}
        >
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
        </div>
      ),
    },
    {
      field: "SuggestedProgramDetails",
      headerName: "Sugg. Program Details",
      width: 400,
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
      field: "PaymentDetaiils",
      headerName: "Payment Detaiils",

      width: 310,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            paddingBottom: "20%",
            flexDirection: "column",
            alignItems: "flex-start",
            whiteSpace: "normal",
            height: "auto", // Allow the cell to grow as needed
          }}
        >
          <MDButton
            variant="contained"
            color="warning"
            size="small"
            alignItems="center"
            sx={{ width: "100%", mt: "5px", marginBottom: "10px" }}
          >
            Suggest New Program
          </MDButton>
          <MDButton
            variant="contained"
            color="faintgreen"
            size="small"
            alignItems="center"
            sx={{ width: "100%", mt: "5px", marginBottom: "10px" }}
          >
            Create Link (Same As Before)
          </MDButton>
        </div>
      ),
    },
    {
      field: "KeyInsight",
      headerName: "Key Insight",
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            paddingBottom: "20%",
            flexDirection: "column",
            alignItems: "flex-start",
            whiteSpace: "normal",
            height: "auto", // Allow the cell to grow as needed
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
      width: 230,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            paddingBottom: "20%",
            flexDirection: "column",
            alignItems: "flex-start",
            whiteSpace: "normal",
            height: "auto", // Allow the cell to grow as needed
          }}
        >
          {"23rd Jan 2024 reels"}
          <div>
            <TextareaAutosize
              placeholder="Add notes..."
              minRows={2}
              style={{
                width: "90%",
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
    {
      field: "ExtendExpiry",
      headerName: "Extend Expiry",
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <div>{" 4th January 2024 ( Expired 19 Days Ago)"}</div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      NameDetails: "Shraddha jadhav",
      email: "shraddhajadhav2333@gmaill.com",
      mobileNo: "9021883625",
      SuggProgramDetails: "WEIGHT LOSS +",
      AmtPaid: "5950",
      Balance: "2344",
      PaymentOption: "Phone Pay",
      ExpDate: "20th Jan 2024",
      DueDate: "20th Jan 2024",
      UserStatus: "OnHold",
      Mentor: "Anokhi",
      KeyInsight:
        "22nd Jan 2024 She was usually around the heavier side in the 80s mostly but the last 4 years increased. : Health management,Weight Loss",
      prevFU: "22nd Jan 2024 connected on wa",
    },
    {
      id: 2,
      NameDetails: "Mayuri Pawar",
      email: "mayuripawar@gmaill.com",
      mobileNo: "9021223625",
      ProgramDetails: "Renue",
      AmtPaid: "2233",
      Balance: "1200",
      PaymentOption: "Phone Pay",
      ExpDate: "21th March 2024",
      DueDate: "29th Dec 2024",

      UserStatus: "OnHold",
      Mentor: "Anokhi",
      KeyInsight:
        "22nd Jan 2024 She was usually around the heavier side in the 80s mostly but the last 4 years increased. : Health management,Weight Loss",
      prevFU: "22nd Jan 2024 connected on wa",
    },
    {
      id: 3,
      NameDetails: "vaishanvi salunkhe",
      email: "vaishanvi@gmaill.com",
      mobileNo: "9021883625",
      ProgramDetails: "Body Transformation",
      AmtPaid: "343",
      Balance: "2000",
      PaymentOption: "Phone Pay",
      ExpDate: "20th Feb 2024",
      DueDate: "20th March 2024",

      UserStatus: "OnHold",
      Mentor: "Prajakta",
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
          Rate Shared
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

export default RateShared;
