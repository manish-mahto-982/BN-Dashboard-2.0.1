

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
function LeadStage() {
  return (
    <Card sx={{ height: "250px" }}>
      <MDBox
        variant="gradient"
        bgColor="warning"
        borderRadius="lg"
        coloredShadow="success"
        mx={4}
        mt={-2}
        p={1}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h6" fontWeight="medium" color="white">
          Stage
        </MDTypography>
      </MDBox>
      <MDBox pt={4} pb={3}>
        <MDBox>
          <MenuList>
            <MenuItem>
              <ListItemText>
                <MDTypography variant="h6" fontWeight="light" color="text">
                  Stage1
                </MDTypography>
              </ListItemText>
              <Typography variant="h6" color="text">
                12 | 24
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemText>
                <MDTypography variant="h6" fontWeight="light" color="text">
                  Stage2
                </MDTypography>
              </ListItemText>
              <Typography variant="h6" color="text">
                21 | 34
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemText>
                <MDTypography variant="h6" fontWeight="light" color="text">
                  Stage3
                </MDTypography>
              </ListItemText>
              <Typography variant="h6" color="text">
                32 | 44
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemText>
                <MDTypography variant="h6" fontWeight="light" color="text">
                  Stage4
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

export default LeadStage;
