import {
  Box,
  TextField,
  TextareaAutosize,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import CustomDialog from "src/components/client-service/common/CustomDialog";

import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import ComboBox from "src/components/common/forms/ComboBox";
import InputLabel from "src/components/common/forms/InputLabel";
import useShowDialog from "src/hooks/useShowDialog";
import { useGetNotificationReceivedQuery } from "src/services/client-details/api";

function CouponContent() {
  const theme = useTheme();
  const [show, setShow] = useShowDialog(false);
  return (
    <>
      <FlexBoxBetween justifyContent={"end"} mb={3}>
        <PrimaryButton theme={theme} onClick={() => setShow(true)}>
          Send Coupon / Discount
        </PrimaryButton>
      </FlexBoxBetween>
      <DataGrid
        sx={{
          fontSize: "small",
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
        columns={notificationReceivedColumn}
        rows={notificationReceivedRows}
      />
      <SendNewCoupon show={show} setShow={setShow} theme={theme} />
    </>
  );
}
export default CouponContent;

const SendNewCoupon = ({ show, setShow, theme }) => {
  const { data, isLoading } = useGetNotificationReceivedQuery();
  return (
    <CustomDialog
      openDialog={show}
      setOpenDialog={setShow}
      theme={theme}
      dialogActionMain={"SAVE"}
      dialogTitle={"Send Coupon/Discount"}
      dialogContent={
        <Box mt={4} width={300}>
          <ComboBox
            label="Program"
            options={!isLoading ? data["notification_received_data"] : []}
          />
          <InputLabel label={"Description"} />
          <TextField
            fullWidth
            color="secondary"
            placeholder="message"
            multiline
            rows={2}
            maxRows={4}
          />
        </Box>
      }
    />
  );
};

const notificationReceivedColumn = [
  { field: "program", headerName: "program", flex: 1 },
  { field: "days", headerName: "Days", flex: 1 },
  { field: "discount", headerName: "Discount", flex: 1 },
  { field: "coupon_code", headerName: "Coupon Code", flex: 1 },
  { field: "valid_till", headerName: "Valid Till", flex: 1 },
];

const notificationReceivedRows = [
  {
    id: 1,
    program: "Weight Loss +",
    days: "30",
    discount: "40%",
    coupon_code: "WEIGHTLOSSPLUS2024",
    valid_till: "24/3/24",
  },
];
