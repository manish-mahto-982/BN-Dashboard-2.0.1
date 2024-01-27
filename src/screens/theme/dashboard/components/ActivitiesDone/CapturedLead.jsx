

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
function CapturedLead() {
  return (
    <Card sx={{ height: "250px" }}>
      <MDBox
        variant="gradient"
        bgColor="error"
        borderRadius="lg"
        coloredShadow="success"
        mx={4}
        mt={-2}
        p={1}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h6" fontWeight="medium" color="white">
          Captured Lead
        </MDTypography>
      </MDBox>
      <MDBox pt={4} pb={3}>
        <MDBox>
          <MenuList>
            <MenuItem>
              <ListItemText>
                <MDTypography
                  variant="h2"
                  fontWeight="dark"
                  color="text"
                  textAlign="center"
                >
                  12 | 24
                </MDTypography>
              </ListItemText>
            </MenuItem>
          </MenuList>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default CapturedLead;
