import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import FlexBoxBetween from "../common/FlexBoxBetween";
import { TbBell, TbBrandWhatsapp, TbMessage } from "react-icons/tb";

function DataTable({ data = [], isLoading = true, columns }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n, index) => index);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_, index) => {
    setSelectedRow(data[index]);
    const selectedIndex = selected.indexOf(index);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, index);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (index) => selected.indexOf(index) !== -1;

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRow(null);
  };

  return (
    <Box style={{ margin: "0px", padding: "15px", position: "relative" }}>
      {isLoading & (data.length === 0) ? (
        "loading.."
      ) : (
        <>
          <FlexBoxBetween>
            <TextField
              label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ marginBottom: "5px", padding: "0px" }}
            />
          </FlexBoxBetween>
          <TableContainer
            style={{
              // border: "1px solid #dedede",
              // borderBottom: "none",
              marginTop: 10,
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id}>
                      <TableSortLabel>
                        <b style={{ textTransform: "capitalize" }}>
                          {column.label}
                        </b>
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .filter((row) =>
                    Object.values(row)
                      .join(" ")
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(index);
                    return (
                      <TableRow
                        key={index}
                        selected={isItemSelected}
                        onClick={(event) => handleClick(event, index)}
                      >
                        {columns.map((column, i) => (
                          <TableCell
                            style={{
                              width: column.id === "action" ? "120px" : "unset",
                            }}
                            key={column.id}
                          >
                            {column.id === "action" ? (
                              <FlexBoxBetween style={{}} columnGap={1.5}>
                                <Button
                                  disableElevation
                                  startTb={
                                    <TbBrandWhatsapp strokeWidth={1.5} />
                                  }
                                  variant="contained"
                                  color="success"
                                  onClick={(event) => {
                                    handleClick(event, cellValues);
                                  }}
                                  style={{ color: "white", paddingInline: 16 }}
                                >
                                  Client
                                </Button>
                                <Button
                                  startTb={<TbBell strokeWidth={1.2} />}
                                  variant="outlined"
                                  onClick={(event) => {
                                    handleClick(event, cellValues);
                                  }}
                                  style={{
                                    borderColor: "orange",
                                    color: "orange",
                                    paddingInline: 16,
                                  }}
                                >
                                  Ask
                                </Button>
                                <Button
                                  startTb={<TbMessage strokeWidth={1.2} />}
                                  variant="outlined"
                                  onClick={(event) => {
                                    handleClick(event, cellValues);
                                  }}
                                  color="success"
                                  style={{
                                    paddingInline: 16,
                                  }}
                                >
                                  Wati
                                </Button>
                              </FlexBoxBetween>
                            ) : (
                              <div>
                                {Object.keys(row).map((key) => {
                                  if (column.id === key) {
                                    if (typeof row[key] === "object") {
                                      return (
                                        <div
                                          key={key}
                                          style={{ marginBottom: "0.5rem" }}
                                        >
                                          <div>
                                            {Object.keys(row[key]).map(
                                              (subKey) =>
                                                subKey !== "id" && (
                                                  <div key={subKey}>
                                                    <b>
                                                      {subKey
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        subKey
                                                          .slice(1)
                                                          .replace(/_/g, " ")}
                                                      :
                                                    </b>{" "}
                                                    {row[key][subKey]}
                                                  </div>
                                                )
                                            )}
                                          </div>
                                        </div>
                                      );
                                    } else {
                                      return (
                                        <div
                                          key={key}
                                          style={{ marginBottom: "0.5rem" }}
                                        >
                                          {row[key]}
                                        </div>
                                      );
                                    }
                                  }
                                })}
                              </div>
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{ marginTop: "16px" }}
          />
        </>
      )}
      {selectedRow && (
        // <AddDetailsModal
        //   open={openModal}
        //   handleClose={handleCloseModal}
        //   rowData={selectedRow}
        // />
        <></>
      )}
    </Box>
  );
}

export default DataTable;
