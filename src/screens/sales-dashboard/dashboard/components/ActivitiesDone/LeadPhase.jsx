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
function LeadPhase() {
  return (
    <Card sx={{ height: "250px" }}>
      <MDBox
        variant="gradient"
        bgColor="success"
        borderRadius="lg"
        coloredShadow="success"
        mx={4}
        mt={-2}
        p={1}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h6" fontWeight="medium" color="white">
          Phase
        </MDTypography>
      </MDBox>
      <MDBox pt={4} pb={3}>
        <MDBox>
          <MenuList>
            <MenuItem>
              <ListItemText>
                <MDTypography variant="h6" fontWeight="light" color="text">
                  Phase1
                </MDTypography>
              </ListItemText>
              <Typography variant="h6" color="text">
                12 | 24
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemText>
                <MDTypography variant="h6" fontWeight="light" color="text">
                  Phase2
                </MDTypography>
              </ListItemText>
              <Typography variant="h6" color="text">
                21 | 34
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemText>
                <MDTypography variant="h6" fontWeight="light" color="text">
                  Phase3
                </MDTypography>
              </ListItemText>
              <Typography variant="h6" color="text">
                32 | 44
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemText>
                <MDTypography variant="h6" fontWeight="light" color="text">
                  Phase4
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

export default LeadPhase;
