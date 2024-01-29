import {  useEffect } from "react";

import { Card, Typography, useTheme } from "@mui/material";
import MDBox from "src/components/theme/common//MDBox";
import MDButton from "src/components/theme/common//MDButton";
import MDTypography from "src/components/theme/common//MDTypography";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function LeadFunnel() {
  const theme = useTheme();
  const [state] = useState({
    series: [
      {
        name: "Current",
        data: [44, 55, 80],
      },
      {
        name: "Benchmark",
        data: [76, 85, 34],
      },
      {
        name: "Average",
        data: [35, 45, 25],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 300,
        background: "transparent",
      },

     
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 3,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Lead - consultation",
          "Consultation - Sales",
          "Lead - Sales",
        ],
        labels: {
          style: {
            fontSize: "12.9px",
            color: "#d0d6ea", // Change the font size as needed
          },
        },
      },
      yaxis: {
        title: {
          text: "(Analysis)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " %";
          },
        },
      },
    },
  });

  useEffect(() => {
    const toolbarElement = document.querySelector(".apexcharts-toolbar");
    if (toolbarElement) {
      toolbarElement.style.display = "none";
    }
  }, []);
  return (
    <Card id="delete-account" style={{ height: "350px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <MDBox
          pt={1}
          px={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <MDTypography variant="h6" fontWeight="medium">
            Performance Analysis
          </MDTypography>
        </MDBox>
        <MDButton
          variant="contained"
          color="warning"
          size="small"
          sx={{ margin: "5px", borderRadius: "50px", padding: "0px" }}
        >
          &nbsp;Fair
        </MDButton>
      </div>

      <div id="chart">
        <ReactApexChart
          options={{
            ...state.options,
            theme: {
              mode: theme.palette.mode,
            },
          }}
          series={state.series}
          type="bar"
          height={280}
          color="#b0b2b8"
        />
      </div>
    </Card>
  );
}

export default LeadFunnel;
