import React, { useEffect } from "react";
import CSLayout from "../layout";
import { commonDataAllTable, noStyleBtnProps } from "src/utils/constants";
import {
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
import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
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
function InductionFlow() {
  const theme = useTheme();
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;
  const {
    tableData,
    setTableData,
    showTable,
    setShowTable,
    dataGridTableDialog,
  } = useDataGridTableDialog();
  const handleClick = (fetchQuery, columns) => {
    const filterData = Object.values(fetchQuery.data)[0];
    setTableData({
      ...tableData,
      data: filterData,
      columns,
      tableTitle: Object.keys(fetchQuery.data)[0]?.split("_")?.join(" "),
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
                  darkMode={darkMode}
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
            <BasicStackCard />
          </Card>
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72} height={"auto"}>
          <Card sx={{ overflow: "hidden", height: "100%" }}>
            <SpecialStackCard
            // handleClick={handleClick}
            // item={COMMON_DATA_ALL_TABLE}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72} height={"auto"}>
          <Card sx={{ overflow: "hidden", height: "100%" }}>
            <Grid container height={"100%"}>
              {gridData.map(({ title, value, Icon }, index) => (
                <GridCard
                  key={title}
                  {...{ title, value, Icon, index, darkMode }}
                  // handleClick={handleClick}
                  theme={theme}
                  item={commonDataAllTable}
                />
              ))}
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72}>
          <CardWithDialogTable
            cardTitle="Assessment"
            {...{ darkMode }}
            data={assessmentData}
          />
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72}>
          <CardWithDialogTable
            cardTitle="ICL"
            {...{ darkMode }}
            data={iclData}
          />
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72}>
          <CardWithIconAndDialogTable
            cardTitle={"Start Session Update"}
            {...{ darkMode }}
            data={startSessionData}
          />
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72}>
          <CardWithIconAndDialogTable
            cardTitle="Mid Session Update"
            {...{ darkMode }}
            data={midSessionData}
          />
        </Grid>
        <Grid item xs={12} sm={5.76} md={3.72}>
          <CardWithIconAndDialogTable
            cardTitle="End Session Update"
            {...{ darkMode }}
            data={endSessionData}
          />
        </Grid>
      </Grid>
      {dataGridTableDialog()}
    </CSLayout>
  );
}

export default InductionFlow;

const SummaryCard = ({ item, handleClick, darkMode }) => {
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
    // <Grid
    //   padding={2}
    //   display={"flex"}
    //   justifyContent={"center"}
    //   borderRadius={2}
    //   position={"relative"}
    //   sx={{
    //     bgcolor: `rgb(${item.bgcolor},.05)`,
    //     color: `rgb(${item.bgcolor},1)`,
    //     ":hover": {
    //       bgcolor: darkMode
    //         ? "rgba(67, 81, 89, 0.16)"
    //         : "rgba(67, 81, 89, 0.06)",
    //       transition: "linear",
    //       transitionDuration: "300ms",
    //       cursor: "pointer",
    //     },
    //   }}
    //   key={item.title}
    //   item
    //   xs={4}
    //   md={1.92}
    //   component={"button"}
    //   onClick={handleButtonClick}
    // >
    //   <FlexBoxBetween>
    //     <Box>
    //       <FlexBoxBetween justifyContent={"start"} columnGap={2}>
    //         <PersonOutlineOutlinedIcon />
    //         <Typography fontSize={16} fontWeight={600} variant="subtitle1">
    //           {item.number}
    //         </Typography>
    //       </FlexBoxBetween>
    //       <Typography fontSize={16} fontWeight={500} variant="subtitle1">
    //         {item.title}
    //       </Typography>
    //     </Box>
    //   </FlexBoxBetween>
    // </Grid>
    <Grid item xs={12} sm={5.72} md={3.72} lg={1.74} mt={2}>
      <StatisticsCard
        color={item.bgcolor}
        icon="person"
        title={item.title}
        count={item.number}
      />
    </Grid>
  );
};

const GridCard = ({
  item,
  theme,
  darkMode,
  index,
  value,
  title,
  Icon,
  handleClick,
}) => {
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
    <Grid
      component={"button"}
      item
      {...noStyleBtnProps}
      xs={6}
      display={"flex"}
      className={classNames("h-1/2 p-4  cursor-pointer group")}
      borderRight={
        index === 0 || index === 2
          ? theme.palette.mode === "dark"
            ? "1px solid #ffffff20"
            : "1px solid #00000010"
          : "none"
      }
      borderBottom={
        index === 0 || index === 1
          ? theme.palette.mode === "dark"
            ? "1px solid #ffffff20"
            : "1px solid #00000010"
          : "none"
      }
      onClick={handleButtonClick}
    >
      <FlexBoxBetween columnGap={1} my={"auto"}>
        <MDBox
          variant="gradient"
          width={"fit-content"}
          p={1.5}
          className={
            "rounded-lg group-hover:shadow group-hover:shadow-transparent transition-all ease-linear duration-300"
          }
          bgColor={darkMode ? "secondary" : "dark"}
          // coloredShadow={darkMode ? "secondary" : "dark"}
          // bgcolor={theme.palette.background.alt}
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
  },
  {
    title: "Induction Call",
    Icon: TbPhoneCall,
    value: 20,
  },
  {
    title: "Welcome call",
    Icon: TbCalendarUser,
    value: 20,
  },
  {
    title: "Session Start Date",
    Icon: TbPlayerPlay,
    value: 12,
  },
];

const assessmentData = [
  {
    title: "Not filled",
    value: 3,
    ...commonDataAllTable,
  },
  {
    title: "Partially Received",
    value: 3,
    ...commonDataAllTable,
  },
];

const iclData = [
  {
    title: "Not filled",
    value: 1,
    ...commonDataAllTable,
  },
  {
    title: "Partially Received",
    value: 2,
    ...commonDataAllTable,
  },
];

const startSessionData = [
  {
    title: "Start Weight",
    value: 3,
    Icon: TbScaleOutlineOff,
    color: colors.warning.main,
    ...commonDataAllTable,
  },
  {
    title: "Start Inch",
    value: 2,
    Icon: TbRuler2Off,
    color: colors.faintgreen.main,
    ...commonDataAllTable,
  },
  {
    title: "Start Photo",
    value: 3,
    Icon: TbCameraOff,
    color: colors.skyblue.main,
    ...commonDataAllTable,
  },
];

const midSessionData = [
  {
    title: "Mid Weight",
    value: 3,
    Icon: TbScaleOutlineOff,
    color: colors.warning.main,
    ...commonDataAllTable,
  },
];

const endSessionData = [
  {
    title: "End Weight",
    value: 3,
    Icon: TbScaleOutlineOff,
    color: colors.warning.main,
    ...commonDataAllTable,
  },
  {
    title: "End Inch",
    value: 2,
    Icon: TbRuler2Off,
    color: colors.faintgreen.main,
    ...commonDataAllTable,
  },
  {
    title: "End Photo",
    value: 3,
    Icon: TbCameraOff,
    color: colors.skyblue.main,
    ...commonDataAllTable,
  },
];
