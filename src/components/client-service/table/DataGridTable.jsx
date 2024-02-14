import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableRow,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import {
  TbBell,
  TbBrandWhatsapp,
  TbEdit,
  TbMessage,
  TbPencil,
  TbTrash,
} from "react-icons/tb";
import FlexBoxBetween from "../common/FlexBoxBetween";

export default function DataGridTable({ data, isLoading = true }) {
  const theme = useTheme();
  const columns = Object.keys({ ...data[0], actions: true }).map((column) => ({
    field: column,
    headerClassName: "custom-data-grid-table-header",
    flex: 1,
    headerAlign: column === "actions" ? "center" : "left",
    sortable: column === "actions" ? false : true,
    type: column === "actions" ? "actions" : "",
    // align: "center",
    headerName: column.split("_").join(" "),
    width: 150,
    renderCell: (params) => {
      if (column === "actions") {
        return (
          <FlexBoxBetween columnGap={1}>
            <Tooltip title={"Whatsapp"}>
              <IconButton
                aria-label="whatsapp"
                color={"success"}
                onClick={() => handleWhatsApp(params.row)}
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
            <Tooltip title={"Notification"}>
              <IconButton aria-label="notification" color={"warning"}>
                <TbBell
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
      }
      return params.value;
    },
  }));

  const handleWhatsApp = (row) => {
    const phoneNumber = document
      .querySelector(`td#phone_${row.id}`)
      .innerHTML.replace(/[\+\-]/g, ""); //removing the + and - from the phoneNumber
    const whatsAppMessage = `https://wa.me/${phoneNumber}/?text=Hello Warsha Amarnani ,%0a%0aThis is Roshani here from Balance Nutrition Client Service Team.%0a%0aYour welcome call with your Mentor Jyoti is pending to do so you will have to login into the app and book your call.%0a%0aPlease do not miss booking this as it is an important one where your Mentor Jyoti will orient you about your program.%0a%0aP.S. Please feel free to contact me if you’re facing any issues in booking the call.`;
    console.log("🚀 ~ handleWhatsApp ~ phoneNumber:", phoneNumber);
    window.location.href = whatsAppMessage;
    console.log("🚀 ~ handleWhatsApp ~ whatsAppMessage:", whatsAppMessage);
  };

  const handleNotification = (row) => {
    // Implement Notification action here
    console.log(`Sending Notification to ${row.name}`);
  };

  const handleWait = (row) => {
    // Implement Wait action here
    console.log(`Waiting for ${row.name}`);
  };
  let rows = [];
  data.map((item, index) => {
    let row = {
      id: index + 1,
      actions: "actions",
    };
    Object.keys(item).map((itm, ind) => {
      let field = Object.keys(item)[ind];
      let container = () => {
        console.log("typeof item[field]", typeof item[field]);
        return (
          <tbody style={{ paddingBlock: 10 }}>
            {typeof item[field] === "object" ? (
              Object.keys(item[field]).map((key) => (
                <tr>
                  <td style={{ fontWeight: 600, textTransform: "capitalize" }}>
                    {key.split("_").join(" ")}&nbsp;:&nbsp;
                  </td>
                  <td
                    id={`${key}_${row.id}`}
                    style={{ fontSize: 14, paddingBlock: 4 }}
                  >
                    {item[field][key]}
                  </td>
                </tr>
              ))
            ) : (
              <FlexBoxBetween>
                <p>{item[field]}</p>
              </FlexBoxBetween>
            )}
          </tbody>
        );
      };
      row[field] = container();
    });
    rows.push(row);
  });
  return (
    <Box>
      {isLoading & (data.length === 0) ? (
        "loading..."
      ) : (
        <DataGrid
          getRowHeight={() => "auto"}
          rows={rows}
          sx={{
            "& .MuiDataGrid-columnHeadersInner .MuiDataGrid-columnHeaderTitle":
              {
                color: "text.main",
              },
            "& .MuiDataGrid-row.Mui-selected ": {
              bgcolor: "transparent !important",
            },
            "& .custom-data-grid-table-header": {
              textTransform: "capitalize",
              fontWeight: 600,
              // fontSize: '14px',
              color: theme.palette.text.primary,
            },
            fontSize: "small",
            "& .MuiTablePagination-selectLabel,.MuiTablePagination-displayedRows":
              {
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
          columns={columns}
          pageSize={5}
          showCellVerticalBorder
          showColumnVxerticalBorder
          rowsPerPageOptions={[5, 10, 20]}
        />
      )}
    </Box>
  );
}
