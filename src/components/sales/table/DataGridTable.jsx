import React, { useRef } from "react";
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
// import FlexBoxBetween from "../common/FlexBoxBetween";
import { handleWhatsApp } from "src/utils/helper";
import DBox from "src/components/theme/common/MDBox";
import classNames from "classnames";
import DateField from "../../common/forms/DateField";
import { Controller, useForm } from "react-hook-form";
// import PrimaryButton from "../common/PrimaryButton";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import MDTypography from "src/components/theme/common/MDTypography";

const MUIDateField = React.forwardRef(({ field, theme }, ref) => {
  return (
    <div className="mr-1 inline-flex">
      <DateField {...field} theme={theme} ref={ref} />
    </div>
  );
});

export default function DataGridTable({
  data,
  isLoading = true,
  actionType = "default",
  actionColumn = null,
}) {
  const theme = useTheme();
  const columns = Object.keys({ ...data[0] }).map((column) => ({
    field: column,
    headerClassName: "custom-data-grid-table-header",
    flex: 1,
   
    headerAlign: "left",
    sortable: true,
    // align: "center",
    headerName: column.split("_").join(" "),
    renderCell: (params) => {
      return params.value;
    },
  }));

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
        return (
          <table
            style={{
              alignSelf: "start",
            }}
          >
            <tbody style={{ paddingBlock: 10 }}>
              {typeof item[field] === "object" ? (
                Object.keys(item[field]).map((key, index) => {
                  if (key === "id") {
                    return null;
                  } else {
                    return (
                      <tr key={String(key + index)} className="align-top" style={{whiteSpace: "wrap"}}>
                        <td
                          style={{
                            fontWeight: 600,
                            textTransform: "capitalize",
                          }}
                        >
                          <MDTypography
                            fontSize="medium"
                            whiteSpace={"wrap"}
                            textTransform={"capitalize"}
                            color={"text"}
                          >
                            {key.split("_").join(" ")}&nbsp;:&nbsp;
                          </MDTypography>
                        </td>
                        <td
                          id={`${key}_${row.id}`}
                          style={{ fontSize: "0.83rem" }}
                        >
                          <MDTypography
                            fontSize="14px"
                            display={"inline"}
                            textTransform={"capitalize"}
                            color={"text"}
                            width={"fit-content"}
                          >
                            <strong
                              style={{
                                marginRight: 6,
                              }}
                            >
                              {item[field][key]}
                            </strong>
                          </MDTypography>
                        </td>
                      </tr>
                    );
                  }
                })
              ) : (
                <FlexBoxBetween>
                  <p>{item[field]}</p>
                </FlexBoxBetween>
              )}
            </tbody>
          </table>
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
          showColumnVerticalBorder
          rowsPerPageOptions={[5, 10, 20]}
        />
      )}
    </Box>
  );
}
