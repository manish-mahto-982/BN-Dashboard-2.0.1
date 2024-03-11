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
import FlexBoxBetween from "../common/FlexBoxBetween";
import { handleWhatsApp } from "src/utils/helper";
import MDBox from "src/components/theme/common/MDBox";
import classNames from "classnames";
import DateField from "../../common/forms/DateField";
import { Controller, useForm } from "react-hook-form";
import PrimaryButton from "../common/PrimaryButton";

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
  const columns = Object.keys({ ...data[0], actions: true }).map((column) => ({
    field: column,
    headerClassName: "custom-data-grid-table-header",
    flex: 1,
    headerAlign: column === "actions" ? "center" : "left",
    sortable: column === "actions" ? false : true,
    type: column === "actions" ? "actions" : "",
    // align: "center",
    headerName: column.split("_").join(" "),
    renderCell: (params) => {
      if (column === "actions" && actionType === "default") {
        const phoneNumber = document
          ?.querySelector(`td#phone_${params.row.id}`)
          ?.innerHTML.replace(/[\+\-]/g, "");
        return (
          <FlexBoxBetween columnGap={1}>
            <Tooltip title={"Whatsapp"}>
              <IconButton
                aria-label="whatsapp"
                color={"success"}
                onClick={() => handleWhatsApp(phoneNumber)}
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
      } else if (column === "actions" && actionType === "custom") {
        return <>{actionColumn(params.row)}</>;
      }
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
                  if (key === "id" || key === "mentor_phone") {
                    return null;
                  } else if (key === "mentor") {
                    const mentorPhoneNumber = item[field]["mentor_phone"];
                    return (
                      <tr key={String(key + index)}>
                        {/* <td
                          style={{
                            fontWeight: 600,
                            textTransform: "capitalize",
                          }}
                        >
                          {key.split("_").join(" ")}&nbsp;:&nbsp;
                        </td> */}
                        <td
                          id={`${key}_${row.id}`}
                          style={{ fontSize: "0.83rem", whiteSpace: "nowrap" }}
                        >
                          <FlexBoxBetween justifyContent="start" columnGap={2}>
                            {item[field][key]}
                            <Tooltip title={"Whatsapp"}>
                              <IconButton
                                aria-label="whatsapp"
                                color={"success"}
                                sx={{ padding: 0 }}
                                onClick={() =>
                                  handleWhatsApp(mentorPhoneNumber)
                                }
                              >
                                <TbBrandWhatsapp
                                  style={{
                                    strokeWidth: 1.4,
                                    // padding: 2,
                                  }}
                                  size={20}
                                />
                              </IconButton>
                            </Tooltip>
                          </FlexBoxBetween>
                        </td>
                      </tr>
                    );
                  } else if (key === "is_advanced_purchased") {
                    return (
                      <tr key={String(key + index)}>
                        {/* <td
                          style={{
                            fontWeight: 600,
                            textTransform: "capitalize",
                          }}
                        >
                          {key.split("_").join(" ")}&nbsp;:&nbsp;
                        </td> */}
                        <td
                          id={`${key}_${row.id}`}
                          style={{
                            fontSize: "0.83rem",
                            whiteSpace: "nowrap",
                            verticalAlign: "top",
                          }}
                        >
                          {
                            <Box
                              className={classNames(
                                "my-1 w-fit rounded-full px-2 py-0.5 text-xs",
                                {
                                  "bg-green-100 text-green-700":
                                    item[field][key] === true,
                                },
                                {
                                  "bg-red-100 text-red-700":
                                    item[field][key] === false,
                                },
                              )}
                            >
                              {item[field][key] === false
                                ? "No adv purchase"
                                : "With adv purchase"}
                            </Box>
                          }
                        </td>
                      </tr>
                    );
                  } else if (key === "pending_session" || key === "date") {
                    const { control, register } = useForm({
                      defaultValues: {
                        order_extended_date: null,
                      },
                    });
                    return (
                      <tr key={String(key + index)}>
                        {/* <td
                      style={{
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    >
                      {key.split("_").join(" ")}&nbsp;:&nbsp;
                    </td> */}
                        <td
                          id={`${key}_${row.id}`}
                          style={{ fontSize: "0.83rem" }}
                        >
                          {item[field][key]}
                          <Controller
                            name="order_extended_date"
                            control={control}
                            render={({ field }) => {
                              return <MUIDateField field={field} theme={theme} />;
                            }}
                          />

                          <PrimaryButton
                            onClick={() => {}}
                            sx={{ scale: "80%", ml: -1 }}
                          >
                            Save
                          </PrimaryButton>
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr key={String(key + index)}>
                        {/* <td
                          style={{
                            fontWeight: 600,
                            textTransform: "capitalize",
                          }}
                        >
                          {key.split("_").join(" ")}&nbsp;:&nbsp;
                        </td> */}
                        <td
                          id={`${key}_${row.id}`}
                          style={{ fontSize: "0.83rem", whiteSpace: "nowrap" }}
                        >
                          {item[field][key]}
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
