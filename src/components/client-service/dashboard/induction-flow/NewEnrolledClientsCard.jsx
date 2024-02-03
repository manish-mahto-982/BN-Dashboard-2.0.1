import { useTheme } from "@mui/material";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import MDBox from "src/components/theme/common/MDBox";
import MDTypography from "src/components/theme/common/MDTypography";

function NewEnrolledClientsCard() {
  const theme = useTheme();
  const [state] = useState({
    series: [
      {
        name: "New",
        data: [44, 55],
      },
      {
        name: "Renewal",
        data: [16, 45],
      },
      {
        name: "OCR",
        data: [76, 85],
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
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Basic Stack", "Special Stack"],
      },
      yaxis: {
        title: {
          text: "(Clients)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " clients";
          },
        },
      },
    },
  });
  return (
    <MDBox id="chart" pt={3} px={2}>
      <MDTypography variant="h6" fontWeight="medium">
        Client Stats
      </MDTypography>
      <ReactApexChart
        options={{
          ...state.options,
          theme: {
            mode: theme.palette.mode,
          },
        }}
        series={state.series}
        type="bar"
        height={200}
      />
    </MDBox>
  );
}

export default NewEnrolledClientsCard;
