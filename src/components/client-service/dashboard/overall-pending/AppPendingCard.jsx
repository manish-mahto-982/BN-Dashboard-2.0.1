import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import {
  TbBrandAndroid,
  TbBrandApple,
  TbBrandAppstore,
  TbBrandGooglePlay,
} from "react-icons/tb";
import MDTypography from "src/components/theme/common/MDTypography";
import FlexBoxBetween from "../../common/FlexBoxBetween";
import MDBox from "src/components/theme/common/MDBox";
import { noStyleBtnProps } from "src/utils/constants";

function AppPendingCard() {
  const theme = useTheme();
  const [state] = useState({
    series: [44, 55],
    options: {
      chart: {
        width: 380,
        type: "donut",
        background: "transparent",
      },
      dataLabels: {
        enabled: false,
      },
      labels: ["Android", "IOS"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "top",
        offsetY: 0,
      },
      stroke: {
        colors: ["transparent"],
      },
      colors: ["#C7F464", "#29B5F7"],
    },
  });
  return (
    <Card height={1}>
      <Box mb={1}>
        <MDTypography
          // borderBottom={`1px solid ${theme.palette.divider}`}
          variant="h6"
          color={"dark"}
          fontWeight={"medium"}
          className={`px-5 pt-5 pb-4`}
        >
          App Not Updated Client
        </MDTypography>
        <Divider sx={{ my: 0 }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          //   flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          ".apexcharts-legend": {
            columnGap: 2,
          },
          pt: 1,
          pr: 4,
        }}
      >
        <ReactApexChart
          options={{ ...state.options, theme: { mode: theme.palette.mode } }}
          series={state.series}
          type="donut"
          width={190}
          height={220}
        />
        <Box display={"flex"} flexDirection={"column"} rowGap={2}>
          <MDBox
            component="button"
            {...noStyleBtnProps}
            px={2}
            py={1}
            className={`rounded-lg cursor-pointer transition-all duration-300 ease-linear`}
            sx={{
              "&:hover": {
                bgcolor: theme.palette.background.default,
                "&:active": { bgcolor: "unset" },
              },
            }}
          >
            <FlexBoxBetween columnGap={1}>
              <MDBox
                variant={"gradient"}
                bgColor="dark"
                className={
                  "min-w-12 aspect-square flex items-center justify-center rounded-lg"
                }
              >
                <TbBrandAndroid
                  size={28}
                  strokeWidth={1.2}
                  style={{ opacity: 0.7, stroke: "white" }}
                />
              </MDBox>
              <Box textAlign={"right"}>
                <MDTypography fontSize={'large'} fontWeight={'bold'}>
                  {44}
                </MDTypography>
                <MDTypography
                  textTransform={"uppercase"}
                  lineHeight={1.2}
                  fontSize={10}
                  sx={{ opacity: 0.5 }}
                >
                  {"Android Clients"}
                </MDTypography>
              </Box>
            </FlexBoxBetween>
          </MDBox>
          <MDBox
            component="button"
            {...noStyleBtnProps}
            px={2}
            py={1}
            className={`rounded-lg cursor-pointer transition-all duration-300 ease-linear`}
            sx={{
              "&:hover": {
                bgcolor: theme.palette.background.default,
                "&:active": { bgcolor: "unset" },
              },
            }}
          >
            <FlexBoxBetween columnGap={1}>
              <MDBox
                variant={"gradient"}
                bgColor="dark"
                className={
                  "w-12 aspect-square flex items-center justify-center rounded-lg"
                }
              >
                <TbBrandApple
                  size={28}
                  strokeWidth={1.2}
                  style={{ opacity: 0.7, stroke: "white" }}
                />
              </MDBox>
              <Box textAlign={"right"}>
                <MDTypography fontSize={'large'} fontWeight={'bold'}>
                  {54}
                </MDTypography>
                <MDTypography
                  textTransform={"uppercase"}
                  lineHeight={1.2}
                  fontSize={10}
                  sx={{ opacity: 0.5 }}
                >
                  {"IOS Clients"}
                </MDTypography>
              </Box>
            </FlexBoxBetween>
          </MDBox>
        </Box>
      </Box>
    </Card>
  );
}

export default AppPendingCard;
