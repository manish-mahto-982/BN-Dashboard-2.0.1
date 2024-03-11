import * as React from "react";
import PropTypes, { string } from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import NotificationSentContent from "./tabs/notification-received/NotificationSentContent";
const ICLContent = React.lazy(() => import("./tabs/ICL/ICLContent"));
import TrackerContent from "./tabs/trackers/TrackerContent";
import WeightDetailsContent from "./tabs/weight-details/WeightDetailsContent";
import FeedbackContent from "./tabs/feedback/FeedbackContent";
import WalletStatementContent from "./tabs/wallet-statement/WalletStatementContent";
import MentorChats from "./tabs/mentor-chats/MentorChats";
import MentorChatsNew from "./tabs/mentor-chats/MetorChatsNew";
import { useMaterialUIController } from "src/context";
import { LinearProgress, Skeleton } from "@mui/material";
import MDBox from "src/components/theme/common/MDBox";
const UserAccordion = React.lazy(() => import("./UserAccordion"));
const AssessmentContent = React.lazy(
  () => import("./tabs/assessment/AssessmentContent"),
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <MDBox
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      sx={{ bgcolor: "background.main", borderRadius: "12px", marginTop: 2 }}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </MDBox>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({ handleAddWallet, tabsArr }) {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        borderRadius: `${12}px`,
        overflow: "hidden",
        height: "100%",
        // background: "#f8f9fa",
      }}
    >
      <AppBar
        position="static"
        sx={{ bgcolor: "background.default", overflowX: "scroll" }}
        elevation={0}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="info.main"
          scrollButtons="auto"
          variant="scrollable"
          sx={{
            minWidth: "1000px",
            "& span.MuiTabs-indicator": {
              height: "80%",
              backgroundColor: "info.main",
              color: "#fff",
              my: 0.7,
            },
            "& .MuiButtonBase-root.Mui-selected": {
              // backgroundColor: "info.main",
              color: "#fff !important",
              my: 1.5,
            },
          }}
        >
          {tabsArr.map((item, index) => (
            <Tab
              key={`${item.label}_${index}`}
              label={item.label}
              {...a11yProps(index)}
              sx={{ fontSize: "small", whiteSpace: "nowrap" }}
            />
          ))}
        </Tabs>
      </AppBar>
      {tabsArr.map(({ TabPanelItem }, index) => (
        <TabPanel key={index} value={value} index={index} dir={theme.direction}>
          <TabPanelItem />
        </TabPanel>
      ))}
    </Box>
  );
}
