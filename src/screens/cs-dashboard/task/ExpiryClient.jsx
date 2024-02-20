import React from "react";
import CSLayout from "../layout";
import CardWithIconAndDialogTable from "src/components/client-service/common/CardWithIconAndDialogTable";
import { TbUsersGroup } from "react-icons/tb";
import { commonDataAllTable } from "src/utils/constants";
import { Grid } from "@mui/material";
import { useMaterialUIController } from "src/context";
import { expiryClientTodayData } from "src/utils/tableData";
import useDataGridTableDialog from "src/hooks/useDataGridTableDialog";
function ExpiryClient() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
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
    { actionType = "default", actionColumn = "", tableTitle = "default" } = {}, // "= {}" this is important because to run the default value
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
  return (
    <CSLayout>
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <CardWithIconAndDialogTable
            handleClick={handleClick}
            data={expiryClientsData3}
            cardTitle="Expiry Client Details"
            darkMode={darkMode}
          />
        </Grid>
      </Grid>
      {dataGridTableDialog()}
    </CSLayout>
  );
}

export default ExpiryClient;

const expiryClientsData = [
  {
    title: "0th time renewal",
    value: "11",
    icon: { name: TbUsersGroup, color: "unset" },
    ...expiryClientTodayData,
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
];

const expiryClientsData3 = [
  {
    title: "Expiring Today",
    value: "5",
    Icon: TbUsersGroup,
    color: "error",
    ...expiryClientTodayData,
    actionType: "default",
    tableTitle:
      "Clients Getting Dropout Tomorrow (Please Extend Expiry Date as per Pending Session.)",
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
