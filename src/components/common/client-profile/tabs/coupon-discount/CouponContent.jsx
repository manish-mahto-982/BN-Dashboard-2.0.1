import {
  Box,
  TextField,
  TextareaAutosize,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import CustomDialog from "src/components/client-service/common/CustomDialog";

import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import ComboBox from "src/components/common/forms/ComboBox";
import DateField from "src/components/common/forms/DateField";
import InputLabel from "src/components/common/forms/InputLabel";
import useShowDialog from "src/hooks/useShowDialog";
import { useGetNotificationReceivedQuery } from "src/services/client-details/api";
import { programOptions, specialStackDaysOptions } from "src/utils/constants";

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
  const { control } = useForm({
    defaultValues: {
      program: "",
      days: "",
      discount: "",
      coupon_code: "",
      valid_till: dayjs(),
    },
  });
  return (
    <CustomDialog
      openDialog={show}
      setOpenDialog={setShow}
      theme={theme}
      dialogActionMain={"SAVE"}
      dialogTitle={"Send Coupon/Discount"}
      dialogContent={
        <Box mt={4} width={300} className="flex flex-col" rowGap={3}>
          <Controller
            control={control}
            name="program"
            render={({ field }) => (
              <ComboBox {...field} label="Program" options={programOptions} />
            )}
          />
          <Controller
            control={control}
            name="days"
            render={({ field }) => (
              <ComboBox
                {...field}
                label="Days"
                options={specialStackDaysOptions}
              />
            )}
          />
          <Controller
            control={control}
            name="discount"
            render={({ field }) => <TextField {...field} label="Discount" />}
          />
          <Controller
            control={control}
            name="coupon_code"
            render={({ field }) => <TextField {...field} label="Coupon Code" />}
          />
          <Controller
            control={control}
            name="valid_till"
            render={({ field }) => <DateField {...field} label="Valid Till" />}
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
