import React, { useState } from "react";
import DataGridTable from "src/components/client-service/table/DataGridTable";
import DataGridTableDialog from "src/components/client-service/table/DataGridTableDialog";

function useDataGridTableDialog() {
  const [tableData, updateTableData] = useState({
    data: [],
    columns: [],
    tableTitle: "",
    actionType: "default",
    actionColumn: null,
  });
  const [showTable, updateShowTable] = useState(false);
  const setTableData = (newVal) => {
    updateTableData(newVal);
  };
  const setShowTable = (newVal) => {
    updateShowTable(newVal);
  };
  const dataGridTableDialog = () => (
    <DataGridTableDialog
      title={tableData.tableTitle}
      open={showTable}
      setOpen={setShowTable}
      dataGrid={
        tableData.data.length !== 0 && (
          <DataGridTable
            data={tableData.data}
            actionType={tableData.actionType}
            {...(tableData.actionType === "custom" && {
              actionColumn: tableData.actionColumn,
            })}
          />
        )
      }
    />
  );
  return {
    tableData,
    setTableData,
    showTable,
    setShowTable,
    dataGridTableDialog,
  };
}

export default useDataGridTableDialog;
