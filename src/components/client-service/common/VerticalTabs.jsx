import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PerfectScrollbar from "react-perfect-scrollbar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{
        width: "100%",
        minWidth: "400px",
      }}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            height: "100%",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({
  tabs = [{ label: "", tabComponent: <></> }],
  theme,
  tabsHeight = "500px",
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        height: "100%",
        overflowX: "scroll",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minWidth: "186px",
          maxWidth: "186px",
          // display:'none',
          height: tabsHeight,
          "&.MuiTabs-root.MuiTabs-vertical": { borderRight: "unset" },
        }}
      >
        {tabs.map((item, index) => (
          <Tab
            key={item.label}
            label={item.label}
            // color="secondary"
            {...a11yProps(index)}
            sx={{
              fontSize: "small",
              // "&.Mui-selected": { color: 'info.main' },
            }}
          />
        ))}
      </Tabs>
      {tabs.map((item, index) => (
        <TabPanel key={index} value={value} index={index}>
          {item.tabComponent}
        </TabPanel>
      ))}
    </Box>
  );
}
