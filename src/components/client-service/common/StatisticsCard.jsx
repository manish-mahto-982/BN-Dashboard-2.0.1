// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "src/components/theme/common/MDBox";
import MDTypography from "src/components/theme/common/MDTypography";
import MDButton from "src/components/theme/common/MDButton";

function StatisticsCard({
  color,
  title,
  count,
  percentage,
  icon,
  handleButtonClick,
  coloredShadow = true,
}) {
  return (
    <Card
      component={"button"}
      onClick={handleButtonClick}
      sx={[
        {
          zIndex: 10,
          cursor: "pointer",
          width: "100%",
          "&:hover": { boxShadow: "none" },
        },
        {
          "&:before": {
            content: "''",
            position: "absolute",
            left: 0,
            top: 0,
            borderRadius: 3,
            opacity: 0.12,
            height: "100%",
            width: "100%",
            zIndex: -100,
          },
        },
        // {
        //   "&:hover:before": {
        //     bgcolor: `${"info"}.main`,
        //   },
        // },
      ]}
    >
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={coloredShadow ? color : "unset"}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </MDBox>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography color={"dark"} variant="h5">
            {count}
          </MDTypography>
        </MDBox>
      </MDBox>
      <Divider />
      <MDBox pb={2} px={2}>
        <MDTypography
          component="p"
          variant="button"
          color="dark"
          display="flex"
          textAlign={"left"}
        >
          {title}
        </MDTypography>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of StatisticsCard
StatisticsCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the StatisticsCard
StatisticsCard.propTypes = {
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

export default StatisticsCard;
