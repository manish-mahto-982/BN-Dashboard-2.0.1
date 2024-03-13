import React from "react";

import WeightDetailsContent from "src/components/common/client-profile/tabs/weight-details/WeightDetailsContent";
import FeedbackContent from "src/components/common/client-profile/tabs/feedback/FeedbackContent";
import WalletStatementContent from "src/components/common/client-profile/tabs/wallet-statement/WalletStatementContent";
import MentorChatsNew from "src/components/common/client-profile/tabs/mentor-chats/MetorChatsNew";
import { useMaterialUIController } from "src/context";
import { LinearProgress, Skeleton, useTheme } from "@mui/material";
import MDBox from "src/components/theme/common/MDBox";
import NotificationSentContent from "src/components/common/client-profile/tabs/notification-received/NotificationSentContent";
import TrackerContent from "src/components/common/client-profile/tabs/trackers/TrackerContent";
import FullWidthTabs from "src/components/common/client-profile/FullWidthTabs";
import SalesPersonalDetailsContent from "src/components/common/client-profile/tabs/sales-personal-details/SalesPersonalDetailsContent";
import UserHistoryContent from "src/components/common/client-profile/tabs/user-history/UserHistoryContent";
import CouponContent from "src/components/common/client-profile/tabs/coupon-discount/CouponContent";
const AssessmentContent = React.lazy(
  () =>
    import(
      "src/components/common/client-profile/tabs/assessment/AssessmentContent"
    ),
);

const SalesFeatureTabs = ({ handleAddWallet }) => {
  const theme = useTheme();

  const tabsArr = [
    {
      label: "User History",
      TabPanelItem: () => (
        <React.Suspense
          fallback={<div className="p-2 text-center text-sm">Loading...</div>}
        >
          <UserHistoryContent />
        </React.Suspense>
      ),
    },
    {
      label: "Personal Details",
      TabPanelItem: () => (
        <React.Suspense
          fallback={<div className="p-2 text-center text-sm">Loading...</div>}
        >
          <SalesPersonalDetailsContent />
        </React.Suspense>
      ),
    },
    {
      label: "Coupon / Discount",
      TabPanelItem: () => <CouponContent />,
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

export default SalesFeatureTabs;
