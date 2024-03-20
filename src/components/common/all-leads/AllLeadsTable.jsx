import React, { useEffect, useState } from "react";
import DataGridTable from "src/components/sales/table/DataGridTable";
import SalesLayout from "src/screens/sales-dashboard/layout";
import {  useLazyGetAllLeadDataQuery } from "src/services/sales/api";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ComboBox from "../forms/ComboBox";
import { Card } from "@mui/material";

const AllLeadsTable = () => {
  const[getLeadData, { data, isLoading }] = useLazyGetAllLeadDataQuery();
  const [state, setState] = useState({
    ol: false,
    olr: false,
    new_lead: false,
    hot: false,
    warm: false,
    cold: false,
    to_engage: false,
  });
  const { ol, olr, new_lead, hot, warm, cold, to_engage } = state;
  const handleChange = (event) => {
    console.log(event);
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  useEffect(() => {
    let params = [];
    Object.entries(state).map(([key, value]) => {
      if (value === true) {
        return params.push(key);
      }
    });
    console.log(params)
    getLeadData(params)
  }, [state]);

  return (
    <>
    <Card sx={{paddingInline:"10px"}}>
    <div className="flex justify-between py-5">
        <FormGroup sx={{ flexDirection: "row" }} className=" gap-x-4">
          <FormControlLabel
            checked={ol}
            name="ol"
            control={<Checkbox defaultChecked />}
            label="OL"
            onChange={handleChange}
          />
          <FormControlLabel
            checked={olr}
            name="olr"
            control={<Checkbox />}
            onChange={handleChange}
            label="OLR"
          />
          <FormControlLabel
            checked={new_lead}
            name="new_lead"
            control={<Checkbox onChange={handleChange} defaultChecked />}
            label="NEW"
          />
          <FormControlLabel
            checked={hot}
            name="hot"
            control={<Checkbox />}
            onChange={handleChange}
            label="Hot"
          />
          <FormControlLabel
            checked={warm}
            name="warm"
            control={<Checkbox defaultChecked />}
            onChange={handleChange}
            label="Warm"
          />
          <FormControlLabel
            checked={cold}
            name="cold"
            control={<Checkbox />}
            onChange={handleChange}
            label="Cold"
          />
          <FormControlLabel
            checked={to_engage}
            name="to_engage"
            control={<Checkbox />}
            onChange={handleChange}
            label="To Engage"
          />
        </FormGroup>
        <ComboBox
          sx={{ width: "250px" }}
          label="Assign To"
          options={["Chelsi", "Siddhi", "Akansha"]}
        />
      </div>
      <DataGridTable data={data ? data.all_lead_table_data : []} />
    </Card>
    
    </>
  );
};

export default AllLeadsTable;
