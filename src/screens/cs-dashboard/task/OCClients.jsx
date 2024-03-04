import React from "react";
import CSLayout from "../layout";
import { Card, Grid } from "@mui/material";
import MDBox from "src/components/theme/common/MDBox";
import MDTypography from "src/components/theme/common/MDTypography";
import { GridCard, gridData } from "../dashboard/InductionFlow";
import useDataGridTableDialog from "src/hooks/useDataGridTableDialog";
import {
  TbBrandAndroid,
  TbBrandApple,
  TbCalendarUser,
  TbDeviceMobile,
  TbDeviceMobileOff,
  TbPhoneCall,
  TbSendOff,
  TbUsersGroup,
} from "react-icons/tb";
import {
  totalOcClientsData,
  nafOverdueData,
  inductionCallData,
  welcomeCallData,
} from "src/utils/tableData";
import { useMaterialUIController } from "src/context";
import useHandleTable from "src/hooks/useHandleTable";
import CustomAction from "src/components/client-service/oc-clients/CustomAction";

function OcClient() {
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
    { actionType = "default", actionColumn = "", tableTitle = "default" } = {}, // "= {}" this is important because to run the default value
  ) => {
    const filterData = Object.values(fetchQuery.data)[0];
    setTableData({
      ...tableData,
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
          <MDTypography variant="h6" color="text">
            OC Client Details
          </MDTypography>
        </Grid>
        <Grid item xs={12} height={"auto"}>
          <Grid container spacing={2.5} height={"100%"}>
            {ocClientDetailsData.map((item, index) => {
              return (
                <OCCard
                  key={item.title + index}
                  handleClick={handleClick}
                  item={item}
                />
              );
            })}
          </Grid>
        </Grid>
        <Grid mt={5} item xs={12}>
          <MDTypography variant="h6">Android Details</MDTypography>
        </Grid>
        <Grid item xs={12} height={"auto"}>
          <Grid container spacing={2.5} height={"100%"}>
            {ocAndroidDetails.map((item, index) => {
              return (
                <OCCard
                  key={item.title + index}
                  handleClick={handleClick}
                  item={item}
                />
              );
            })}
          </Grid>
        </Grid>
        <Grid mt={5} item xs={12}>
          <MDTypography variant="h6">
            IOS Details
          </MDTypography>
        </Grid>
        <Grid item xs={12} height={"auto"}>
          <Grid container spacing={2.5} height={"100%"}>
            {ocIOSDetails.map((item, index) => {
              return (
                <OCCard
                  key={item.title + index}
                  handleClick={handleClick}
                  item={item}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      {/* {dataGridTableDialog()} */}
    </CSLayout>
  );
}

export default OcClient;

export const OCCard = ({ handleClick, item }) => {
  const [handleButtonClick] = useHandleTable(item, handleClick);
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card
        component={"button"}
        onClick={handleButtonClick}
        sx={{
          // maxWidth:'400px',
          overflow: "hidden",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="w-full px-6 py-3">
          <IconWithBg Icon={item.Icon} />
          <div className="flex flex-col">
            <MDTypography
              // color={item.color}
              fontWeight="bold"
              fontSize={"3rem"}
              className="text-left text-5xl "
            >
              {item.value}
            </MDTypography>
            <MDTypography
              className="pb-2 text-left"
              fontSize={"medium"}
              color="text"
            >
              {item.title}
            </MDTypography>
          </div>
        </div>
      </Card>
    </Grid>
  );
};

export const IconWithBg = ({ Icon }) => {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;
  return (
    <MDBox
      // variant="gradient"
      width={"fit-content"}
      p={1.5}
      className={
        "absolute right-4 mt-1 rounded-full transition-all duration-300 ease-linear group-hover:shadow group-hover:shadow-transparent "
      }
      bgColor={"light"}
    >
      <Icon className="-mb-0.5 mt-1 h-5 w-6" />
    </MDBox>
  );
};

const ocClientDetailsData = [
  {
    title: "Total OC",
    Icon: TbUsersGroup,
    color: "success",
    actionType: "default",
    value: 2300,
    ...totalOcClientsData,
  },
  {
    title: "OC app Not Updated",
    Icon: TbDeviceMobile,
    value: 1200,
    color: "info",
    actionType: "default",
    ...totalOcClientsData,
    tableTitle: "Total OC Clients - App Not Updated",
  },
  {
    title: "Without App",
    Icon: TbDeviceMobileOff,
    value: 100,
    color: "error",
    ...welcomeCallData,
    tableTitle: "Welcome Call - Pending Clients",
    actionType: "custom",
    actionColumn: CustomAction,
  },
];

const ocAndroidDetails = [
  {
    title: "OC Android Total",
    value: "1300",
    Icon: TbBrandAndroid,
    color: "success",
    tableTitle: "Total OCR Android Client List",
    actionType: "default",
    ...totalOcClientsData,
  },
  {
    title: "App Not Updated",
    value: "1000",
    Icon: TbBrandAndroid,
    color: "info",
    ...totalOcClientsData,
    tableTitle: "OCR Android Clients - App Not Updated",
    actionType: "default",
  },
  {
    title: "Without App",
    value: "50",
    Icon: TbBrandAndroid,
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
    Icon: TbBrandApple,
    color: "success",
    actionType: "default",
    tableTitle: "Total OCR IOS Client List",
    ...totalOcClientsData,
  },
  {
    title: "App Not Updated",
    value: "200",
    Icon: TbBrandApple,
    color: "info",
    ...totalOcClientsData,
    tableTitle: "OCR IOS Clients - App Not Updated",
    actionType: "default",
  },
  {
    title: "Without App",
    value: "50",
    Icon: TbBrandApple,
    color: "error",
    ...totalOcClientsData,
    tableTitle: "OCR IOS Clients Without App",
    actionType: "custom",
    actionColumn: CustomAction,
  },
];
