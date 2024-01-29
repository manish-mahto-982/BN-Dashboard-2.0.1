import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, MenuItem, Select, TextareaAutosize } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import MDButton from "src/components/theme/common/MDButton";

const columns = [
  { field: "id", headerName: "ID", width: 30 },
  {
    field: "name",
    headerName: "Name",
    width: 170,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email id",
    width: 170,
    editable: true,
  },
  {
    field: "mobileNo",
    headerName: "Mobile No",
    type: "number",
    width: 130,
    editable: true,
  },
  {
    field: "callDate",
    headerName: "Call Date",
    type: "number",
    width: 130,
    editable: true,
  },
  {
    field: "timeSlot",
    headerName: "Time Slot",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Select
          value={params.id}
          displayEmpty
          style={{ margin: "2px", minWidth: "100%", height: "36px" }}
        >
          <MenuItem value="" disabled>
            Change Status
          </MenuItem>
          <MenuItem value={1}>Done</MenuItem>
          <MenuItem value={2}>Unaswared</MenuItem>
        </Select>
        <TextareaAutosize
          placeholder="Add notes..."
          minRows={2}
          style={{
            width: "100%",
            margin: "10px",
            padding: "8px",
            border: "1px solid #ccc", // Added border style
            borderRadius: "4px", // Added border-radius for rounded corners
          }}
        />
        <MDButton variant="contained" color="info" size="small">
          Save
        </MDButton>
      </Box>
    ),
  },
];

const rows = [
  {
    id: 1,
    name: "Sunil Jadhav",
    email: "sunil@gmail.com",
    mobileNo: "9032876783",
    callDate: "12-3-2023",
    timeSlot: "12:00 AM",
  },
  {
    id: 2,
    name: "Sagar Pawar",
    email: "sagar@gmail.com",
    mobileNo: "9032876783",
    callDate: "2-3-2023",
    timeSlot: "11:00 AM",
  },
  {
    id: 3,
    name: "Shraddha Jadhav",
    email: "sharddha@gmail.com",
    mobileNo: "2032876783",
    callDate: "2-2-2022",
    timeSlot: "2:00 PM",
  },
  {
    id: 4,
    name: "Mayuri kothare",
    email: "Mayuri@gmail.com",
    mobileNo: "9032876783",
    callDate: "2-3-2023",
    timeSlot: "11:00 AM",
  },
  {
    id: 5,
    name: "Vaishnavi Salunkhe",
    email: "vaishnavi@gmail.com",
    mobileNo: "2232876783",
    callDate: "12-3-2023",
    timeSlot: "3:00 PM",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "55%",
  transform: "translate(-50%, -50%)",
  width: 1100,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

export default function ConsultationBooked() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <MDButton
        variant="contained"
        color="success"
        size="small"
        // sx={{ width: "100%" }}
        onClick={handleOpen}
      >
        Consultation Booked
      </MDButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 3 }}
          >
            Consultation Booked
          </Typography>
          <Grid container spacing={2}>
            <DataGrid
              rows={rows}
              columns={columns}
              getRowHeight={() => 150}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 3,
                  },
                },
              }}
              pageSizeOptions={[3]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
