
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

import { useTheme } from "@mui/material";
import HighPotential from "./HighPotential";
import DueTomorrow from "./DueTomorrow";
import MDButton from "src/components/theme/common//MDButton";
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
            // padding: "10px",
            // fontSize: "14px", // Adjust margin
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
          <MenuItem onClick={() => handleLeadToCaptureChange("potential")}>
            High Potential
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "13px" }}
            >
              6
            </MDButton>
          </MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange("segment")}>
            Prime Segment
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "7px" }}
            >
              2
            </MDButton>
          </MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange("hs")}>
            HS Taken
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "45px" }}
            >
              22
            </MDButton>
          </MenuItem>
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
            // padding: "10px",
            // fontSize: "14px", // Adjust margin
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
          <MenuItem onClick={() => handleLeadToCaptureChange("tomorrow")}>
            Due Tomorrow
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "13px" }}
            >
              16
            </MDButton>
          </MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange("today")}>
            Due Today
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "40px" }}
            >
              14
            </MDButton>
          </MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange("overdue")}>
            Overdue
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "55px" }}
            >
              11
            </MDButton>
          </MenuItem>
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
            // padding: "10px",
            // fontSize: "14px", // Adjust margin
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
          <MenuItem onClick={() => handleLeadToCaptureChange("fu misses")}>
            FU Misses
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "70px" }}
            >
              14
            </MDButton>
          </MenuItem>
          <MenuItem
            onClick={() => handleLeadToCaptureChange("consultation misses")}
          >
            Consultation Misses
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "5px" }}
            >
              16
            </MDButton>
          </MenuItem>
          <MenuItem
            onClick={() => handleLeadToCaptureChange("update lead details")}
          >
            Update Lead Details
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "10px" }}
            >
              6
            </MDButton>
          </MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange("todays fu")}>
            Todays FU
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "75px" }}
            >
              45
            </MDButton>
          </MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange("assigned lead")}>
            Assigned Lead
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "50px" }}
            >
              5
            </MDButton>
          </MenuItem>
          <MenuItem
            onClick={() => handleLeadToCaptureChange("assigned action")}
          >
            Assigned Action
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "40px" }}
            >
              2
            </MDButton>
          </MenuItem>
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
            // padding: "10px",
            // fontSize: "14px", // Adjust margin
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
          <MenuItem onClick={() => handleLeadToCaptureChange("rate shared")}>
            Rate Shared
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "90px" }}
            >
              32
            </MDButton>
          </MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange("link shared")}>
            Link Shared{" "}
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "90px" }}
            >
              8
            </MDButton>
          </MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange("checkout visit")}>
            Checkout Visit{" "}
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "75px" }}
            >
              7
            </MDButton>
          </MenuItem>
          <MenuItem
            onClick={() => handleLeadToCaptureChange("high frequent user")}
          >
            High Frequency Page Visit{" "}
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "5px" }}
            >
              45
            </MDButton>
          </MenuItem>
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
            // padding: "10px",
            // fontSize: "14px", // Adjust margin
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
          <MenuItem onClick={() => handleLeadToCaptureChange("links expiring")}>
            Links Expiring
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "30px" }}
            >
              11
            </MDButton>
          </MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange("hot trigger")}>
            Hot Trigger{" "}
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "50px" }}
            >
              2
            </MDButton>
          </MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange("warm trigger")}>
            Warm Trigger{" "}
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "35px" }}
            >
              4
            </MDButton>
          </MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange("no fu set")}>
            No FU Set{" "}
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "60px" }}
            >
              23
            </MDButton>
          </MenuItem>
          <MenuItem onClick={() => handleLeadToCaptureChange("phase4 lead")}>
            Phase4 Leads{" "}
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "30px" }}
            >
              121
            </MDButton>
          </MenuItem>
          <MenuItem
            onClick={() => handleLeadToCaptureChange("to engaged lead")}
          >
            To Engaged Lead{" "}
            <MDButton
              variant="outlined"
              color="error"
              size="small"
              sx={{ marginLeft: "10px" }}
            >
              5
            </MDButton>
          </MenuItem>
        </Menu>
      </Grid>

      {/* Render content based on selected options */}

      {selectedLeadToCapture === "potential" && (
        <Grid item xs={12} md={12} ld={12} sx={{ mt: 2.25 }}>
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
