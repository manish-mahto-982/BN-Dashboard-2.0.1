import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useMaterialUIController } from "src/context";

function IncentiveSystem() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card id="delete-account">
      <MDBox
        pt={1}
        px={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <MDTypography variant="h6" fontWeight="medium">
          Incentive System
        </MDTypography>
      </MDBox>
      <MDBox p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <MDBox
              borderRadius="lg"
              justifyContent="center"
              alignItems="center"
              bgColor={darkMode ? "transparent" : "grey-100"}
              p={2}
              minHeight={130}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <MDTypography variant="h5" fontWeight="medium" textAlign="center">
                Incentive
              </MDTypography>
              <MDTypography
                variant="h6"
                fontWeight="regular"
                color="text"
                textAlign="center"
              >
                Cut off 3500000 for Due (payout)
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MDBox
              borderRadius="lg"
              justifyContent="center"
              alignItems="center"
              bgColor={darkMode ? "transparent" : "grey-100"}
              p={2}
              minHeight={130}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <MDTypography variant="h5" fontWeight="medium" textAlign="center">
                Actual Earned
              </MDTypography>
              <MDTypography
                variant="h6"
                fontWeight="regular"
                color="text"
                textAlign="center"
              >
                Total Collection = 0 (Excluding Tax) INCENTIVE = RS. 0
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MDBox
              borderRadius="lg"
              justifyContent="center"
              alignItems="center"
              bgColor={darkMode ? "transparent" : "grey-100"}
              p={2}
              minHeight={130}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <MDTypography variant="h5" fontWeight="medium" textAlign="center">
                Due (Payout)
              </MDTypography>
              <MDTypography
                variant="h6"
                fontWeight="regular"
                color="text"
                textAlign="center"
              >
                0 | 0
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default IncentiveSystem;
