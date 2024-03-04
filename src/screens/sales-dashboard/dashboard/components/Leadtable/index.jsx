import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import HighPotential from "src/components/sales/dashboard/HighPotential";
// import PrimeSegment from "src/components/sales/dashboard/PrimeSegment";
// import HStaken from "src/components/sales/dashboard/HStaken";
// import DueTomorrow from "src/components/sales/dashboard/DueTomorrow";
// import DueToday from "src/components/sales/dashboard/DueToday";
// import Overdue from "src/components/sales/dashboard/Overdue";
// import FUMisses from "src/components/sales/dashboard/FUMisses";
// import ConsultationMisses from "src/components/sales/dashboard/ConsultationMisses";
// import UpdateLeadDetails from "src/components/sales/dashboard/UpdateLeadDetails";
// import TodaysFU from "src/components/sales/dashboard/TodaysFU";
// import AssignedAction from "src/components/sales/dashboard/AssignedAction";
// import AssignedLead from "src/components/sales/dashboard/AssignedLead";
// import RateShared from "src/components/sales/dashboard/RateShared";
// import LinkShared from "src/components/sales/dashboard/LinkShared";
// import CheckoutVisit from "src/components/sales/dashboard/CheckoutVisit";
// import FrequentPageVisit from "src/components/sales/dashboard/FrequentPageVisit";
// import LinksExpiring from "src/components/sales/dashboard/LinksExpiring";
// import HotTrigger from "src/components/sales/dashboard/HotTrigger";
// import WarmTrigger from "src/components/sales/dashboard/WarmTrigger";
// import NoFUSet from "src/components/sales/dashboard/NoFUSet";
// import Phase4Lead from "src/components/sales/dashboard/Phase4Lead";
// import ToEngagedLead from "src/components/sales/dashboard/ToEngagedLead";

import { Typography, useTheme } from "@mui/material";
import HighPotential from "./HighPotential";
import DueTomorrow from "./DueTomorrow";
// import AddLead from "examples/Navbars/DashboardNavbar/TopbarPopup/AddLead";
// import ConsultationBooked from "examples/Navbars/DashboardNavbar/TopbarPopup/ConsultationBooked";
// import MDTypography from "components/MDTypography";
// import MDBox from "components/MDBox";
// import MDButton from "components/MDButton";
import FUMissed from "./FUMissed";
import ConsultationMissed from "./ConsultationMissed";
import UpdateLeadDetails from "./UpdateLeadDetails";
import RateShared from "./RateShared";
import PrimeSegment from "./PrimeSegment";
import HSTaken from "./HSTaken";
import DueToday from "./DueToday";
import Overdue from "./Overdue";
import LinkShared from "./LinkShared";
import CheckoutVisited from "./CheckoutVisited";
import HighFrequencyPageVisit from "./HighFrequencyPageVisit";
import AssignedLead from "./AssignedLead";
import AssignedAction from "./AssignedAction";
import TodaysFU from "./TodaysFU";
import OtherLead from "../OtherLead";
import MDButton from "src/components/theme/common/MDButton";
// import OtherLead from "./OtherLead";

export default function LeadTable() {
  const theme = useTheme();
  const [selectedLeadToCapture, setSelectedLeadToCapture] =
    useState("potential");
  const [anchorElLeadToCapture, setAnchorElLeadToCapture] = useState(null);

  const [anchorElBalance, setAnchorElBalance] = useState(null);

  const [anchorElMisses, setAnchorElMisses] = useState(null);

  const [anchorElSalesOpportunity, setAnchorElSalesOpportunity] =
    useState(null);

  const [anchorElNeedAttention, setAnchorElNeedAttention] = useState(null);

  const handleLeadToCaptureClick = (event) => {
    setAnchorElLeadToCapture(event.currentTarget);
  };

  const handleBalanceClick = (event) => {
    setAnchorElBalance(event.currentTarget);
  };

  const handleMissesClick = (event) => {
    setAnchorElMisses(event.currentTarget);
  };

  const handleSalesOpportunityClick = (event) => {
    setAnchorElSalesOpportunity(event.currentTarget);
  };

  const handleNeedAttentionClick = (event) => {
    setAnchorElNeedAttention(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElLeadToCapture(null);
    setAnchorElBalance(null);
    setAnchorElMisses(null);
    setAnchorElSalesOpportunity(null);
    setAnchorElNeedAttention(null);
  };

  const handleLeadToCaptureChange = (newStage) => {
    setSelectedLeadToCapture(newStage);
    setAnchorElLeadToCapture(null);
  };

  const menuItemsData = [
    {
      title: "High Potential",
      count: 9,
      onClick: () => handleLeadToCaptureChange("potential"),
    },

    {
      title: "Prime Segment",
      count: 9,
      onClick: () => handleLeadToCaptureChange("segment"),
    },
    {
      title: "HS Taken",
      count: 22,
      onClick: () => handleLeadToCaptureChange("hs"),
    },
    {
      title: "Other",
      count: 9,
      onClick: () => handleLeadToCaptureChange("other"),
    },
  ];

  const menuItemsBalanceData = [
    {
      title: "Due Tomorrow",
      count: 9,
      onClick: () => handleLeadToCaptureChange("tomorrow"),
    },

    {
      title: "Due Today",
      count: 9,
      onClick: () => handleLeadToCaptureChange("today"),
    },
    {
      title: "Overdue",
      count: 9,
      onClick: () => handleLeadToCaptureChange("overdue"),
    },
  ];

  const menuItemsMissesData = [
    {
      title: "FU Misses",
      count: 9,
      onClick: () => handleLeadToCaptureChange("fu misses"),
    },

    {
      title: "Overdue",
      count: 9,
      onClick: () => handleLeadToCaptureChange("overdue"),
    },
    {
      title: "Consultation Misses",
      count: 9,
      onClick: () => handleLeadToCaptureChange("consultation misses"),
    },
    {
      title: "Update Lead Details",
      count: 9,
      onClick: () => handleLeadToCaptureChange("update lead details"),
    },
    {
      title: "Todays FU",
      count: 9,
      onClick: () => handleLeadToCaptureChange("todays fu"),
    },
    {
      title: "assigned lead",
      count: 9,
      onClick: () => handleLeadToCaptureChange("assigned lead"),
    },
    {
      title: "Assigned Action",
      count: 9,
      onClick: () => handleLeadToCaptureChange("assigned action"),
    },
  ];

  const menuItemsOpportunityData = [
    {
      title: "Rate Shared",
      count: 9,
      onClick: () => handleLeadToCaptureChange("rate shared"),
    },
    {
      title: "Link Shared",
      count: 9,
      onClick: () => handleLeadToCaptureChange("link shared"),
    },

    {
      title: "checkout visit",
      count: 9,
      onClick: () => handleLeadToCaptureChange("checkout visit"),
    },

    {
      title: "High Frequency Page Visit",
      count: 9,
      onClick: () => handleLeadToCaptureChange("high frequent user"),
    },
  ];

  const menuItemsAttentionData = [
    {
      title: "Links Expiring",
      count: 9,
      onClick: () => handleLeadToCaptureChange("links expiring"),
    },

    {
      title: "Hot Trigger",
      count: 9,
      onClick: () => handleLeadToCaptureChange("hot trigger"),
    },
    {
      title: "Warm Trigger",
      count: 9,
      onClick: () => handleLeadToCaptureChange("warm trigger"),
    },

    {
      title: "No FU Set",
      count: 9,
      onClick: () => handleLeadToCaptureChange("no fu set"),
    },
    {
      title: "Phase4 Lead",
      count: 9,
      onClick: () => handleLeadToCaptureChange("phase4 lead"),
    },

    {
      title: "To Engaged Lead",
      count: 9,
      onClick: () => handleLeadToCaptureChange("to engaged lead"),
    },
    {
      title: "Wati Response",
      count: 9,
      onClick: () => handleLeadToCaptureChange("wati response"),
    },
  ];

  return (
    <Grid container>
      <Grid item xs={4} lg={2.5} md={2.5}>
        <Button
          onClick={handleLeadToCaptureClick}
          style={{
            color: "white",
            border: "none",
            // background: "transparent",
            backgroundColor: "#6969ff",
            minHeight: "100%", // Adjust the minimum height
            // margin: "2px",
            width: "111%", // Full width on smaller screens
            // maxWidth: "200px", // Limit width on larger screens
            // margin: "8px",
            padding: "15px",
            fontSize: "13px", // Adjust margin
          }}
        >
          Lead To Capture
          <ExpandMoreIcon />
        </Button>
        <Menu
          anchorEl={anchorElLeadToCapture}
          open={Boolean(anchorElLeadToCapture)}
          onClose={handleMenuClose}
        >
          {menuItemsData.map((item, index) => (
            <MenuItemCustom
              key={item.title + index}
              onClick={item.onClick}
              title={item.title}
              count={item.count}
            />
          ))}
        </Menu>
      </Grid>

      <Grid item xs={4} lg={2} md={2}>
        <Button
          onClick={handleBalanceClick}
          style={{
            color: "white",
            border: "none",
            backgroundColor: "#6969ff",
            minHeight: "100%", // Adjust the minimum height
            width: "113%",
            // margin: "2px",
            padding: "15px",

            fontSize: "13px", // Adjust margin
          }}
        >
          Balance
          <ExpandMoreIcon />
        </Button>
        <Menu
          anchorEl={anchorElBalance}
          open={Boolean(anchorElBalance)}
          onClose={handleMenuClose}
        >
          {menuItemsBalanceData.map((item) => (
            <MenuItemCustom
              onClick={item.onClick}
              title={item.title}
              count={item.count}
            />
          ))}
        </Menu>
      </Grid>
      <Grid item xs={4} lg={2.2} md={2.2}>
        <Button
          onClick={handleMissesClick}
          style={{
            color: "white",
            border: "none",
            background: "transparent",
            backgroundColor: "#6969ff",
            minHeight: "100%", // Adjust the minimum height
            // margin: "2px",
            // marginLeft: "16px",
            width: "108%", // Full width on smaller screens
            // maxWidth: "200px", // Limit width on larger screens
            // margin: "8px",
            padding: "15px",

            fontSize: "13px", // Adjust margin
          }}
        >
          To Do/ Misses
          <ExpandMoreIcon />
        </Button>
        <Menu
          anchorEl={anchorElMisses}
          open={Boolean(anchorElMisses)}
          onClose={handleMenuClose}
        >
          {menuItemsMissesData.map((item) => (
            <MenuItemCustom
              onClick={item.onClick}
              title={item.title}
              count={item.count}
            />
          ))}
        </Menu>
      </Grid>

      <Grid item xs={6} lg={2.7} md={2.7}>
        <Button
          onClick={handleSalesOpportunityClick}
          style={{
            color: "white",
            border: "none",
            background: "transparent",
            backgroundColor: "#6969ff",
            minHeight: "100%", // Adjust the minimum height
            // margin: "2px",
            // marginLeft: "16px",
            width: "110%", // Full width on smaller screens
            // maxWidth: "200px", // Limit width on larger screens
            // margin: "8px",
            padding: "15px",

            fontSize: "13px", // Adjust margin
          }}
        >
          Sales Opportunity
          <ExpandMoreIcon />
        </Button>
        <Menu
          anchorEl={anchorElSalesOpportunity}
          open={Boolean(anchorElSalesOpportunity)}
          onClose={handleMenuClose}
        >
          {menuItemsOpportunityData.map((item) => (
            <MenuItemCustom
              onClick={item.onClick}
              title={item.title}
              count={item.count}
            />
          ))}
        </Menu>
      </Grid>

      <Grid item xs={6} lg={2.6} md={2.6}>
        <Button
          onClick={handleNeedAttentionClick}
          style={{
            color: "white",
            border: "none",
            background: "transparent",
            backgroundColor: "#6969ff",
            minHeight: "100%", // Adjust the minimum height
            // margin: "2px",
            // marginLeft: "16px",
            width: "99%", // Full width on smaller screens
            // maxWidth: "200px", // Limit width on larger screens
            // margin: "8px",
            padding: "15px",

            fontSize: "13px", // Adjust margin
          }}
        >
          Need Attention
          <ExpandMoreIcon />
        </Button>
        <Menu
          anchorEl={anchorElNeedAttention}
          open={Boolean(anchorElNeedAttention)}
          onClose={handleMenuClose}
        >
          {menuItemsAttentionData.map((item) => (
            <MenuItemCustom
              onClick={item.onClick}
              title={item.title}
              count={item.count}
            />
          ))}
        </Menu>
      </Grid>

      {/* Render content based on selected options */}

      {selectedLeadToCapture === "potential" && (
        <Grid item xs={12} md={12} ld={12} sx={{ mt: 1 }}>
          <HighPotential />
        </Grid>
      )}
      {selectedLeadToCapture === "segment" && (
        <Grid item xs={12} md={12} ld={12}>
          <PrimeSegment />
        </Grid>
      )}

      {selectedLeadToCapture === "hs" && (
        <Grid item xs={12} md={12} ld={12}>
          <HSTaken />
        </Grid>
      )}

      {selectedLeadToCapture === "other" && (
        <Grid item xs={12} md={12} ld={12} sx={{ mt: 1 }}>
          <OtherLead />
        </Grid>
      )}
      {selectedLeadToCapture === "tomorrow" && (
        <Grid item xs={12} md={12} ld={12}>
          <DueTomorrow />
        </Grid>
      )}
      {selectedLeadToCapture === "today" && (
        <Grid item xs={12} md={12} ld={12}>
          <DueToday />
        </Grid>
      )}

      {selectedLeadToCapture === "overdue" && (
        <Grid item xs={12} md={12} ld={12}>
          <Overdue />
        </Grid>
      )}

      {selectedLeadToCapture === "fu misses" && (
        <Grid item xs={12} md={12} ld={12}>
          <FUMissed />
        </Grid>
      )}

      {selectedLeadToCapture === "consultation misses" && (
        <Grid item xs={12} md={12} ld={12}>
          <ConsultationMissed />
        </Grid>
      )}

      {selectedLeadToCapture === "update lead details" && (
        <Grid item xs={12} md={12} ld={12}>
          <UpdateLeadDetails />
        </Grid>
      )}

      {selectedLeadToCapture === "todays fu" && (
        <Grid item xs={12} md={12} ld={12}>
          <TodaysFU />
        </Grid>
      )}

      {selectedLeadToCapture === "assigned lead" && (
        <Grid item xs={12} md={12} ld={12}>
          <AssignedLead />
        </Grid>
      )}

      {selectedLeadToCapture === "assigned action" && (
        <Grid item xs={12} md={12} ld={12}>
          <AssignedAction />
        </Grid>
      )}

      {selectedLeadToCapture === "rate shared" && (
        <Grid item xs={12} md={12} ld={12}>
          <RateShared />
        </Grid>
      )}
      {selectedLeadToCapture === "link shared" && (
        <Grid item xs={12} md={12} ld={12}>
          <LinkShared />
        </Grid>
      )}
      {selectedLeadToCapture === "checkout visit" && (
        <Grid item xs={12} md={12} ld={12}>
          <CheckoutVisited />
        </Grid>
      )}
      {selectedLeadToCapture === "high frequent user" && (
        <Grid item xs={12} md={12} ld={12}>
          <HighFrequencyPageVisit />
        </Grid>
      )}

      {selectedLeadToCapture === "links expiring" && (
        <Grid item xs={12} md={12} ld={12}>
          {/* <LinksExpiring /> */}
        </Grid>
      )}
      {selectedLeadToCapture === "hot trigger" && (
        <Grid item xs={12} md={12} ld={12}>
          {/* <HotTrigger /> */}
        </Grid>
      )}
      {selectedLeadToCapture === "warm trigger" && (
        <Grid item xs={12} md={12} ld={12}>
          {/* <WarmTrigger /> */}
        </Grid>
      )}
      {selectedLeadToCapture === "no fu set" && (
        <Grid item xs={12} md={12} ld={12}>
          {/* <NoFUSet /> */}
        </Grid>
      )}
      {selectedLeadToCapture === "phase4 lead" && (
        <Grid item xs={12} md={12} ld={12}>
          {/* <Phase4Lead /> */}
        </Grid>
      )}
      {selectedLeadToCapture === "to engaged lead" && (
        <Grid item xs={12} md={12} ld={12}>
          {/* <ToEngagedLead /> */}
        </Grid>
      )}
    </Grid>
  );
}

export const MenuItemCustom = ({ title, count, ...props }) => (
  <MenuItem
    {...props}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Typography fontSize={"15px"}>{title}</Typography>
    <MDButton
      variant="outlined"
      color="error"
      size="small"
      sx={{ marginLeft: "50px", fontSize: "13px" }}
    >
      {count}
    </MDButton>
  </MenuItem>
);
