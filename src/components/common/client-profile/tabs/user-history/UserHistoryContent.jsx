import React from "react";
import MDBox from "src/components/theme/common/MDBox";
import TimelineItem from "src/components/theme/layout/Timeline/TimelineItem";

const UserHistoryContent = () => {
  // Array of timeline items
  const timelineItemsData = [
    {
      color: "success",
      icon: "notifications",
      title: "Your BN Health Score Result   ",
      dateTime: "22 DEC 7:20 PM",
    },
    {
      color: "error",
      icon: "inventory_2",
      title: "consultation ",
      dateTime: "21 DEC 11 PM",
    },
    {
      color: "info",
      icon: "shopping_cart",
      title: "Your BN Health Score Result",
      dateTime: "21 DEC 9:34 PM",
    },
    {
      color: "warning",
      icon: "payment",
      title: "Source: Your BN Health Score Resul",
      dateTime: "20 DEC 2:20 AM",
    },
    {
      color: "primary",
      icon: "vpn_key",
      title: "Lead Assign to : user ",
      dateTime: "18 DEC 4:54 AM",
      lastItem: true,
    },
  ];

  return (
    <MDBox p={2}>
      {timelineItemsData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </MDBox>
  );
};

export default UserHistoryContent;
