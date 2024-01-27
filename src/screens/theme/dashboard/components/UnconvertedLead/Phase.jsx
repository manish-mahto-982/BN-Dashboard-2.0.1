

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

function Phase({ color, title, count, percentage, icon }) {
  return (
    <Card sx={{ height: "300px" }}>
      <MDBox display="flex" justifyContent="center" pt={1} px={2}>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Phase - 5921
          </MDTypography>
          <MDTypography variant="h4">{count}</MDTypography>
        </MDBox>
      </MDBox>
      <Divider />
      <MDBox>
        <MenuList>
          <MenuItem>
            <ListItemText>
              <MDTypography variant="h6" fontWeight="light" color="text">
                Phase1
              </MDTypography>
            </ListItemText>
            <Typography variant="h6" color="text">
              78
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <MDTypography variant="h6" fontWeight="light" color="text">
                Phase2
              </MDTypography>
            </ListItemText>
            <Typography variant="h6" color="text">
              16
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <MDTypography variant="h6" fontWeight="light" color="text">
                Phase3
              </MDTypography>
            </ListItemText>
            <Typography variant="h6" color="text">
              14
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <MDTypography variant="h6" fontWeight="light" color="text">
                Phase4
              </MDTypography>
            </ListItemText>
            <Typography variant="h6" color="text">
              14
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <MDTypography variant="h6" fontWeight="light" color="error">
                Upgraded to phase3
              </MDTypography>
            </ListItemText>
            <Typography variant="h6" color="text">
              14
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <MDTypography variant="h6" fontWeight="light" color="error">
                Upgraded to phase4
              </MDTypography>
            </ListItemText>
            <Typography variant="h6" color="text">
              17
            </Typography>
          </MenuItem>
        </MenuList>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of Phase
Phase.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the Phase
Phase.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};

export default Phase;
