import * as React from "react";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarQuickFilter,
  gridClasses,
} from "@mui/x-data-grid";
import {
  FormControlLabel,
  IconButton,
  useTheme,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  DialogActions,
  Button,
  AlertTitle,
  Alert,
  Popover,
  Tooltip,
} from "@mui/material";
import ReactQuill from "react-quill";
import { useGetDraftsQuery } from "src/services/client-service/api";

import { draftOptions } from "src/utils/constants";
import SnackBarTopCenter,{SNACKBAR_TOP_CENTER_INITIAL_STATE} from "../snack-bar/SnackBarTopCenter";
import { AddDraftDialog } from "src/screens/quick-access/Drafts";

export function CustomToolbar() {
  return (
    <GridToolbarContainer
      sx={{
        display: "flex",
        justifyContent: "space-between",
        ".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary":
          { color:'info.main' },
        ".MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium": {
          fill: 'info.main',
        },
      }}
    >
      <GridToolbarExport />
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
}

export default function DraftsTable() {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const [alertState, setAlertState] = React.useState(
    SNACKBAR_TOP_CENTER_INITIAL_STATE
  );
  const { data, isLoading } = useGetDraftsQuery();

  const handleEditClick = (rowData) => {
    setSelectedRow(rowData);
    setIsModalOpen(true);
  };

  const handleCopyClick = (rowData) => {
    console.log("🚀 ~ handleCopyClick ~ rowData:", rowData);
    setSelectedRow(rowData);
    setAlertState({
      open: true,
      message: "Copied Successfully!",
    });
  };

  const handleDeleteClick = (rowData) => {
    setSelectedRow(rowData);
    setAlertState({
      open: true,
      message: "Deleted Successfully!",
    });
  };

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "description", headerName: "Description", height: 100, flex: 1 },
    {
      field: "actions",
      sortable: false,
      headerName: "Actions",
      headerAlign: "center",
      type: "actions",
      flex: 1,
      width: 140,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div
            className="flex"
            style={{ cursor: "pointer" }}
          >
            <MatEdit
              index={params.row.id}
              onEditClick={() => handleEditClick(params.row)}
            />
            <MatCopy
              index={params.row.id}
              onCopyClick={() => handleCopyClick(params.row)}
            />
            <MatDelete
              index={params.row.id}
              onDeleteClick={() => handleDeleteClick(params.row)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: "calc(100vh - 140px)", width: "100%" }}>
      {isLoading ? (
        "loading..."
      ) : (
        <>
          <DataGrid
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            rows={data}
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            columns={columns}
            sx={{
              ".MuiDataGrid-cell:focus-within": { outline: "none" },
              [`& .${gridClasses.cell}`]: {
                py: 1,
              },
              fontSize:12
            }}
            slots={{ toolbar: CustomToolbar }}
          />

          <EditModal
            isOpen={isModalOpen}
            setShow={setIsModalOpen}
            rowData={selectedRow}
            theme={theme}
          />

          <SnackBarTopCenter state={alertState} setAlertState={setAlertState} />
        </>
      )}
    </Box>
  );
}

const MatEdit = ({ index, onEditClick }) => {
  return (
    <FormControlLabel
      control={
        <Tooltip title={"Edit"}>
          <IconButton
            color="success"
            aria-label="edit"
            onClick={onEditClick}
            style={{ outline: "none" }}
          >
            <EditIcon style={{ color: "success", padding: 2 }} />
          </IconButton>
        </Tooltip>
      }
    />
  );
};

const MatCopy = ({ index, onCopyClick }) => {
  return (
    <>
      <FormControlLabel
        control={
          <Tooltip title={"Copy"}>
            <IconButton
              aria-label="edit"
              onClick={onCopyClick}
              style={{ outline: "none" }}
            >
              <ContentCopyIcon style={{ padding: 2 }} />
            </IconButton>
          </Tooltip>
        }
      />
    </>
  );
};

const MatDelete = ({ index, onDeleteClick }) => {
  return (
    <FormControlLabel
      control={
        <Tooltip title={"Delete"}>
          <IconButton
            color="error"
            aria-label="delete"
            onClick={onDeleteClick}
            style={{ outline: "none" }}
          >
            <DeleteOutlineIcon style={{ color: "red" }} />
          </IconButton>
        </Tooltip>
      }
    />
  );
};

const EditModal = ({ isOpen, setShow, rowData, theme }) => {
  if (!isOpen) return null;
  let selectedInd = 0;
  draftOptions.some((option, index) => {
    if (option === rowData.type) selectedInd = index;
  });
  return (
    <AddDraftDialog
      show={isOpen}
      setShow={setShow}
      theme={theme}
      data={{ ...rowData, type: selectedInd }}
    />
  );
};

