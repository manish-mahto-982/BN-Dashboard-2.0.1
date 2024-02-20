import React, { useEffect } from "react";
import CSLayout from "../layout";
import { commonDataAllTable, noStyleBtnProps } from "src/utils/constants";
import {
  TbBrandWhatsapp,
  TbCalendarUser,
  TbCameraOff,
  TbPhoneCall,
  TbPlayerPlay,
  TbRuler2Off,
  TbScaleOutline,
  TbScaleOutlineOff,
  TbSendOff,
} from "react-icons/tb";
import colors from "src/assets/theme/base/colors";
import {
  Box,
  Card,
  Grid,
  IconButton,
  Input,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import useDataGridTableDialog from "src/hooks/useDataGridTableDialog";
import { useMaterialUIController } from "src/context";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import StatisticsCard from "src/components/client-service/common/StatisticsCard";
import NewEnrolledClientsCard from "src/components/client-service/dashboard/induction-flow/NewEnrolledClientsCard";
import BasicStackCard from "src/components/client-service/dashboard/induction-flow/BasicStackCard";
import SpecialStackCard from "src/components/client-service/dashboard/induction-flow/SpecialStackCard";
import CardWithDialogTable from "src/components/client-service/common/CardWithDialogTable";
import classNames from "classnames";
import MDBox from "src/components/theme/common/MDBox";
import MDTypography from "src/components/theme/common/MDTypography";
import CardWithIconAndDialogTable from "src/components/client-service/common/CardWithIconAndDialogTable";
import {
  nafOverdueData,
  welcomeCallData,
  assessmentNotFilledData,
  sessionStartDateData,
  inductionCallData,
  startWeightData,
  startInchData,
  startPhotoData,
  endWeightData,
  endInchData,
  endPhotoData,
  iclNotFilledData,
  midWeightData,
} from "src/utils/tableData";
import { handleWhatsApp } from "src/utils/helper";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
function InductionFlow() {
  const theme = useTheme();

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
      <Grid container rowGap={3} columnGap={3}>
        <Grid item xs={12}>
          <Box>
            <Grid
              container
              style={{
                borderRadius: 10,
              }}
              gap={3}
              mt={3}
            >
              {quickSummaryData.map((item) => (
                <SummaryCard
                  key={item.title}
                  item={item}
                  handleClick={handleClick}
                />
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72}>
          <Card>
            <NewEnrolledClientsCard />
          </Card>
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72} height={"auto"}>
          <Card sx={{ overflow: "hidden", height: "100%" }}>
            <BasicStackCard handleClick={handleClick} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72} height={"auto"}>
          <Card sx={{ overflow: "hidden", height: "100%" }}>
            <SpecialStackCard handleClick={handleClick} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72} height={"auto"}>
          <Card sx={{ overflow: "hidden", height: "100%" }}>
            <Grid container height={"100%"}>
              {gridData.map(({ title, value, Icon, ...item }, index) => {
                return (
                  <GridCard
                    key={title}
                    {...{ title, value, Icon, index }}
                    handleClick={handleClick}
                    theme={theme}
                    item={item}
                  />
                );
              })}
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72}>
          <CardWithDialogTable
            handleClick={handleClick}
            cardTitle="Assessment"
            data={assessmentData}
          />
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72}>
          <CardWithDialogTable
            cardTitle="ICL"
            data={iclData}
            handleClick={handleClick}
          />
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72}>
          <CardWithIconAndDialogTable
            cardTitle={"Start Session Update"}
            data={startSessionData}
            handleClick={handleClick}
          />
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72}>
          <CardWithIconAndDialogTable
            cardTitle="Mid Session Update"
            data={midSessionData}
            {...{ handleClick }}
          />
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72}>
          <CardWithIconAndDialogTable
            cardTitle="End Session Update"
            data={endSessionData}
            {...{ handleClick }}
          />
        </Grid>
      </Grid>
      {dataGridTableDialog()}
    </CSLayout>
  );
}

export default InductionFlow;

const SummaryCard = ({ item, handleClick }) => {
  let trigger;
  let res;
  if (item.fetchQuery) {
    [trigger, res] = item.fetchQuery?.();
  }
  const handleButtonClick = () => {
    trigger?.();
  };
  useEffect(() => {
    res?.data && handleClick(res, item.columns);
  }, [res]);
  return (
    <Grid item xs={12} sm={5.72} md={3.72} lg={1.74} mt={2}>
      <StatisticsCard
        color={item.bgcolor}
        icon="person"
        handleButtonClick={handleButtonClick}
        title={item.title}
        count={item.number}
      />
    </Grid>
  );
};

const GridCard = ({ item, theme, index, value, title, Icon, handleClick }) => {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;
  let trigger;
  let res;
  if (item.fetchQuery) {
    [trigger, res] = item.fetchQuery?.();
  }
  const handleButtonClick = () => {
    trigger?.();
  };
  useEffect(() => {
    res?.data &&
      handleClick(res, item.columns, {
        actionType: item.actionType ? item.actionType : "custom",
        actionColumn: (row) => {
          const clientPhoneNumber = document
            ?.querySelector(`td#phone_${row.id}`)
            ?.innerHTML.replace(/[\+\-]/g, ""); //removing the + and - from the phoneNumber
          const mentorPhoneNumberEl = document?.querySelector(
            `td#mentor_phone_${row.id}`,
          );
          const MentorWA = () => (
            <Tooltip title={"Client-Whatsapp"}>
              <IconButton
                aria-label="whatsapp"
                color="success"
                onClick={() => handleWhatsApp(clientPhoneNumber)}
              >
                <TbBrandWhatsapp
                  style={{
                    strokeWidth: 1.4,
                    padding: 2,
                  }}
                  size={28}
                />
              </IconButton>
            </Tooltip>
          );
          if (mentorPhoneNumberEl) {
            mentorPhoneNumberEl.innerHTML += MentorWA();
          }
          return (
            <>
              <Tooltip title={"Client-Whatsapp"}>
                <IconButton
                  aria-label="whatsapp"
                  color="success"
                  onClick={() => handleWhatsApp(clientPhoneNumber)}
                >
                  <TbBrandWhatsapp
                    style={{
                      strokeWidth: 1.4,
                      padding: 2,
                    }}
                    size={28}
                  />
                </IconButton>
              </Tooltip>
              <FlexBoxBetween>
                <Input placeholder="message" multiline />
                <PrimaryButton
                  sx={{
                    lineHeight: "normal",
                    scale: "80%",
                  }}
                >
                  Submit
                </PrimaryButton>
              </FlexBoxBetween>
            </>
          );
        },
        tableTitle: item.tableTitle ? item.tableTitle : "default",
      });
  }, [res]);
  return (
    <Grid
      component={"button"}
      item
      {...noStyleBtnProps}
      xs={6}
      display={"flex"}
      className={classNames("group h-1/2  cursor-pointer p-4")}
      borderRight={index === 0 || index === 2 ? darkMode : "none"}
      borderBottom={index === 0 || index === 1 ? darkMode : "none"}
      onClick={handleButtonClick}
    >
      <FlexBoxBetween columnGap={1} my={"auto"}>
        <MDBox
          variant="gradient"
          width={"fit-content"}
          p={1.5}
          className={
            "rounded-lg transition-all duration-300 ease-linear group-hover:shadow group-hover:shadow-transparent"
          }
          bgColor={darkMode ? "secondary" : "dark"}
        >
          <Icon size={20} className={"-mb-1 stroke-white"} />
        </MDBox>
        <Box textAlign={"center"}>
          <MDTypography fontSize={20}>{value}</MDTypography>
          <MDTypography
            textTransform={"uppercase"}
            lineHeight={1.2}
            fontSize={10}
            sx={{ opacity: 0.5 }}
          >
            {title}
          </MDTypography>
        </Box>
      </FlexBoxBetween>
    </Grid>
  );
};

//Card Data

const quickSummaryData = [
  {
    title: "Total Active Client",
    number: 3000,
    bgcolor: "info",
    ...commonDataAllTable,
  },
  {
    title: "Not Started",
    number: 3000,
    bgcolor: "dark",
    ...commonDataAllTable,
  },
  {
    title: "Cleanse Active",
    number: 80,
    bgcolor: "primary",
    ...commonDataAllTable,
  },
  {
    title: "Active",
    number: 50,
    bgcolor: "success",
    ...commonDataAllTable,
  },
  {
    title: "On Hold",
    number: 39,
    bgcolor: "warning",
    ...commonDataAllTable,
  },
  {
    title: "Dormant",
    number: 20,
    bgcolor: "error",
    ...commonDataAllTable,
  },
];

const gridData = [
  {
    title: "NAF + ICL Received Diet not send",
    Icon: TbSendOff,
    value: 20,
    ...nafOverdueData,
  },
  {
    title: "Induction Call",
    Icon: TbPhoneCall,
    value: 20,
    ...inductionCallData,
  },
  {
    title: "Welcome call",
    Icon: TbCalendarUser,
    value: 20,
    ...welcomeCallData,
    tableTitle: "Welcome Call - Pending Clients",
    actionType: "default",
  },
  {
    title: "Session Start Date",
    Icon: TbPlayerPlay,
    value: 12,
    ...sessionStartDateData,
    actionType: "default",
  },
];

const assessmentData = [
  {
    title: "Not filled",
    value: 3,
    ...assessmentNotFilledData,
  },
  {
    title: "Partially Received",
    value: 3,
    ...commonDataAllTable,
    tableTitle: "Partially Received",
  },
];

const iclData = [
  {
    title: "Not filled",
    value: 1,
    ...iclNotFilledData,
    actionType: "default",
  },
  {
    title: "Partially Received",
    value: 2,
    ...iclNotFilledData,
    tableTitle: "ICL Partially Received Clients",
    actionType: "default",
  },
];

const startSessionData = [
  {
    title: "Start Weight",
    value: 3,
    Icon: TbScaleOutlineOff,
    color: colors.warning.main,
    ...startWeightData,
    actionType: "default",
  },
  {
    title: "Start Inch",
    value: 2,
    Icon: TbRuler2Off,
    color: colors.faintgreen.main,
    ...startInchData,
    actionType: "default",
  },
  {
    title: "Start Photo",
    value: 3,
    Icon: TbCameraOff,
    color: colors.skyblue.main,
    ...startPhotoData,
    actionType: "default",
    tableTitle: "Start Photo Data",
  },
];

const midSessionData = [
  {
    title: "Mid Weight",
    value: 3,
    Icon: TbScaleOutlineOff,
    color: colors.warning.main,
    ...midWeightData,
    actionType: "default",
    tableTitle: "Mid Weight Data",
  },
];

const endSessionData = [
  {
    title: "End Weight",
    value: 3,
    Icon: TbScaleOutlineOff,
    color: colors.warning.main,
    ...endWeightData,
    actionType: "default",
    tableTitle: "End Weight Data",
  },
  {
    title: "End Inch",
    value: 2,
    Icon: TbRuler2Off,
    color: colors.faintgreen.main,
    ...endInchData,
    actionType: "default",
    tableTitle: "End Inch Data",
  },
  {
    title: "End Photo",
    value: 3,
    Icon: TbCameraOff,
    color: colors.skyblue.main,
    ...endPhotoData,
    actionType: "default",
    tableTitle: "End Photo Data",
  },
];
