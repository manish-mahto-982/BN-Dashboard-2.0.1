import React from "react";
import CSLayout from "../layout";
import { Card, Divider, Grid, IconButton, Tooltip } from "@mui/material";
import MDBox from "src/components/theme/common/MDBox";
import MDTypography from "src/components/theme/common/MDTypography";
import {
  TbBell,
  TbBrandAndroid,
  TbBrandApple,
  TbBrandWhatsapp,
  TbDeviceMobile,
  TbDeviceMobileOff,
  TbMail,
  TbMessage,
  TbUsersGroup,
} from "react-icons/tb";
import { useMaterialUIController } from "src/context";
import { commonDataAllTable, noStyleBtnProps } from "src/utils/constants";
import classNames from "classnames";
import useHandleTable from "src/hooks/useHandleTable";
import useDataGridTableDialog from "src/hooks/useDataGridTableDialog";
import { totalOcClientsData } from "src/utils/tableData";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import { handleWhatsApp } from "src/utils/helper";
import CustomAction from "src/components/client-service/oc-clients/CustomAction";
function OCClients() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const {
    tableData,
    setTableData,
    showTable,
    setShowTable,
    dataGridTableDialog,
  } = useDataGridTableDialog();
  const handleClick = (
    fetchQuery,
    columns,
    { actionType = "default", actionColumn = "", tableTitle = "default" } = {},
  ) => {
    const filterData = Object.values(fetchQuery.data)[0];
    setTableData({
      data: filterData,
      columns,
      actionType,
      actionColumn,
      tableTitle:
        tableTitle === "default"
          ? Object.keys(fetchQuery.data)[0]?.split("_")?.join(" ")
          : tableTitle,
    });
    setShowTable(true);
  };
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

        {ocClientDetailsData.map(({ icon: { name: Icon }, ...item }, index) => {
          return (
            <OCCard
              key={item.tableTitle + index}
              {...{ item, handleClick, Icon }}
            />
          );
        })}
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

        {ocAndroidDetails.map(({ icon: { name: Icon }, ...item }) => {
          const [handleButtonClick] = useHandleTable(item, handleClick);
          return (
            <Grid key={item.title} item xs={12} md={4}>
              <Card
                {...noStyleBtnProps}
                component={"button"}
                onClick={handleButtonClick}
                sx={{ borderRadius: 4 }}
                className={classNames(
                  "w-full  px-4 py-10 transition-all duration-300 ease-linear hover:bg-zinc-50 active:bg-transparent",
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
          );
        })}
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

        {ocIOSDetails.map(({ icon: { name: Icon }, ...item }) => {
          const [handleButtonClick] = useHandleTable(item, handleClick);
          return (
            <Grid key={item.title} item xs={12} md={4}>
              <Card
                {...noStyleBtnProps}
                component={"button"}
                onClick={handleButtonClick}
                sx={{ borderRadius: 4 }}
                className={classNames(
                  "w-full  px-4 py-10 transition-all duration-300 ease-linear hover:bg-zinc-50 active:bg-transparent",
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
          );
        })}
      </Grid>
      {dataGridTableDialog()}
    </CSLayout>
  );
}

export default OCClients;

const OCCard = ({ Icon, item, handleClick }) => {
  const [handleButtonClick] = useHandleTable(item, handleClick);
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  return (
    <Grid key={item.title} item xs={12} md={4}>
      <Card
        {...noStyleBtnProps}
        component={"button"}
        sx={{ borderRadius: 4 }}
        onClick={handleButtonClick}
        className={classNames(
          "w-full  px-4 py-10 transition-all duration-300 ease-linear hover:bg-zinc-50 active:bg-transparent",
          { "hover:bg-opacity-5": darkMode },
        )}
      >
        <MDBox
          className={"flex w-full cursor-pointer items-center justify-between "}
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
            <MDTypography fontWeight={"bold"} variant={"h3"} color={item.color}>
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
  );
};

const ocClientDetailsData = [
  {
    title: "Total OC",
    value: "2300",
    icon: { name: TbUsersGroup },
    color: "success",
    ...totalOcClientsData,
    tableTitle: "Total OCR Client List",
    actionType: "default",
  },
  {
    title: "OC app Not Updated",
    value: "1200",
    icon: { name: TbDeviceMobile },
    color: "info",
    ...totalOcClientsData,
    tableTitle: "Total OC App Not Updated Client List",
    actionType: "default",
  },
  {
    title: "OC without app",
    value: "100",
    icon: { name: TbDeviceMobileOff },
    color: "error",
    ...totalOcClientsData,
    actionType: "custom",
    actionColumn: CustomAction,
  },
];

const ocAndroidDetails = [
  {
    title: "OC Android Total",
    value: "1300",
    icon: { name: TbBrandAndroid },
    color: "success",
    tableTitle: "Total OCR Android Client List",
    actionType: "default",
    ...totalOcClientsData,
  },
  {
    title: "App Not Updated",
    value: "1000",
    icon: { name: TbBrandAndroid },
    color: "info",
    ...totalOcClientsData,
    tableTitle: "OCR Android Clients - App Not Updated",
    actionType: "default",
  },
  {
    title: "Without App",
    value: "50",
    icon: { name: TbBrandAndroid },
    color: "error",
    ...totalOcClientsData,
    tableTitle: "Android Without App",
    actionType: "custom",
    actionColumn: CustomAction,
  },
];

const ocIOSDetails = [
  {
    title: "OC IOS Total",
    value: "1000",
    icon: { name: TbBrandApple },
    color: "success",
    actionType: "default",
    tableTitle: "Total OCR IOS Client List",
    ...totalOcClientsData,
  },
  {
    title: "App Not Updated",
    value: "200",
    icon: { name: TbBrandApple },
    color: "info",
    ...totalOcClientsData,
    tableTitle: "OCR IOS Clients - App Not Updated",
    actionType: "default",
  },
  {
    title: "Without App",
    value: "50",
    icon: { name: TbBrandApple },
    color: "error",
    ...totalOcClientsData,
    tableTitle: "OCR IOS Clients Without App",
    actionType: "custom",
    actionColumn: CustomAction,
  },
];
