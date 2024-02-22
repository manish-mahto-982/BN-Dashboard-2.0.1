import React, { useMemo } from "react";
import CSLayout from "../layout";
import { randomNumberGenerator } from "src/utils/helper";
import CardWithDialogTable from "src/components/client-service/common/CardWithDialogTable";
import { Grid } from "@mui/material";
import { useMaterialUIController } from "src/context";
import useHandleTable from "src/hooks/useHandleTable";
import useDataGridTableDialog from "src/hooks/useDataGridTableDialog";
import {
  newClientBasicStackTableData,
  halftimeHealthScoreCommonData,
  halfTimeFeedbackCommonData,
  halftimeCallCommonData,
} from "src/utils/tableData";
function HalftimeJourney() {
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
      <Grid container rowGap={3} columnGap={3}>
        {Object.entries(cardData).map(([cardTitle, data]) => {
          return (
            <Grid key={cardTitle} item xs={12} lg={3.8}>
              <CardWithDialogTable
                handleClick={handleClick}
                titleType="normal"
                {...{ cardTitle, data }}
              />
            </Grid>
          );
        })}
      </Grid>
      {dataGridTableDialog()}
    </CSLayout>
  );
}

export default HalftimeJourney;

const cardData = {
  "Today Received": [
    {
      title: "HT Health Score",
      value: 21,
      ...newClientBasicStackTableData,
      tableTitle: "Half time Health Score Received Today",
    },
    {
      title: "HT Feedback",
      value: 21,
      ...newClientBasicStackTableData,
      tableTitle: "Half time Feedback Received Today",
    },
    {
      title: "HT Call",
      value: 21,
      ...newClientBasicStackTableData,
      tableTitle: "Half time Feedback Call Scheduled Today",
    },
  ],
  "1st Reminder (Not Received)": [
    {
      title: "HT Health Score",
      value: 1,
      ...halftimeHealthScoreCommonData,
      tableTitle: "Half time Feedback First Day",
    },
    {
      title: "HT Feedback",
      value: 21,
      ...halfTimeFeedbackCommonData,
      tableTitle: "Half time Feedback First Day",
    },
    {
      title: "HT Call",
      value: 2,
      ...halftimeCallCommonData,
      tableTitle: "Half time Feedback Call First Day",
    },
  ],
  "2nd Reminder (Not Received)": [
    {
      title: "HT Health Score",
      value: 3,
      tableTitle: "Half time Health Score Day 2 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "HT Feedback",
      value: 4,
      tableTitle: "Half time Feedback Day 2 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "HT Call",
      value: 2,
      tableTitle: "Half time Feedback Call Day 2 (OD)",
      ...newClientBasicStackTableData,
    },
  ],
  "3rd Reminder (Not Received)": [
    {
      title: "HT Health Score",
      value: 5,
      tableTitle: "Half time Health Score Day 3 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "HT Feedback",
      value: randomNumberGenerator(),
      tableTitle: "Half time Feedback Day 3 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "HT Call",
      value: randomNumberGenerator(),
      tableTitle: "Half time Feedback Call Day 3 (OD)",
      ...newClientBasicStackTableData,
    },
  ],
  "4th Reminder (Not Received)": [
    {
      title: "HT Health Score",
      value: randomNumberGenerator(),
      tableTitle: "Half time Health Score Day 4 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "HT Feedback",
      value: randomNumberGenerator(),
      tableTitle: "Half time Feedback Day 4 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "HT Call",
      value: randomNumberGenerator(),
      tableTitle: "Half time Feedback Call Day 4 (OD)",
      ...newClientBasicStackTableData,
    },
  ],
  "Final Reminder (Not Received)": [
    {
      title: "HT Health Score",
      value: randomNumberGenerator(),
      tableTitle: "Half time Health Score Day 5 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "HT Feedback",
      value: randomNumberGenerator(),
      tableTitle: "Half time Feedback Day 5 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "HT Call",
      value: randomNumberGenerator(),
      tableTitle: "Half time Feedback Call Day 5 (OD)",
      ...newClientBasicStackTableData,
    },
  ],
};
