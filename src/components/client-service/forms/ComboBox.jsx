import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ComboBox = React.forwardRef(
  (
    {
      options = [],
      label = "Select Options",
      value,
      onChange = () => {},
      ...props
    },
    ref
  ) => {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        ref={ref}
        options={options}
        onChange={onChange}
        fullWidth
        sx={{}}
        renderInput={(params) => (
          <TextField
            color="secondary"      
            label={label}
            {...params}
            sx={{
              "& .MuiOutlinedInput-root": {
                padding:'5px'
              }
            }}

          />
        )}
        {...props}
      />
      // <FormControl fullWidth>
      //   <InputLabel color="secondary" id="demo-simple-select-label">{ label}</InputLabel>
      //   <Select
      //     labelId="demo-simple-select-label"
      //     id="demo-simple-select"
      //     value={value}
      //     label={label}
      //     color="secondary"
      //     onChange={onChange}
      //   >
      //     {options.map((item) => (
      //       <MenuItem value={item}>{item}</MenuItem>
      //     ))}
      //   </Select>
      // </FormControl>
    );
  }
);

export default ComboBox;
