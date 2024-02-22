import React from "react";
import CSLayout from "../layout";
import { randomNumberGenerator } from "src/utils/helper";
import CardWithDialogTable from "src/components/client-service/common/CardWithDialogTable";
import { Grid } from "@mui/material";
import {
  newClientBasicStackTableData,
  halftimeHealthScoreCommonData,
  halfTimeFeedbackCommonData,
  halftimeCallCommonData,
} from "src/utils/tableData";
import useDataGridTableDialog from "src/hooks/useDataGridTableDialog";
function TailEndJourney() {
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
      <Grid container spacing={3}>
        {Object.entries(cardData).map(([cardTitle, data]) => (
          <Grid key={cardTitle} item xs={12} sm={6} lg={4}>
            <CardWithDialogTable
              titleType="normal"
              handleClick={handleClick}
              {...{ cardTitle, data }}
            />
          </Grid>
        ))}
      </Grid>
      {dataGridTableDialog()}
    </CSLayout>
  );
}

export default TailEndJourney;
const cardData = {
  "Today Received": [
    {
      title: "Goal",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Goal First Day",
    },
    {
      title: "TE Health Score",
      value: randomNumberGenerator(),
      ...newClientBasicStackTableData,
      tableTitle: "Tail-end Health Score Received Today",
    },
    {
      title: "TE Feedback",
      value: 21,
      ...newClientBasicStackTableData,
      tableTitle: "Tail-end Feedback Received Today",
    },
    {
      title: "TE Call",
      value: 21,
      ...newClientBasicStackTableData,
      tableTitle: "Tail-end Feedback Call Scheduled Today",
    },
  ],
  "1st Reminder (Not Received)": [
    {
      title: "Goal",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Goal First Day",
    },
    {
      title: "TE Health Score",
      value: randomNumberGenerator(),
      ...halftimeHealthScoreCommonData,
      tableTitle: "Tail-end Feedback First Day",
    },
    {
      title: "TE Feedback",
      value: 21,
      ...halfTimeFeedbackCommonData,
      tableTitle: "Tail-end Feedback First Day",
    },
    {
      title: "TE Call",
      value: 2,
      ...halftimeCallCommonData,
      tableTitle: "Tail-end Feedback Call First Day",
    },
  ],
  "2nd Reminder (Not Received)": [
    {
      title: "Goal",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Goal First Day",
    },
    {
      title: "TE Health Score",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Health Score Day 2 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "TE Feedback",
      value: 4,
      tableTitle: "Tail-end Feedback Day 2 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "TE Call",
      value: 2,
      tableTitle: "Tail-end Feedback Call Day 2 (OD)",
      ...newClientBasicStackTableData,
    },
  ],
  "3rd Reminder (Not Received)": [
    {
      title: "Goal",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Goal First Day",
    },
    {
      title: "TE Health Score",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Health Score Day 3 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "TE Feedback",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Feedback Day 3 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "TE Call",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Feedback Call Day 3 (OD)",
      ...newClientBasicStackTableData,
    },
  ],
  "4th Reminder (Not Received)": [
    {
      title: "Goal",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Goal First Day",
    },
    {
      title: "TE Health Score",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Health Score Day 4 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "TE Feedback",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Feedback Day 4 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "TE Call",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Feedback Call Day 4 (OD)",
      ...newClientBasicStackTableData,
    },
  ],
  "Final Reminder (Not Received)": [
    {
      title: "Goal",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Goal First Day",
    },
    {
      title: "TE Health Score",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Health Score Day 5 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "TE Feedback",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Feedback Day 5 (OD)",
      ...newClientBasicStackTableData,
    },
    {
      title: "TE Call",
      value: randomNumberGenerator(),
      tableTitle: "Tail-end Feedback Call Day 5 (OD)",
      ...newClientBasicStackTableData,
    },
  ],
};
