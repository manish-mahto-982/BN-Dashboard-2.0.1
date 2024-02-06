import { DataGrid } from "@mui/x-data-grid";
import React from "react";

function LastDeviceTabContent() {
  return (
    <DataGrid sx={{ fontSize: 'small', '& .MuiTablePagination-selectLabel,.MuiTablePagination-displayedRows':{fontSize:'small'}}}  columns={lastDeviceColumns} rows={lastDeviceRows} />
  );
}

export default LastDeviceTabContent;



const lastDeviceColumns = [
    { field: "device", headerName: "Device", flex: 1 },
    { field: "version", headerName: "Version", flex: 1 },
    { field: "last_device", headerName: "Last Device", flex: 1 },
  ];
  
  
  const lastDeviceRows = [
    {
      id: 1,
      device: "android",
      version: "5.0.40",
      last_device: "2024-01-16 05:45:34",
    },
    {
      id: 2,
      device: "android",
      version: "5.0.40",
      last_device: "2024-01-14 02:05:23",
    },
    {
      id: 3,
      device: "android",
      version: "5.0.40",
      last_device: "2024-01-12 01:45:34",
    },
  ];