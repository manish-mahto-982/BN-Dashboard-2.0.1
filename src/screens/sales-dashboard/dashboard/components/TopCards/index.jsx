import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import { Menu, MenuItem, Typography } from "@mui/material";
import MDBox from "src/components/theme/common/MDBox";
import MDTypography from "src/components/theme/common/MDTypography";

function TopCards({ color, title, count, percentage, icon }) {
  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-4}
          // #4343ad
        >
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </MDBox>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="h5">{count}</MDTypography>
        </MDBox>
      </MDBox>
      <Divider />
      <MDBox height="7rem">
        {percentage.label && percentage.counter !== undefined && (
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>{percentage.label}</span>
            <MDTypography variant="h5" color="dark">
              {percentage.counter}
            </MDTypography>
          </MenuItem>
        )}
        {percentage.label1 && percentage.counter1 !== undefined && (
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {percentage.label1}
            <MDTypography variant="h5" color="dark">
              {percentage.counter1}
            </MDTypography>
          </MenuItem>
        )}
        {percentage.label2 && percentage.counter2 !== undefined && (
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {percentage.label2}
            <MDTypography variant="h5" color="dark">
              {percentage.counter2}
            </MDTypography>
          </MenuItem>
        )}
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of TopCards
TopCards.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the TopCards
TopCards.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "dark",
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
      "dark",
      "dark",
      "white",
    ]),
    counter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    counter1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label1: PropTypes.string,
    counter2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label2: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};

export default TopCards;
