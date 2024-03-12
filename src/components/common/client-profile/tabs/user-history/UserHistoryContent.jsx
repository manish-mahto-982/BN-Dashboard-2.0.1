import React from "react";
import MDBox from "src/components/theme/common/MDBox";
import TimelineItem from "src/components/theme/layout/Timeline/TimelineItem";

const UserHistoryContent = () => {
  return (
    <MDBox p={2}>
      <TimelineItem
        color="success"
        icon="notifications"
        title="$2400, Design changes"
        dateTime="22 DEC 7:20 PM"
      />
      <TimelineItem
        color="error"
        icon="inventory_2"
        title="New order #1832412"
        dateTime="21 DEC 11 PM"
      />
      <TimelineItem
        color="info"
        icon="shopping_cart"
        title="Server payments for April"
        dateTime="21 DEC 9:34 PM"
      />
      <TimelineItem
        color="warning"
        icon="payment"
        title="New card added for order #4395133"
        dateTime="20 DEC 2:20 AM"
      />
      <TimelineItem
        color="primary"
        icon="vpn_key"
        title="New card added for order #4395133"
        dateTime="18 DEC 4:54 AM"
        lastItem
      />
    </MDBox>
  );
};

export default UserHistoryContent;
