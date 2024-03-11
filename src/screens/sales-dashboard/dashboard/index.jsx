import Grid from "@mui/material/Grid";

import reportsLineChartData from "./data/reportsLineChartData";

// Dashboard components
// import IncentiveSystem from "layouts/dashboard/components/IncentiveSystem";
// import LeadFunnel from "./components/LeadFunnel";
// import GoalSet from "./components/GoalSet";
// import Consultation from "./components/UnconvertedLead/Consultation";
// import Stage from "./components/UnconvertedLead/Stage";
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
// import HeaderMarquee from "./components/HeaderMarquee";
// import GoalSetStepper from "./components/GoalSetStepper";
import TopCards from "./components/TopCards";
import DashboardLayout from "src/components/theme/layout/LayoutContainers/DashboardLayout";
import DashboardNavbar from "src/components/theme/layout/Navbars/DashboardNavbar";
import Footer from "src/components/theme/layout/Footer";
import Consultation from "./components/UnconvertedLead/Consultation";
import Stage from "./components/UnconvertedLead/Stage";
import IncentiveSystem from "./components/IncentiveSystem";
import MDBox from "src/components/theme/common/MDBox";
import MDTypography from "src/components/theme/common/MDTypography";
import LeadFunnel from "./components/LeadFunnel";
import GoalSet from "./components/GoalSet";
import HeaderMarquee from "./components/HeaderMarquee";
import SalesLayout from "../layout";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <SalesLayout>
      {/* <DashboardLayout> */}
        {/* <DashboardNavbar /> */}
      <MDBox>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <MDBox mb={2}>
              <HeaderMarquee />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox py={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={3}>
              <TopCards
                color="primary"
                icon="weekend"
                title="Consultation"
                count="Call & Consultation"
                percentage={{
                  color: "success",
                  counter: "10",
                  counter1: "20",
                  counter2: "",
                  label: "Consultation Booked",
                  label1: "Consultation Done",
                  label2: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <TopCards
                color="dark"
                icon="store"
                title=""
                count="App Downloaded"
                percentage={{
                  color: "success",
                  counter: "10",
                  counter1: "20",
                  counter2: "10",
                  label: " Your Lead With App",
                  label1: "Your Lead Without App",
                  label2: "Lead With App But Not HS",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <TopCards
                icon="leaderboard"
                title=""
                count="App Activity"
                percentage={{
                  color: "success",
                  counter: "50",
                  counter1: "6",
                  counter2: "6",
                  label: "Feedback Received ",
                  label1: "Tips Visited",
                  label2: "Unanswered Chat",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <TopCards
                color="success"
                icon="store"
                title=""
                count="App Engagement"
                percentage={{
                  color: "success",
                  counter: "20",
                  counter1: "",
                  counter2: "",
                  label: "Wallet Trigger",
                  label1: "",
                  label2: "",
                }}
              />
            </MDBox>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <TopCards
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
          </Grid> */}
        </Grid>
        <MDBox mt={2}>
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

        {/* <MDBox mt={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <GoalSetStepper />
            </Grid>
          </Grid>
        </MDBox> */}

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
              <Consultation />
            </Grid>
            <Grid item xs={12} md={4} lg={2.2}>
              <Stage />
            </Grid>
            <Grid item xs={12} md={4} lg={2.7}>
              <Phase />
            </Grid>
            <Grid item xs={12} md={4} lg={2.3}>
              <Downgrade />
            </Grid>
            <Grid item xs={12} md={4} lg={2.4}>
              <ClinicalCondition />
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
      {/* </DashboardLayout> */}
    </SalesLayout>
  );
}

export default Dashboard;
