

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "src/components/theme/common//MDBox";

// Material Dashboard 2 React example components
import Footer from "src/components/theme/layout/Footer";
import ComplexStatisticsCard from "src/components/theme/layout/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsLineChartData from "./data/reportsLineChartData";

// Dashboard components
import IncentiveSystem from "./components/IncentiveSystem";
import LeadFunnel from "./components/LeadFunnel";
import GoalSet from "./components/GoalSet";
// import ActivitiesDone from "./components/ActivitiesDone";
import Consultation from "./components/UnconvertedLead/Consultation";
import Stage from "./components/UnconvertedLead/Stage";
import Phase from "./components/UnconvertedLead/Phase";
import ClinicalCondition from "./components/UnconvertedLead/ClinicalCondition";
import Downgrade from "./components/UnconvertedLead/Downgrade";
import TotalUnconverted from "./components/UnconvertedLead/TotalUnconverted";
import CapturedLead from "./components/ActivitiesDone/CapturedLead";
import LeadAction from "./components/ActivitiesDone/LeadAction";
import LeadStatus from "./components/ActivitiesDone/LeadStatus";
import LeadStage from "./components/ActivitiesDone/LeadStage";
import LeadPhase from "./components/ActivitiesDone/LeadPhase";
import LeadTable from "./components/Leadtable";
import MDTypography from "src/components/theme/common//MDTypography";
import TopButton from "src/components/theme/layout/Cards/StatisticsCards/TopButton";
import HeaderMarquee from "./components/HeaderMarquee";
import DashboardLayout from "src/components/theme/layout/LayoutContainers/DashboardLayout";
import DashboardNavbar from "src/components/theme/layout/Navbars/DashboardNavbar";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <HeaderMarquee />
          </Grid>
        </Grid>
      </MDBox>
      <MDBox py={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={2.3}>
            <MDBox mb={1.5}>
              <TopButton
                color="primary"
                icon="weekend"
                title=""
                count="Rs. 40000"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Consultation",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.7}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title=""
                count={78}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Today’s App Downloaded",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title=""
                count="Rs.28000"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Achieved Sales",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title=""
                count="Rs. 30000"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Today’s Sales",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={2.3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="weekend"
                title=""
                count="RS 400000"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Pending Sales",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={1}>
          <MDBox
            pt={1}
            px={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          ></MDBox>
          <LeadTable />
        </MDBox>

        <MDBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <MDBox
                pt={2}
                px={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography variant="h6" fontWeight="medium">
                  Activities Done
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={4} lg={2.4}>
              <CapturedLead />
            </Grid>
            <Grid item xs={12} md={4} lg={2.7}>
              <LeadAction />
            </Grid>
            <Grid item xs={12} md={4} lg={2.3}>
              <LeadStatus />
            </Grid>
            <Grid item xs={12} md={4} lg={2.3}>
              <LeadStage />
            </Grid>
            <Grid item xs={12} md={4} lg={2.3}>
              <LeadPhase />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5} lg={5}>
              <LeadFunnel />
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
              <GoalSet />
            </Grid>
          </Grid>
        </MDBox>

        <MDBox mt={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <TotalUnconverted />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={3.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={2.4}>
              <Consultation title="" count="" icon={""} />
            </Grid>
            <Grid item xs={12} md={4} lg={2.2}>
              <Stage title="" count="" icon={""} />
            </Grid>
            <Grid item xs={12} md={4} lg={2.7}>
              <Phase title="" count="" icon={""} />
            </Grid>
            <Grid item xs={12} md={4} lg={2.3}>
              <Downgrade title="" count="" icon={""} />
            </Grid>
            <Grid item xs={12} md={4} lg={2.4}>
              <ClinicalCondition title="" count="" icon={""} />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <IncentiveSystem />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
