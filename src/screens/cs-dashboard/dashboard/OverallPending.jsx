import React from "react";
import CSLayout from "../layout";
import { Box, Card, Grid } from "@mui/material";
import MDTypography from "src/components/theme/common/MDTypography";
import AppPendingCard from "src/components/client-service/dashboard/overall-pending/AppPendingCard";
import CardWithDialogTable from "src/components/client-service/common/CardWithDialogTable";
import { commonDataAllTable, noStyleBtnProps } from "src/utils/constants";
import { useMaterialUIController } from "src/context";
import CardWithStatusAndDialogTable from "src/components/client-service/common/CardWithStatusAndDialogTable";

function OverallPending() {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;
  return (
    <CSLayout>
      <Grid container rowGap={3} columnGap={3} mt={3}>
        <Grid item xs={12} lg={5.76} xxl={3.72} mt={2}>
          <AppPendingCard />
        </Grid>
        <Grid item xs={12} sm={5.72} md={3.72}>
          <CardWithDialogTable
            darkMode={darkMode}
            data={dormancyData}
            cardTitle="Dormancy"
          />
        </Grid>
        <Grid item xs={12} sm={5.72} md={3.72}>
          <CardWithDialogTable
            darkMode={darkMode}
            data={startLaterData}
            cardTitle="Start Later (Start Date Give)"
          />
        </Grid>
        <Grid item xs={12} sm={5.72} md={3.72}>
          <CardWithDialogTable
            darkMode={darkMode}
            data={breakData}
            cardTitle="Break"
          />
        </Grid>
        <Grid item xs={12} sm={5.72} md={3.72}>
          <CardWithDialogTable
            darkMode={darkMode}
            data={notStartedData}
            cardTitle="Not Started / Start Date pending"
          />
        </Grid>
        <Grid item xs={12} sm={5.72} md={3.72} mt={2}>
          <Card
            {...noStyleBtnProps}
            component={"button"}
            className="flex flex-col items-center justify-center px-2 py-3.5 w-full"
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
        <Grid item xs={12} sm={5.72} md={3.72} >
          <CardWithStatusAndDialogTable
            darkMode={darkMode}
            data={advancedPurchaseData}
            cardTitle="Advanced Purchased"
          />
        </Grid>
        <Grid item xs={12} sm={5.72} md={3.72} >
          <CardWithDialogTable
            darkMode={darkMode}
            data={notStartedData}
            cardTitle="Balance"
          />
        </Grid>
      </Grid>
    </CSLayout>
  );
}

export default OverallPending;

const breakData = [
  {
    title: "On Hold (Due Today)",
    value: 2,
    fetchQuery: () => api.endpoints.getOnHoldDueDate.useLazyQuery(),
    columns: [
      { id: "client_details", label: "client details" },
      { id: "program_details", label: "program details" },
      { id: "on_hold_details", label: "on hold details" },
    ],
  },
  {
    title: "On Hold (OD)",
    value: 3,
    fetchQuery: () => api.endpoints.getAppNotUpdatedAndroid.useLazyQuery(),
    columns: [
      { id: "client_details", label: "client details" },
      { id: "program_details", label: "program details" },
      { id: "on_hold_details", label: "on hold details" },
    ],
  },
];

const notStartedData = [
  { title: "Due Today", value: 2, ...commonDataAllTable },
  { title: "Over Due", value: 3, ...commonDataAllTable },
];

const advancedPurchaseData = [
  {
    title: "Advance Pur. OD",
    value: 2,
    active: true,
    ...commonDataAllTable,
  },
  {
    title: "Advance Pur. OD",
    value: 3,
    active: false,
    ...commonDataAllTable,
  },
];

const startLaterData = [
  { title: "Due Today", value: 2, ...commonDataAllTable },
  { title: "Due Tomorrow", value: 2, ...commonDataAllTable },
  { title: "Future", value: 2, ...commonDataAllTable },
  { title: "Over Due", value: 2, ...commonDataAllTable },
];

const dormancyData = [
  { title: "10th Day OD (11th -12th)", value: 2, ...commonDataAllTable },
  { title: "Level 1 (13th -14th)", value: 2, ...commonDataAllTable },
  { title: "Level 2 (15th -16th)", value: 2, ...commonDataAllTable },
  { title: "Level 3 (17th -18th)", value: 2, ...commonDataAllTable },
  { title: "19th Day +", value: 2, ...commonDataAllTable },
];
