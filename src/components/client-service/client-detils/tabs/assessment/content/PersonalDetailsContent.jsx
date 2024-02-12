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
  Radio,
  RadioGroup,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PerfectScrollbar from "react-perfect-scrollbar";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Controller, useForm } from "react-hook-form";
import { MuiTelInput } from "mui-tel-input";
import { City, Country, State } from "country-state-city";
import dayjs from "dayjs";
import DateField from "src/components/client-service/forms/DateField";
import ComboBox from "src/components/client-service/forms/ComboBox";
import {
  bodyShapeOptions,
  casteOptions,
  familyOptions,
  maritalStatusOptions,
} from "src/utils/constants";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";

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

export default function PersonalDetailsContent({ theme }) {
  const { control, getValues, formState, watch } = useForm({
    defaultValues: { ...data },
  });
  const stateRef = React.useRef(null);
  const countryRef = React.useRef(null);
  const countries = Country.getAllCountries();

  const updatedCountries = countries.map((country) => ({
    name: country.name,
    value: country.name,
    isoCode: country.isoCode,
  }));

  return (
    <Box sx={{ position: "sticky", top: 10 }}>
      <Grid container rowGap={5} columnSpacing={4}>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="name"
            render={({ field: { value, onChange } }) => (
              <TextField
                fullWidth
                color="secondary"
                label="Name"
                id="name"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <TextField
                fullWidth
                color="secondary"
                label="Email id"
                id="email"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="mobile_no"
            render={({ field: { value, onChange } }) => (
              <MuiTelInput
                label={"Mobile no"}
                fullWidth
                color="secondary"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="address"
            render={({ field: { value, onChange } }) => (
              <TextField
                fullWidth
                color="secondary"
                label="Address"
                id="address"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="country"
            render={({ field: { value, onChange } }) => (
              <FormControl fullWidth>
                <InputLabel color="secondary" id="demo-simple-select-label">
                  {"Country"}
                </InputLabel>
                <Select
                  value={value}
                  label={"Country"}
                  color="secondary"
                  name={value}
                  onChange={(event) => {
                    onChange(event.target.value);
                  }}
                  sx={{ p: 1.5 }}
                >
                  {updatedCountries.map((item) => (
                    <MenuItem
                      key={item.name}
                      id={item.isoCode}
                      onClick={(event) => console.log(event.id)}
                      name={item.name}
                      value={item.name}
                    >
                      {item.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel color="secondary">{"State"}</InputLabel>
            <Controller
              control={control}
              name="state"
              render={({ field: { value, onChange } }) => (
                <Select
                  ref={stateRef}
                  value={value}
                  name={value}
                  label={"State"}
                  color="secondary"
                  onChange={(event) => {
                    console.log(event.target.id);
                  }}
                  sx={{ p: 1.5 }}
                >
                  {State.getStatesOfCountry("IN").map((state) => (
                    <MenuItem
                      key={state.name}
                      onChange={(event) => console.log(event)}
                      value={state.name}
                    >
                      {state.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="city"
            render={({ field: { value, onChange } }) => (
              <FormControl fullWidth>
                <InputLabel color="secondary">{"City"}</InputLabel>
                <Select
                  ref={stateRef}
                  value={value}
                  name={value}
                  label={"City"}
                  fullWidth
                  color="secondary"
                  onChange={(event) => {
                    console.log(event.target.id);
                  }}
                  sx={{ p: 1.5 }}
                >
                  {City.getCitiesOfState("MH").map((state) => (
                    <MenuItem
                      key={state.name}
                      onChange={(event) => console.log(event)}
                      value={state.name}
                    >
                      {state.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="birth_date"
            render={({ field: { value, onChange } }) => (
              <Box width={"100%"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateField
                    label="Birth Date"
                    theme={theme}
                    value={dayjs(value)}
                    onChange={onChange}
                    
                  />
                </LocalizationProvider>
              </Box>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <ComboBox
                options={["male", "female"]}
                label={"select gender"}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="body_type"
            control={control}
            render={({ field }) => (
              <ComboBox
                options={bodyShapeOptions}
                label={"Body Type"}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="goal_weight"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                type="number"
                color="secondary"
                label="Goal Weight"
                id="goal_weight"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="other_goal"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                color="secondary"
                label="Other Goal"
                id="other_goal"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name="caste"
            control={control}
            render={({ field }) => (
              <ComboBox
                options={casteOptions}
                {...field}
                label="Select Caste"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="family"
            control={control}
            render={({ field }) => (
              <ComboBox
                options={familyOptions}
                {...field}
                label="Family Status"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="martial_status"
            control={control}
            render={({ field }) => (
              <ComboBox
                options={maritalStatusOptions}
                label="Marital Status"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="Child Status"
            control={control}
            render={({ field }) => (
              <ComboBox
                options={["Yes", "No"]}
                label="Child Status"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name="no_children"
            control={control}
            render={({ field }) => (
              <ComboBox
                options={[1, 2, 3, 4, 5]}
                label="No. of Child"
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <PrimaryButton theme={theme}>Save</PrimaryButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

const data = {
  name: "Ios Test7",
  email: "ios7@gmail.com",
  mobile_no: "+91 8976368346",
  address: "Santacruz",
  // isoCode: country.isoCode,
  //   label: country.name,
  //   value: country.name,
  country: "India",
  state: "Maharashtra",
  city: "Thane",
  birth_date: "1991-11-04",
  gender: "Male",
  body_type: "Square",
  weight: 70.0,
  height: 5.4,
  goal_weight: 65.0,
  other_goal: "feeling lighter",
  caste: "Maharashtrian",
  family: "Nuclear",
  martial_status: "Married",
  is_pregnant: "Pregnancy month",
  child_status: "Yes",
  no_children: 3,
  age_child1: "18-12-2023",
  age_child2: "06/12/2022",
  age_child3: "06/12/2012",
};
