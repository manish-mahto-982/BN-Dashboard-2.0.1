import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { CustomToolbar } from "src/components/client-service/quick-access/DraftsTable";


function AppActivityContent({ theme, handleAddWallet }) {
  return (
    <>
      <DataGrid
        rows={rows}
        getRowId={(params) => params["Sr No."]}
        columns={columns}
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
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        slots={{ toolbar: CustomToolbar }}
      />
    </>
  );
}

export default AppActivityContent;

const columns = [
  { field: "Sr No.", flex: 1 },
  { field: "Page / Screen", flex: 1 },
  { field: "Source", flex: 1 },
  { field: "Date", flex: 1 },
 

];

const rows = [
  {
    "Sr No.": 1,
    "Page / Screen" : "Chekout Page",
    Source: "IOS",
    Date: "Jan 17th, 2024",
    
  },
  {
    "Sr No.": 2,
    "Page / Screen" : "Program Page",
    Source: "IOS",
    Date: "Jan 17th, 2024",
    
  },
  {
    "Sr No.": 3,
    "Page / Screen" : "Spin To Win",
    Source: "Android",
    Date: "Jan 17th, 2024",
    
  },
  
];
