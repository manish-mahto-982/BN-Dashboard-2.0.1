import {
  Autocomplete,
  Box,
  Button,
  Card,
  Icon,
  TextField,
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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./css/style.css";
import MDButton from "src/components/theme/common/MDButton";
import AddLead from "src/components/theme/layout/Navbars/DashboardNavbar/TopbarPopup/AddLead";
import { useMaterialUIController } from "src/context";
function DueTomorrow() {
  const Swal = useSwalWrapper();
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;

  console.log("dsdfs", darkMode);

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
            paddingBottom: "20%",
            flexDirection: "column",
            alignItems: "flex-start",
            whiteSpace: "normal",
            width:'100%',
            height: "auto", // Allow the cell to grow as needed
            overflowWrap: 'break-word',
          }}
        >
          <div>
            <MDTypography
              fontWeight={"bold"}
              fontSize={"14px"}
              sx={{ display: "inline" }}
            >
              Name: </MDTypography>

            {params.row.NameDetails}
          </div>
          <div style={{ }}>
          <MDTypography
              fontWeight={"bold"}
              fontSize={"14px"}
              sx={{ display: "inline" }}
            >Email: </MDTypography>
            {params.row.email}
          </div>
          <div>
          <MDTypography
              fontWeight={"bold"}
              fontSize={"14px"}
              sx={{ display: "inline" }}
            >Mobile: </MDTypography>
            {params.row.mobileNo}
          </div>
          <div>
          <MDTypography
              fontWeight={"bold"}
              fontSize={"14px"}
              sx={{ display: "inline" }}
            >Wallet: </MDTypography>
            Rs. 1000
          </div>
        </div>
      ),
    },
    {
      field: "SuggestedProgramDetails",
      headerName: "Sugg. Program Details",
      width: 430,
      renderCell: (params) => (
        <div
          style={{
            paddingBottom: "20%",
            flexDirection: "column",
            alignItems: "flex-start",
            whiteSpace: "normal",
            overflowWrap: 'break-word',
            marginLeft:"10px",
            height: "auto", // Allow the cell to grow as needed
          }}
        >
          <div>
          <MDTypography
              fontWeight={"bold"}
              fontSize={"14px"}
              sx={{ display: "inline" }}
            >Sugg. Prg.: </MDTypography>
            {params.row.SuggProgramDetails}
            {"(60 Days)"}
          </div>
          <div>
          <MDTypography
              fontWeight={"bold"}
              fontSize={"14px"}
              sx={{ display: "inline" }}
            >Mrp: Rs. 1879 Qty: Rs.18799 : </MDTypography>
            {" (Suggested 25 Days Ago)"}
          </div>
          <div>
          <MDTypography
              fontWeight={"bold"}
              fontSize={"14px"}
              sx={{ display: "inline" }}
            >Payment Mode Suggested: </MDTypography>
            {"Bank Details"}
          </div>
          <div style={{ display: "flex" }}>
            <MDButton
              variant="contained"
              color="darkblue"
              size="small"
              alignItems="center"
              sx={{ width: "70%", m: "1px", fontSize: "11px" }}
            >
              Send Payment Details
            </MDButton>
            <MDButton
              variant="contained"
              color="darkgreen"
              size="small"
              alignItems="center"
              sx={{ width: "70%", m: "1px", fontSize: "11px" }}
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
      width: 240,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            paddingBottom: "20%",
            flexDirection: "column",
            alignItems: "flex-start",
            whiteSpace: "normal",
            overflowWrap: 'break-word',
            marginLeft:"20px",
            
            height: "auto", // Allow the cell to grow as needed
          }}
        >
          <MDButton
            variant="contained"
            color="successdark"
            size="small"
            alignItems="center"
            sx={{
              width: "100%",
              mt: "5px",
              marginBottom: "10px",
              fontSize: "11px",
            }}
          >
            <WhatsAppIcon
              sx={{ fontWeight: "bold", fontSize: "1rem !important" }}
            />
            &nbsp; Lead
          </MDButton>

          <MDButton
            variant="contained"
            color="warning"
            size="small"
            alignItems="center"
            sx={{
              width: "100%",
              mt: "5px",
              marginBottom: "10px",
              fontSize: "11px",
            }}
          >
            Send In App Chat
          </MDButton>

          <MDButton
            variant="contained"
            color="skyblue"
            size="small"
            alignItems="center"
            sx={{ width: "100%", marginBottom: "10px", fontSize: "11px" }}
          >
            Copy
          </MDButton>
        </div>
      ),
    },

    {
      field: "ExtendExpiry",
      headerName: "Extend Expiry",
      sortable: false,
      width: 150,
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
          {" 4th January 2024 ( Expired 19 Days Ago)"}
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      NameDetails: "Shraddha jadhav",
      email: "shraddhajadhah2333@gmaill.com",
      mobileNo: "9021883625",
      SuggProgramDetails: "WEIGHT LOSS +",
      AmtPaid: "5950",
      Balance: "2344",
      PaymentOption: "Phone Pay",
      ExpDate: "20th Jan 2024",
      DueDate: "20th Jan 2024",
      UserStatus: "OnHold",
      Mentor: "Anokhi",
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
          Due Tomorrow
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
            backgroundColor: darkMode ? "#000" : "#fff",
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

export default DueTomorrow;
