import React from "react";
import CSLayout from "../layout";
import CardWithIconAndDialogTable from "src/components/client-service/common/CardWithIconAndDialogTable";
import { TbUsersGroup } from "react-icons/tb";
import { commonDataAllTable } from "src/utils/constants";
import { Grid } from "@mui/material";
function ExpiryClient() {
  return (
    <CSLayout>
      <Grid container>
        <Grid item sx={12} md={6} lg={4}>
          <CardWithIconAndDialogTable
            data={expiryClientsData3}
            cardTitle="Expiry Client Details"
          />
        </Grid>
      </Grid>
    </CSLayout>
  );
}

export default ExpiryClient;

const expiryClientsData = [
  {
    title: "0th time renewal",
    value: "11",
    icon: { name: TbUsersGroup, color: "unset" },
    ...commonDataAllTable,
  },
  {
    title: "1st time renewal",
    value: "23",
    icon: { name: TbUsersGroup, color: "unset" },
    ...commonDataAllTable,
  },
  {
    title: "2nd time renewal",
    value: "6",
    icon: { name: TbUsersGroup, color: "unset" },
    ...commonDataAllTable,
  },
  {
    title: "3rd time renewal",
    value: "3",
    icon: { name: TbUsersGroup, color: "unset" },
    ...commonDataAllTable,
  },
];

const expiryClientsData2 = [
  {
    title: "Today",
    value: "5",
    icon: TbUsersGroup,
    color: "unset",
    ...commonDataAllTable,
  },

  // {
  //   title: "Tomorrow",
  //   value: "2",
  //   icon: { name: TbUsersGroup, color: "unset" },
  //   ...commonDataAllTable,
  // },
  // {
  //   title: "Day After Tomorrow",
  //   value: "11",
  //   icon: { name: TbUsersGroup, color: "unset" },
  //   ...commonDataAllTable,
  // },
];

const expiryClientsData3 = [
  {
    title: "Expiring Today",
    value: "5",
    Icon: TbUsersGroup,
    color: "error",
    ...commonDataAllTable,
  },
  {
    title: "Expiring Tomorrow",
    value: "5",
    Icon: TbUsersGroup,
    color: "info",
    ...commonDataAllTable,
  },
  {
    title: "Expiring Day After Tomorrow",
    value: "5",
    Icon: TbUsersGroup,
    color: "secondary",
    ...commonDataAllTable,
  },
];
