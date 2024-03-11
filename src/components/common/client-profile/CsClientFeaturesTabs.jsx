import React from "react";

import NotificationSentContent from "./tabs/notification-received/NotificationSentContent";
const ICLContent = React.lazy(() => import("./tabs/ICL/ICLContent"));
import TrackerContent from "./tabs/trackers/TrackerContent";
import WeightDetailsContent from "./tabs/weight-details/WeightDetailsContent";
import FeedbackContent from "./tabs/feedback/FeedbackContent";
import WalletStatementContent from "./tabs/wallet-statement/WalletStatementContent";
import MentorChats from "./tabs/mentor-chats/MentorChats";
import MentorChatsNew from "./tabs/mentor-chats/MetorChatsNew";
import { useMaterialUIController } from "src/context";
import { LinearProgress, Skeleton, useTheme } from "@mui/material";
import MDBox from "src/components/theme/common/MDBox";
import FullWidthTabs from "./FullWidthTabs";
const UserAccordion = React.lazy(() => import("./UserAccordion"));
const AssessmentContent = React.lazy(
  () => import("./tabs/assessment/AssessmentContent"),
);

const CsClientFeaturesTabs = ({ handleAddWallet }) => {
  const theme = useTheme();
  const tabsArr = [
    {
      label: "User Credentials",
      TabPanelItem: () => (
        <React.Suspense
          fallback={<div className="p-2 text-center text-sm">Loading...</div>}
        >
          <UserAccordion />
        </React.Suspense>
      ),
    },
    {
      label: "Assessment Details",
      TabPanelItem: () => (
        <React.Suspense
          fallback={<div className="p-2 text-center text-sm">Loading...</div>}
        >
          <AssessmentContent />
        </React.Suspense>
      ),
    },
    {
      label: "All Trackers",
      TabPanelItem: () => <TrackerContent theme={theme} />,
    },
    {
      label: "All Weight Details",
      TabPanelItem: () => <WeightDetailsContent theme={theme} />,
    },
    {
      label: "Mentor Chat",
      TabPanelItem: () => <MentorChatsNew />,
    },
    {
      label: "Notification Sent",
      TabPanelItem: () => <NotificationSentContent />,
    },
    {
      label: "Feedback Received",
      TabPanelItem: () => <FeedbackContent />,
    },
    {
      label: "Wallet Statement",
      TabPanelItem: () => (
        <WalletStatementContent
          theme={theme}
          handleAddWallet={handleAddWallet}
        />
      ),
    },
  ];
  return <FullWidthTabs tabsArr={tabsArr} theme={theme} />;
};

export default CsClientFeaturesTabs;

const tabsArr = [
  { label: "User Credentials" },
  { label: "Assessment Details" },
  { label: "ICL Details" },
  { label: "All Trackers" },
  { label: "All Weight Details" },
  { label: "Mentor Chat" },
  { label: "Notification Sent" },
  { label: "Feedback Received" },
  { label: "Wallet Statement" },
];
