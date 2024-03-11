import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import MDBox from "src/components/theme/common//MDBox";
import MDTypography from "src/components/theme/common//MDTypography";
import MDButton from "src/components/theme/common//MDButton";
import { useMaterialUIController } from "src/context";
import { Box } from "@mui/material";

function TotalUnconverted() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Box id="delete-account">
      <MDBox
        pt={2}
        px={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <MDTypography variant="h6" fontWeight="medium">
          Unconverted Lead
        </MDTypography>
      </MDBox>
      <MDBox p={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <MDBox
              borderRadius="lg"
              justifyContent="center"
              alignItems="center"
              p={1}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
               
                backgroundColor: "rgb(255, 19, 102, 0.5)",
              }}
            >
              <MDTypography
                variant="h5"
                fontWeight="medium"
                textAlign="center"
                color="white"
              >
                Total Leads
              </MDTypography>
              <MDTypography
                variant="h5"
                fontWeight="regular"
                color="white"
                textAlign="center"
              >
                1000
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MDBox
              borderRadius="lg"
              justifyContent="center"
              alignItems="center"
              p={1}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
                backgroundColor: "#3a94ee",
              }}
            >
              <MDTypography
                variant="h5"
                fontWeight="medium"
                textAlign="center"
                color="white"
              >
                Prime Segment
              </MDTypography>
              <MDTypography
                variant="h5"
                fontWeight="regular"
                color="white"
                textAlign="center"
              >
                500
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MDBox
              borderRadius="lg"
              justifyContent="center"
              alignItems="center"
              p={1}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
                backgroundColor: "#50aa54",
              }}
            >
              <MDTypography
                variant="h5"
                fontWeight="medium"
                textAlign="center"
                color="white"
              >
                High Potential
              </MDTypography>
              <MDTypography
                variant="h5"
                fontWeight="regular"
                color="white"
                textAlign="center"
              >
                500
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Box>
  );
}

export default TotalUnconverted;
