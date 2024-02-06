import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MDBox from "src/components/theme/common//MDBox";
import MDTypography from "src/components/theme/common//MDTypography";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

function Stage({ color, title, count, percentage, icon }) {
  return (
    <Card sx={{ height: "300px" }}>
      <MDBox display="flex" justifyContent="center" pt={1} px={2}>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Stage - 5921
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
                Stage1
              </MDTypography>
            </ListItemText>
            <Typography variant="h6" color="text">
              78
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <MDTypography variant="h6" fontWeight="light" color="text">
                Stage2
              </MDTypography>
            </ListItemText>
            <Typography variant="h6" color="text">
              3116
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <MDTypography variant="h6" fontWeight="light" color="text">
                Stage3
              </MDTypography>
            </ListItemText>
            <Typography variant="h6" color="text">
              124
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <MDTypography variant="h6" fontWeight="light" color="text">
                Stage4
              </MDTypography>
            </ListItemText>
            <Typography variant="h6" color="text">
              124
            </Typography>
          </MenuItem>
        </MenuList>
      </MDBox>
    </Card>
  );
}

Stage.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

Stage.propTypes = {
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

export default Stage;
