import React, { useMemo } from "react";
import CSLayout from "../layout";
import { Box, Card, Grid, IconButton, Tooltip } from "@mui/material";
import MDTypography from "src/components/theme/common/MDTypography";
import AppPendingCard from "src/components/client-service/dashboard/overall-pending/AppPendingCard";
import CardWithDialogTable from "src/components/client-service/common/CardWithDialogTable";
import { commonDataAllTable, noStyleBtnProps } from "src/utils/constants";
import { useMaterialUIController } from "src/context";
import CardWithStatusAndDialogTable from "src/components/client-service/common/CardWithStatusAndDialogTable";
import { api } from "src/services/client-service/api";
import useDataGridTableDialog from "src/hooks/useDataGridTableDialog";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import { TbBrandWhatsapp, TbMail, TbMessage } from "react-icons/tb";
import {
  OnHoldDueDateData,
  AppNotUpdatedAndroidData,
  expiryClientTodayData,
  advancedPurchasedData,
  WMRData,
  notStartedData,
} from "src/utils/tableData";
import { randomNumberBetween } from "@mui/x-data-grid/utils/utils";
import { randomNumberGenerator } from "src/utils/helper";
import useHandleTable from "src/hooks/useHandleTable";
function NewOverallPending() {
  const {
    tableData,
    setTableData,
    showTable,
    setShowTable,
    dataGridTableDialog,
  } = useDataGridTableDialog();
  const handleClick = (
    fetchQuery,
    columns,
    { actionType = "default", actionColumn = null, tableTitle } = {}, // "= {}" this is important because to run the default value
  ) => {
    const filterData = Object.values(fetchQuery.data)[0];
    setTableData({
      ...tableData,
      data: filterData,
      columns,
      actionType,
      actionColumn,
      tableTitle:
        tableTitle === "default"
          ? Object.keys(fetchQuery.data)[0]?.split("_")?.join(" ")
          : tableTitle,
    });
    setShowTable(true);
  };

  const [handleButtonClick] = useHandleTable(
    {
      ...WMRData,
      tableTitle:
        "WMR Recieved but Diet not Sent - Over Due (More than 48 hrs)",
    },
    handleClick,
  );

  return (
    <CSLayout>
      <Grid container rowGap={3} columnGap={3} mt={3}>
        <Grid item xs={12} lg={5.76} xxl={3.72} mt={2}>
          <AppPendingCard />
        </Grid>
        <Grid item xs={12} sm={5.72} md={3.72}>
          <CardWithDialogTable
            data={dormancyData}
            cardTitle="Dormancy"
            handleClick={handleClick}
          />
        </Grid>
        <Grid item xs={12} sm={5.72} md={3.72}>
          <CardWithDialogTable
            data={notStartedDataArr}
            handleClick={handleClick}
            cardTitle="Not Started / Start Later"
          />
        </Grid>
        <Grid item xs={12} sm={5.72} md={3.72}>
          <CardWithDialogTable
            data={breakData}
            cardTitle="Break"
            handleClick={handleClick}
          />
        </Grid>

        <Grid item xs={12} sm={5.72} md={3.72} mt={2}>
          <Card
            {...noStyleBtnProps}
            component={"button"}
            onClick={() => handleButtonClick()}
            className="flex w-full cursor-pointer flex-col items-center justify-center px-2 py-3.5"
          >
            <MDTypography textAlign={"center"} fontSize={"medium"}>
              {"WMR (More than 48 hrs)"}
            </MDTypography>
            <MDTypography
              p={0.5}
              textAlign={"center"}
              fontSize={"2.125rem"}
              color={"error"}
              fontWeight="bold"
            >
              255
            </MDTypography>
            <MDTypography textAlign={"center"} fontSize={"small"}>
              {"Weight Received But Diet not send"}
            </MDTypography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5.72} md={3.72}>
          <CardWithStatusAndDialogTable
            data={advancedPurchaseData}
            cardTitle="Advanced Purchased"
            handleClick={handleClick}
          />
        </Grid>
        <Grid item xs={12} sm={5.72} md={3.72}>
          <CardWithDialogTable
            data={balanceData}
            cardTitle="Balance"
            handleClick={handleClick}
          />
        </Grid>
      </Grid>
      {dataGridTableDialog()}
    </CSLayout>
  );
}

export default NewOverallPending;

const breakData = [
  {
    title: "On Hold (Due Today)",
    value: 2,
    ...OnHoldDueDateData,
    tableTitle:
      "Client was to become active today - Please check and follow up",
    columns: [
      { id: "client_details", label: "client details" },
      { id: "program_details", label: "program details" },
      { id: "on_hold_details", label: "on hold details" },
    ],
  },
  {
    title: "On Hold (OD)",
    value: 3,
    tableTitle: "Onhold - Overdue Latest First",
    ...AppNotUpdatedAndroidData,
    columns: [
      { id: "client_details", label: "client details" },
      { id: "program_details", label: "program details" },
      { id: "on_hold_details", label: "on hold details" },
    ],
  },
];

const notStartedDataArr = [
  { title: "Due Today", value: 2, ...notStartedData },
  {
    title: "Due Tomorrow",
    value: 3,
    ...notStartedData,
    tableTitle: "Not Started Due Tomorrow",
  },
  {
    title: "Over Due",
    value: 3,
    ...notStartedData,
    tableTitle: "Not Started Over Due",
  },
  {
    title: "Start Later",
    value: 3,
    ...notStartedData,
    tableTitle: "Start Later Client Latest First (Not started client having start date from day after tomorrow)",
  },
];
const balanceData = [
  {
    title: "Due Today",
    tableTitle: "Balance due today",
    value: randomNumberGenerator(),
    ...expiryClientTodayData,
  },
  {
    title: "Over Due",
    tableTitle: "Balance over due",
    value: 3,
    ...expiryClientTodayData,
  },
];

const advancedPurchaseData = [
  {
    title: "Advance Pur. OD",
    value: 2,
    active: true,
    ...advancedPurchasedData,
  },
  {
    title: "Advance Pur. OD",
    value: 3,
    active: false,
    tableTitle: "Advance Pur. OD (Not-active)",
    ...advancedPurchasedData,
  },
];

const startLaterData = [
  {
    title: "Due Today",
    value: 2,
    ...commonDataAllTable,
  },
  { title: "Due Tomorrow", value: 2, ...commonDataAllTable },
  { title: "Future", value: 2, ...commonDataAllTable },
  { title: "Over Due", value: 2, ...commonDataAllTable },
];

const dormancyData = [
  {
    title: "10th Day OD (11th -12th)",
    value: 2,
    tableTitle: "Dormancy - 10 Day OD (11th - 12th )",
    ...commonDataAllTable,
    actionType: "custom",
    actionColumn: (row) => {
      const phoneNumber = document
        ?.querySelector(`td#phone_${row.id}`)
        ?.innerHTML.replace(/[\+\-]/g, "");
      return (
        <FlexBoxBetween columnGap={1}>
          <Tooltip title={"Whatsapp"}>
            <IconButton
              aria-label="whatsapp"
              color={"success"}
              onClick={() => handleWhatsApp(phoneNumber)}
            >
              <TbBrandWhatsapp
                style={{
                  strokeWidth: 1.4,
                  padding: 2,
                }}
                size={28}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Email"}>
            <IconButton aria-label="email" color={"warning"}>
              <TbMail
                style={{
                  strokeWidth: 1.4,
                  padding: 2,
                }}
                size={28}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Wati"}>
            <IconButton aria-label="wati" color={"text"}>
              <TbMessage
                style={{
                  strokeWidth: 1.4,
                  padding: 2,
                }}
                size={28}
              />
            </IconButton>
          </Tooltip>
        </FlexBoxBetween>
      );
    },
  },
  {
    title: "Level 1 (13th -14th)",
    value: 2,
    ...commonDataAllTable,
    tableTitle: "Dormancy - Level 1 (13th - 14th)",
  },
  {
    title: "Level 2 (15th -16th)",
    value: 2,
    ...commonDataAllTable,
    tableTitle: "Dormancy - Level 2 (15th - 16th)",
  },
  {
    title: "Level 3 (17th -18th)",
    value: 2,
    ...commonDataAllTable,
    tableTitle: "Dormancy - Level 3 (15th - 16th)",
  },
  {
    title: "19th Day +",
    value: 2,
    ...commonDataAllTable,
    tableTitle: "Dormancy - 19th Day +",
  },
];
