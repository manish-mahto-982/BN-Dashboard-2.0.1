import React from "react";
import CSLayout from "../layout";
import { Card, Divider, Grid } from "@mui/material";
import MDBox from "src/components/theme/common/MDBox";
import MDTypography from "src/components/theme/common/MDTypography";
import {
  TbBrandAndroid,
  TbBrandApple,
  TbDeviceMobile,
  TbDeviceMobileOff,
  TbUsersGroup,
} from "react-icons/tb";
import { useMaterialUIController } from "src/context";
import { commonDataAllTable, noStyleBtnProps } from "src/utils/constants";
import classNames from "classnames";
function OCClients() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  return (
    <CSLayout>
      <Grid container mt={5} spacing={3}>
        <Grid item xs={12}>
          <MDBox
            mt={-3}
            py={2}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              OC Client Details
            </MDTypography>
          </MDBox>
        </Grid>

        {ocClientDetailsData.map(({ icon: { name: Icon }, ...item }) => (
          <Grid key={item.title} item xs={12} md={4}>
            <Card
              {...noStyleBtnProps}
              component={"button"}
              className={classNames(
                "w-full rounded-xl px-4 py-10 transition-all duration-300 ease-linear hover:bg-zinc-50 active:bg-transparent",
                { "hover:bg-opacity-5": darkMode },
              )}
            >
              <MDBox
                className={
                  "flex w-full cursor-pointer items-center justify-between "
                }
              >
                <MDBox
                  variant="gradient"
                  width={"fit-content"}
                  p={1.5}
                  className={
                    "flex aspect-square h-14 items-center justify-center rounded-lg transition-all duration-300 ease-linear group-hover:shadow group-hover:shadow-transparent"
                  }
                  bgColor={darkMode ? "secondary" : "dark"}
                >
                  <Icon size={20} className={"-mb-1 stroke-white"} />
                </MDBox>
                <MDBox className={"text-right"}>
                  <MDTypography
                    fontWeight={"bold"}
                    variant={"h3"}
                    color={item.color}
                  >
                    {item.value}
                  </MDTypography>
                  <MDTypography
                    fontWeight={"light"}
                    fontSize="small"
                    color="secondary"
                  >
                    {item.title}
                  </MDTypography>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container mt={5} spacing={3}>
        <Grid item xs={12}>
          <MDBox
            mt={-3}
            py={2}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              Android Details
            </MDTypography>
          </MDBox>
        </Grid>

        {ocAndroidDetails.map(({ icon: { name: Icon }, ...item }) => (
          <Grid key={item.title} item xs={12} md={4}>
            <Card
              {...noStyleBtnProps}
              component={"button"}
              className={classNames(
                "w-full rounded-xl px-4 py-10 transition-all duration-300 ease-linear hover:bg-zinc-50 active:bg-transparent",
                { "hover:bg-opacity-5": darkMode },
              )}
            >
              <MDBox
                className={
                  "flex w-full cursor-pointer items-center justify-between "
                }
              >
                <MDBox
                  variant="gradient"
                  width={"fit-content"}
                  p={1.5}
                  className={
                    "flex aspect-square h-14 items-center justify-center rounded-lg transition-all duration-300 ease-linear group-hover:shadow group-hover:shadow-transparent"
                  }
                  bgColor={darkMode ? "secondary" : "dark"}
                >
                  <Icon size={20} className={"-mb-1 stroke-white"} />
                </MDBox>
                <MDBox className={"text-right"}>
                  <MDTypography
                    fontWeight={"bold"}
                    variant={"h3"}
                    color={item.color}
                  >
                    {item.value}
                  </MDTypography>
                  <MDTypography
                    fontWeight={"light"}
                    fontSize="small"
                    color="secondary"
                  >
                    {item.title}
                  </MDTypography>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container mt={5} spacing={3}>
        <Grid item xs={12}>
          <MDBox
            mt={-3}
            py={2}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              IOS Details
            </MDTypography>
          </MDBox>
        </Grid>

        {ocIOSDetails.map(({ icon: { name: Icon }, ...item }) => (
          <Grid key={item.title} item xs={12} md={4}>
            <Card
              {...noStyleBtnProps}
              component={"button"}
              className={classNames(
                "w-full rounded-xl px-4 py-10 transition-all duration-300 ease-linear hover:bg-zinc-50 active:bg-transparent",
                { "hover:bg-opacity-5": darkMode },
              )}
            >
              <MDBox
                className={
                  "flex w-full cursor-pointer items-center justify-between "
                }
              >
                <MDBox
                  variant="gradient"
                  width={"fit-content"}
                  p={1.5}
                  className={
                    "flex aspect-square h-14 items-center justify-center rounded-lg transition-all duration-300 ease-linear group-hover:shadow group-hover:shadow-transparent"
                  }
                  bgColor={darkMode ? "secondary" : "dark"}
                >
                  <Icon size={20} className={"-mb-1 stroke-white"} />
                </MDBox>
                <MDBox className={"text-right"}>
                  <MDTypography
                    fontWeight={"bold"}
                    variant={"h3"}
                    color={item.color}
                  >
                    {item.value}
                  </MDTypography>
                  <MDTypography
                    fontWeight={"light"}
                    fontSize="small"
                    color="secondary"
                  >
                    {item.title}
                  </MDTypography>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CSLayout>
  );
}

export default OCClients;

const ocClientDetailsData = [
  {
    title: "Total OC",
    value: "2300",
    icon: { name: TbUsersGroup },
    color: "success",
    ...commonDataAllTable,
  },
  {
    title: "OC app Not Updated",
    value: "1200",
    icon: { name: TbDeviceMobile },
    color: "info",
    ...commonDataAllTable,
  },
  {
    title: "OC without app",
    value: "100",
    icon: { name: TbDeviceMobileOff },
    color: "error",
    ...commonDataAllTable,
  },
];

const ocAndroidDetails = [
  {
    title: "OC Android Total",
    value: "1300",
    icon: { name: TbBrandAndroid },
    color: "success",
    ...commonDataAllTable,
  },
  {
    title: "App Not Updated",
    value: "1000",
    icon: { name: TbBrandAndroid },
    color: "info",
    ...commonDataAllTable,
  },
  {
    title: "Without App",
    value: "50",
    icon: { name: TbBrandAndroid },
    color: "error",
    ...commonDataAllTable,
  },
];

const ocIOSDetails = [
  {
    title: "OC IOS Total",
    value: "1000",
    icon: { name: TbBrandApple },
    color: "success",
    ...commonDataAllTable,
  },
  {
    title: "App Not Updated",
    value: "200",
    icon: { name: TbBrandApple },
    color: "info",
    ...commonDataAllTable,
  },
  {
    title: "Without App",
    value: "50",
    icon: { name: TbBrandApple },
    color: "error",
    ...commonDataAllTable,
  },
];
