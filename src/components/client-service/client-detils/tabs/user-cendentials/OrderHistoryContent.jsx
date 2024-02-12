import { useTheme } from "@emotion/react";
import { Box, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  DatePicker,
  LocalizationProvider,
  pickersLayoutClasses,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { TbEdit } from "react-icons/tb";
import CustomDialog from "src/components/client-service/common/CustomDialog";

import IconButtonWithToolTip from "src/components/client-service/common/IconButtonWithToolTip";
import MDDropDown from "src/components/theme/common/MDDropdown";

import useShowDialog from "src/hooks/useShowDialog";
import { orderStatusArr } from "src/utils/constants";

function OrderHistoryContent() {
  const theme = useTheme();
  const [show, setShow] = useShowDialog(false);
  const handleEditClick = () => {
    setShow(true);
  };

  const orderHistoryColumns = [
    { field: "current_program", headerName: "Current Program", flex: 1 },
    { field: "purchase_date", headerName: "Purchase Date", flex: 1 },
    { field: "order_status", headerName: "Order Status", flex: 1 },
    {
      field: "program_expiry_date",
      headerName: "Program Expiry Date",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      type: "actions",
      renderCell: (params) => {
        return (
          <EditOrderDetails
            handleEditClick={() => handleEditClick(params.row)}
          />
        );
      },
    },
  ];
  return (
    <>
      <DataGrid
        sx={{
          fontSize: "small",
          "& .MuiTablePagination-selectLabel,.MuiTablePagination-displayedRows": {
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
        columns={orderHistoryColumns}
        rows={orderHistoryDeviceRows}
      />
      <EditOrderHistoryDialog show={show} setShow={setShow} theme={theme} />
    </>
  );
}

export default OrderHistoryContent;

const EditOrderDetails = ({ handleEditClick }) => {
  return (
    <>
      <IconButtonWithToolTip
      
        Icon={() => <TbEdit size={18}/>}
        tooltipTitle={"Edit"}
        tooltipProps={{ placement: "right" }}
        iconButtonProps={{ color: "success", onClick: handleEditClick }}
      />
    </>
  );
};

const EditOrderHistoryDialog = ({ show, setShow, theme }) => {
  return (
    <CustomDialog
      openDialog={show}
      setOpenDialog={setShow}
      theme={theme}
      dialogActionMain={"SAVE"}
      dialogTitle={"Edit Order Details"}
      dialogContent={
        <Box mt={4} width={300}>
          <TextField
            color="secondary"
            fullWidth
            label={"Change Current Program"}
            //   placeholder=""
            variant="outlined"
          />
          <Typography mt={3} mb={1} color={"#697586"}>
            Extend Expiry Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              slotProps={{
                layout: {
                  sx: {
                    [`.${pickersLayoutClasses.contentWrapper}`]: {
                      bgcolor: "background.default",
                    },
                    [`.${pickersLayoutClasses.actionBar}`]: {
                      bgcolor: "background.default",
                    },
                    "& .MuiDialogActions-root button.MuiButtonBase-root,.MuiButtonBase-root.MuiPickersDay-root.Mui-selected,.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root":
                      {
                        bgcolor: "info.main",
                        color: "#fff",
                      },
                    "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {},
                  },
                },
              }}
            />
          </LocalizationProvider>
          <Typography mt={3} mb={1} color={"#697586"}>
            Change Order Status
          </Typography>
          <MDDropDown options={orderStatusArr} selectedInd={1} />
        </Box>
      }
    />
  );
};

const orderHistoryDeviceRows = [
  {
    id: 1,
    current_program: "LAT STOMACH CLEANSE",
    purchase_date: "2023-03-03 13:59:11",
    order_status: "Completed",
    program_expiry_date: "2023-03-14",
  },
  {
    id: 2,
    current_program: "Reform Intermittent",
    purchase_date: "2023-03-03 13:59:11",
    order_status: "Completed",
    program_expiry_date: "2023-03-14",
  },
  {
    id: 3,
    current_program: "LAT STOMACH CLEANSE",
    purchase_date: "2023-03-03 13:59:11",
    order_status: "Completed",
    program_expiry_date: "2023-03-14",
  },
];
