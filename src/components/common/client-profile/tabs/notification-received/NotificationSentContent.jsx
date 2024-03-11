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
import ComboBox from "src/components/client-service/forms/ComboBox";
import InputLabel from "src/components/client-service/forms/InputLabel";
import useShowDialog from "src/hooks/useShowDialog";
import { useGetNotificationReceivedQuery } from "src/services/client-details/api";

function NotificationSentContent() {
  const theme = useTheme();
  const [show, setShow] = useShowDialog(false);
  return (
    <>
      <FlexBoxBetween justifyContent={"end"} mb={3}>
        <PrimaryButton theme={theme} onClick={() => setShow(true)}>
          Send Notification
        </PrimaryButton>
      </FlexBoxBetween>
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
        columns={notificationReceivedColumn}
        rows={notificationReceivedRows}
      />
      <AddNewNotification show={show} setShow={setShow} theme={theme} />
    </>
  );
}
export default NotificationSentContent;

const AddNewNotification = ({ show, setShow, theme }) => {
  const { data, isLoading } = useGetNotificationReceivedQuery();
  return (
    <CustomDialog
      openDialog={show}
      setOpenDialog={setShow}
      theme={theme}
      dialogActionMain={"SAVE"}
      dialogTitle={"Send Notification"}
      dialogContent={
        <Box mt={4} width={300}>
          <ComboBox
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
  { field: "title", headerName: "Title", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  { field: "sent_date", headerName: "Sent Date", flex: 1 },
];

const notificationReceivedRows = [
  {
    id: 1,
    title: "A New Guide Activated!	Unread	2023-12-18",
    description:
      "Your mentor has sent you the BN Party Guide. Click here to view.",
    status: "Unread",
    sent_date: "2023-12-18",
  },
  {
    id: 2,
    title: "A New Guide Activated!	Unread	2023-12-18",
    description:
      "Your mentor has sent you the BN Party Guide. Click here to view.",
    status: "Unread",
    sent_date: "2023-12-18",
  },
  {
    id: 3,
    title: "A New Guide Activated!	Unread	2023-12-18",
    description:
      "Your mentor has sent you the BN Party Guide. Click here to view.",
    status: "Unread",
    sent_date: "2023-12-18",
  },
];
