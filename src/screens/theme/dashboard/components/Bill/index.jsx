

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "src/components/theme/common/MDBox";
import MDTypography from "src/components/theme/common/MDTypography";
import MDButton from "src/components/theme/common/MDButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "src/context";

function Bill({ name, company, email, vat, noGutter }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <MDBox width="100%" display="flex" flexDirection="column">
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <MDTypography
            variant="button"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {name}
          </MDTypography>

          <MDBox
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
          >
            <MDBox mr={1}>
              <MDTypography variant="h6" gutterBottom textAlign="center">
                Actions
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
          <MDTypography variant="caption" color="text" alignItems="left">
            Follow Up:&nbsp;&nbsp;&nbsp;
          </MDTypography>
          <MDTypography
            variant="caption"
            fontWeight="medium"
            textTransform="capitalize"
          >
            0 | 0
          </MDTypography>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
          <MDTypography variant="caption" color="text" alignItems="left">
            Follow Up:&nbsp;&nbsp;&nbsp;
          </MDTypography>
          <MDTypography
            variant="caption"
            fontWeight="medium"
            textTransform="capitalize"
          >
            0 | 0
          </MDTypography>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
          <MDTypography variant="caption" color="text" alignItems="left">
            Follow Up:&nbsp;&nbsp;&nbsp;
          </MDTypography>
          <MDTypography
            variant="caption"
            fontWeight="medium"
            textTransform="capitalize"
          >
            0 | 0
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Bill;
