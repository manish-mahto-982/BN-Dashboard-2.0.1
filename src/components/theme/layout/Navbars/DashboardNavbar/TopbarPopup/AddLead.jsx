import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MDButton from "src/components/theme/common/MDButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import MDBox from "src/components/theme/common/MDBox";
import Swal from "sweetalert2";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddLead() {
  const [open, setOpen] = React.useState(false);
  const [personName, setPersonName] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [status, setStatus] = React.useState([]);
  const [feet, setFeet] = React.useState([]);
  const [inches, setInches] = React.useState([]);
  const [source, setSource] = React.useState([]);
  const [assign, setAssign] = React.useState([]);
  const [medical, setMedical] = React.useState([]);
  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Lead Added successfuly!",
    });
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleChangeFeet = (event) => {
    setFeet(event.target.value);
  };
  const handleChangeInches = (event) => {
    setInches(event.target.value);
  };
  const handleChangeSource = (event) => {
    setSource(event.target.value);
  };
  const handleChangeAssign = (event) => {
    setAssign(event.target.value);
  };
  const handleChangeMedical = (event) => {
    setMedical(event.target.value);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <MDBox
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MDButton
          variant="contained"
          color="success"
          sx={{ marginRight: 1, marginBottom: 1 }}
          onClick={handleOpen}
        >
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;Add Lead
        </MDButton>
      </MDBox>
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
            sx={{ mb: 2 }}
            align="center"
          >
            Add Lead
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="Lead Name" id="leadname" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="number"
                label="Mobile No"
                id="mobileno"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth type="email" label="Email" id="email" />
            </Grid>
            <Grid item xs={6} sx={{ mt: -1 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker sx={{ width: 310 }} label="Date" fullWidth />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth type="number" label="Age" id="age" />
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    sx={{ m: 1 }}
                  >
                    Gender
                  </FormLabel>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                type="number"
                label="Wt (kg) 0-999"
                id="wtkg"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                type="number"
                label="Wt (gm) 0-999"
                id="wtgm"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ minWidth: 260 }}>
                <InputLabel id="demo-simple-select-label">Feet</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={feet}
                  label="Feet"
                  sx={{ height: "43px" }}
                  onChange={(event) => setFeet(event.target.value)}
                >
                  <MenuItem value={10}>0 (ft)</MenuItem>
                  <MenuItem value={20}>1 (ft)</MenuItem>
                  <MenuItem value={30}>2 (ft)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ minWidth: 260 }}>
                <InputLabel id="demo-simple-select-label">Inches</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={inches}
                  label="Inches "
                  sx={{ height: "43px" }}
                  onChange={(event) => setInches(event.target.value)}
                >
                  <MenuItem value={10}>0 (in)</MenuItem>
                  <MenuItem value={20}>1 (in)</MenuItem>
                  <MenuItem value={30}>2 (in)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ minWidth: 260 }}>
                <InputLabel id="demo-simple-select-label">Source</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={source}
                  label="Source"
                  sx={{ height: "43px" }}
                  onChange={(event) => setSource(event.target.value)}
                >
                  <MenuItem value={10}>Facebook</MenuItem>
                  <MenuItem value={20}>Insta</MenuItem>
                  <MenuItem value={30}>Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ minWidth: 260 }}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="Status"
                  sx={{ height: "43px" }}
                  onChange={(event) => setStatus(event.target.value)}
                >
                  <MenuItem value={10}>Hot</MenuItem>
                  <MenuItem value={20}>Cold</MenuItem>
                  <MenuItem value={30}>Warm</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ minWidth: 260 }}>
                <InputLabel id="demo-simple-select-label">Assign To</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={assign}
                  label="Assign to"
                  sx={{ height: "43px" }}
                  onChange={(event) => setAssign(event.target.value)}
                >
                  <MenuItem value={10}>chelsi</MenuItem>
                  <MenuItem value={20}>Siddhi</MenuItem>
                  <MenuItem value={30}>Akansha</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ minWidth: 260 }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Medical
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  sx={{ height: "43px" }}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={3}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ mt: 2, width: "100%", justifyContent: "center" }}
                >
                  <MDButton
                    fullWidth
                    variant="contained"
                    color="info"
                    size="small"
                    onClick={() => {
                      showSuccessAlert();
                      handleClose();
                    }}
                  >
                    Save
                  </MDButton>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
