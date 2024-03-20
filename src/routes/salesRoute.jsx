// Balance Nutrition React layouts
// import AllLead from "layouts/AllLead";
// import Tables from "layouts/tables";
// import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
// import Profile from "layouts/profile";
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon/Icon";
import AllLeadsTable from "src/components/common/all-leads/AllLeadsTable";
import AllLeads from "src/screens/sales-dashboard/all-leads";
import ClientProfile from "src/screens/sales-dashboard/client-profile/SalesClientProfile";
import Dashboard from "src/screens/sales-dashboard/dashboard";
// import AppActivity from "layouts/AppActivity";
// import PerformanceAnalysis from "layouts/PerformanceAnalysis";
// import EngagementSection from "layouts/EngagementSection";
// import SpeenWheel from "layouts/SpeenWheel";
// import SetYourGoal from "layouts/SetYourGoal";
// import LeadsFeedback from "layouts/LeadsFeedback";

const salesRoutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "All Leads",
    key: "all-leads",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/all-leads",
    component: <AllLeads />,
  },
  {
    type: "collapse",
    name: "Profile Details",
    key: "client-profile",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/lead-profile",
    component: <ClientProfile />,
  },

  // {
  //   type: "collapse",
  //   name: "App Activity",
  //   key: "app-activity",
  //   icon: <Icon fontSize="small">sports_soccer</Icon>,
  //   route: "/app-activity",
  //   component: <AppActivity />,
  // },
  // {
  //   type: "collapse",
  //   name: "Performance Anaysis",
  //   key: "performance-analysis",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/performance-analysis",
  //   component: <PerformanceAnalysis />,
  // },
  // {
  //   type: "collapse",
  //   name: "Engagement Section",
  //   key: "engagement-section",
  //   icon: <Icon fontSize="small">ImageIcon</Icon>,
  //   route: "/engagement-section",
  //   component: <EngagementSection />,
  // },
  // {
  //   type: "collapse",
  //   name: "Speen Wheel",
  //   key: "speen-wheel",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/speen-wheel",
  //   component: <SpeenWheel />,
  // },
  // {
  //   type: "collapse",
  //   name: "Leads Feedback",
  //   key: "leads-feedback",
  //   icon: <Icon fontSize="small">feedback</Icon>,
  //   route: "/leads-feedback",
  //   component: <LeadsFeedback />,
  // },
  // {
  //   type: "collapse",
  //   name: "Set Your Goal",
  //   key: "set-your-goal",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/set-your-goal",
  //   component: <SetYourGoal />,
  // },
  // {
  //   type: "collapse",
  //   name: "Payment Details",
  //   key: "payment-details",
  //   icon: <Icon fontSize="small">money</Icon>,
  //   route: "/payment-details",
  //   component: <PaymentDetails />,
  // },
];

export default salesRoutes;
