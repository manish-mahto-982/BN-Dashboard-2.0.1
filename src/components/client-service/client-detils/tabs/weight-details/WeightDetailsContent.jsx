import { gridClasses } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

function WeightDetailsContent({ theme }) {
  return (
    <DataGrid
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 },
        },
      }}
      disableColumnMenu={true}
      rows={data}
      getRowId={(params) => params.key}
      disableColumnFilter
      disableColumnSelector
      disableDensitySelector
      columns={columns}
      slots={{ pagination: null }}
      sx={{
        fontSize: "small",
        mt: 2,
        bgcolor: "background.default",
        ".MuiDataGrid-cell:focus-within": { outline: "none" },
        [`& .${gridClasses.cell}`]: {
          py: 1,
        },
      }}
    />
  );
}

export default WeightDetailsContent;
const columns = [
  {
    field: "key",
    headerName: "Key",
    headerClassName: "custom-data-grid-table-header",
    flex: 1,
    sortable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "value",
    headerName: "Value",
    headerClassName: "custom-data-grid-table-header",
    flex: 1,
    sortable: false,
  },
];

const data = [
  { key: "Goal Weight", value: "65.0" },
  { key: "Ass. St. Wt. (1st Prg Onwards)", value: "70.0 kg" },
  { key: "Program Start Weight", value: "70 kg" },
  { key: "Curr. Prgm. End Weight", value: "88.7 kg" },
  { key: "Total Loss In Curr. Ssn (8th)", value: "0 kg" },
  { key: "Total Loss In Curr. Prg", value: "0 kg" },
  { key: "Total Loss With Us", value: "+18.7 kg" },
];
