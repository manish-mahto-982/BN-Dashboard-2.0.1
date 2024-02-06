import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import LastDeviceTabContent from "./tabs/user-cendentials/LastDeviceTabContent";
import OrderHistoryContent from "./tabs/user-cendentials/OrderHistoryContent";
import ClientAppAccessContent from "./tabs/user-cendentials/ClientAppAccessContent";
import ClientExtendedValidityContent from "./tabs/user-cendentials/ClientExtendedValidityContent";
import UserStatusContent from "./tabs/user-cendentials/UserStatusContent";
import MDTypography from "src/components/theme/common/MDTypography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid divider.main`,
  "&:is(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
  backgroundColor:'white'
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'background.default',
  // theme.palette.mode === "dark"
  //   ? "rgba(255, 255, 255, .05)"
  //   : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function UserAccordion() {
  const [expanded, setExpanded] = React.useState("panel1");
  const theme = useTheme();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div
      style={{
        borderRadius: `${12}px`,
        overflow: "hidden",
        border: `1px solid ${theme.palette.divider}`,
      
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      
      >
        <AccordionSummary sx aria-controls="panel1d-content" id="panel1d-header">
          <MDTypography fontSize={'small'} fontWeight={'medium'}>Last Device</MDTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={(theme) => ({ bgcolor: 'background.default' })}
        >
          <LastDeviceTabContent />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <MDTypography fontSize={'small'} fontWeight={'medium'}>Order History</MDTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={(theme) => ({ bgcolor: 'background.default' })}
        >
          <OrderHistoryContent />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <MDTypography fontSize={'small'} fontWeight={'medium'}>Client App Access</MDTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={(theme) => ({ bgcolor: 'background.default' })}
        >
         <ClientAppAccessContent/>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <MDTypography fontSize={'small'} fontWeight={'medium'}>Client Extended Validity</MDTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={(theme) => ({ bgcolor: 'background.default' })}
        >
         <ClientExtendedValidityContent/>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <MDTypography fontSize={'small'} fontWeight={'medium'}>User Status</MDTypography>
        </AccordionSummary>
        <AccordionDetails
          sx={(theme) => ({ bgcolor: 'background.default' })}
        >
         <UserStatusContent theme={theme}/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
