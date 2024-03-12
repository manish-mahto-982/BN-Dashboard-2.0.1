// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "src/components/theme/common/MDBox";
import MDTypography from "src/components/theme/common/MDTypography";

// Timeline context
import { useTimeline } from "src/components/theme/layout/Timeline/context";

// Custom styles for the TimelineItem
import timelineItem from "src/components/theme/layout/Timeline/TimelineItem/styles";
import { Box } from "@mui/material";

function TimelineItem({ color, icon, title, dateTime, description, lastItem }) {
  const isDark = useTimeline();

  return (
    <MDBox
      position="relative"
      mb={3}
      sx={(theme) => timelineItem(theme, { lastItem, isDark })}
    >
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={"primary"}
        color="white"
        width="1rem"
        height="1rem"
        borderRadius="50%"
        position="absolute"
        top="42%"
        left="0.6rem"
        zIndex={2}
        sx={{
          fontSize: ({ typography: { size } }) => size.sm,
          // border: "1px solid red",
          transform: "translateY(-50%)",
        }}
      ></MDBox>
      <MDBox
        ml={5.75}
        pt={description ? 0.7 : 0.5}
        lineHeight={0}
        maxWidth="30rem"
      >
        <MDTypography
          variant="button"
          fontWeight="medium"
          color={isDark ? "white" : "dark"}
        >
          {title}
        </MDTypography>
        <MDBox mt={0.5}>
          <MDTypography variant="caption" color={isDark ? "secondary" : "text"}>
            {dateTime}
          </MDTypography>
        </MDBox>
        <MDBox mt={2} mb={1.5}>
          {description ? (
            <MDTypography variant="button" color={isDark ? "white" : "dark"}>
              {description}
            </MDTypography>
          ) : null}
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
  color: "info",
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  lastItem: PropTypes.bool,
};

export default TimelineItem;
