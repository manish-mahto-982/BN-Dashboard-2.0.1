import * as React from "react";
import PropTypes from "prop-types";
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
      sx={{ bgcolor: "background.main", borderRadius: "12px", marginTop: 8 }}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
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

export default function FullWidthTabs({ handleAddWallet }) {
  const theme = useTheme();

  const [value, setValue] = React.useState(1);

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
          <Tab
            label="User Credentials"
            {...a11yProps(0)}
            sx={{ fontSize: "small", whiteSpace: "nowrap" }}
          />
          <Tab
            sx={{ fontSize: "small" }}
            label="Assessment Details"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontSize: "small" }}
            label="ICL Details"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ fontSize: "small" }}
            label="All Trackers"
            {...a11yProps(3)}
          />
          <Tab
            sx={{ fontSize: "small" }}
            label="All Weight Details"
            {...a11yProps(4)}
          />
          <Tab
            sx={{ fontSize: "small" }}
            label="Mentor Chat"
            {...a11yProps(5)}
          />
          <Tab
            sx={{ fontSize: "small" }}
            label="Notification Sent"
            {...a11yProps(6)}
          />
          <Tab
            sx={{ fontSize: "small" }}
            label="Feedback Received"
            {...a11yProps(7)}
          />
          <Tab
            sx={{ fontSize: "small" }}
            label="Wallet Statement"
            {...a11yProps(8)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <React.Suspense
          fallback={<div className="p-2 text-center text-sm">Loading...</div>}
        >
          <UserAccordion />
        </React.Suspense>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <React.Suspense
          fallback={<div className="p-2 text-center text-sm">Loading...</div>}
        >
          <AssessmentContent />
        </React.Suspense>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <React.Suspense fallback={"loading..."}>
          <ICLContent />
        </React.Suspense>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <TrackerContent theme={theme} />
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <WeightDetailsContent theme={theme} />
      </TabPanel>
      <TabPanel value={value} index={5} dir={theme.direction}>
        <MentorChatsNew />
      </TabPanel>
      <TabPanel value={value} index={6} dir={theme.direction}>
        <NotificationSentContent />
      </TabPanel>
      <TabPanel value={value} index={7} dir={theme.direction}>
        <FeedbackContent />
      </TabPanel>
      <TabPanel value={value} index={8} dir={theme.direction}>
        <WalletStatementContent
          theme={theme}
          handleAddWallet={handleAddWallet}
        />
      </TabPanel>
    </Box>
  );
}
