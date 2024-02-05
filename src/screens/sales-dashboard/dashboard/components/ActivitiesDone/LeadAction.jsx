import * as React from "react";
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "src/components/theme/common//MDBox";
import MDTypography from "src/components/theme/common//MDTypography";
import MDInput from "src/components/theme/common//MDInput";
import MDButton from "src/components/theme/common//MDButton";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import MTDPopover from "src/components/theme/common//MTDPopover";
function LeadAction() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Card sx={{ height: "250px" }}>
      <MDBox
        variant="gradient"
        bgColor="primary"
        borderRadius="lg"
        coloredShadow="success"
        mx={4}
        mt={-2}
        p={1}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h6" fontWeight="medium" color="white">
          Actions
        </MDTypography>
      </MDBox>
      <MDBox pt={4} pb={3}>
        <MDBox>
          <MenuList>
            <MenuItem>
              <ListItemText>
                <MDTypography variant="h6" fontWeight="light" color="text">
                  Follow Up
                </MDTypography>
              </ListItemText>
              <Typography variant="h6" color="text">
                12 | 24
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemText>
                <MDTypography variant="h6" fontWeight="light" color="text">
                  Consultation
                </MDTypography>
              </ListItemText>
              <Typography
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                variant="h6"
                color="text"
              >
                21 | 34
              </Typography>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                  backgroundColor: "primary",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <MTDPopover content="Dynamic Content" />
              </Popover>
            </MenuItem>
            <MenuItem>
              <ListItemText>
                <MDTypography variant="h6" fontWeight="light" color="text">
                  Action Assigned
                </MDTypography>
              </ListItemText>
              <Typography variant="h6" color="text">
                32 | 44
              </Typography>
            </MenuItem>
          </MenuList>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default LeadAction;


// // react-router-dom components
// import * as React from "react";
// import { Link } from "react-router-dom";

// // @mui material components
// import Card from "@mui/material/Card";
// import Checkbox from "@mui/material/Checkbox";

// // Material Dashboard 2 React components
// import MDBox from "src/components/theme/common//MDBox";
// import MDTypography from "src/components/theme/common//MDTypography";
// import MDInput from "src/components/theme/common//MDInput";
// import MDButton from "src/components/theme/common//MDButton";

// // Images
// import bgImage from "assets/images/bg-sign-up-cover.jpeg";
// import Divider from "@mui/material/Divider";
// import MenuList from "@mui/material/MenuList";
// import MenuItem from "@mui/material/MenuItem";
// import ListItemText from "@mui/material/ListItemText";
// import Typography from "@mui/material/Typography";
// import Popover from "@mui/material/Popover";
// import MTDPopover from "src/components/theme/common//MTDPopover";
// function LeadAction() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handlePopoverOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   return (
//     <Card sx={{ height: "250px" }}>
//       <MDBox
//         variant="gradient"
//         bgColor="primary"
//         borderRadius="lg"
//         coloredShadow="success"
//         mx={4}
//         mt={-2}
//         p={1}
//         mb={1}
//         textAlign="center"
//       >
//         <MDTypography variant="h6" fontWeight="medium" color="white">
//           Actions
//         </MDTypography>
//       </MDBox>
//       <MDBox pt={4} pb={3}>
//         <MDBox>
//           <MenuList>
//             <MenuItem>
//               <ListItemText>
//                 <MDTypography variant="h6" fontWeight="light" color="text">
//                   Follow Up
//                 </MDTypography>
//               </ListItemText>
//               <Typography variant="h6" color="text">
//                 12 | 24
//               </Typography>
//             </MenuItem>
//             <MenuItem>
//               <ListItemText>
//                 <MDTypography variant="h6" fontWeight="light" color="text">
//                   Consultation
//                 </MDTypography>
//               </ListItemText>
//               <Typography
//                 aria-owns={open ? "mouse-over-popover" : undefined}
//                 aria-haspopup="true"
//                 onMouseEnter={handlePopoverOpen}
//                 onMouseLeave={handlePopoverClose}
//                 variant="h6"
//                 color="text"
//               >
//                 21 | 34
//               </Typography>
//               <Popover
//                 id="mouse-over-popover"
//                 sx={{
//                   pointerEvents: "none",
//                   backgroundColor: "primary",
//                 }}
//                 open={open}
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 onClose={handlePopoverClose}
//                 disableRestoreFocus
//               >
//                 <MTDPopover content="Dynamic Content" />
//               </Popover>
//             </MenuItem>
//             <MenuItem>
//               <ListItemText>
//                 <MDTypography variant="h6" fontWeight="light" color="text">
//                   Action Assigned
//                 </MDTypography>
//               </ListItemText>
//               <Typography variant="h6" color="text">
//                 32 | 44
//               </Typography>
//             </MenuItem>
//           </MenuList>
//         </MDBox>
//       </MDBox>
//     </Card>
//   );
// }

// export default LeadAction;
