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
import Icon from   "@mui/material/Icon/Icon";
import Dashboard from "src/screens/theme/dashboard";
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
  // {
  //   type: "collapse",
  //   name: "All Lead",
  //   key: "all-lead",
  //   icon: <Icon fontSize="small">people</Icon>,
  //   route: "/all-lead",
  //   component: <AllLead />,
  // },
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
  //   name: "Collapse",
  //   href: "/collapse",

  //   key: "collapse",
  //   icon: <Icon fontSize="small">people</Icon>,
  //   collapse: [
  //     {
  //       key: "nested-1",
  //       name: "Nested2 Route 1",
  //       icon: <Icon fontSize="small">arrow_right</Icon>,
  //       route: "/collapse/nested2-1",
  //       component: <AllLead />,
  //     },
  //     {
  //       key: "nested2-2",
  //       name: "Nested2 Route 2",
  //       icon: <Icon fontSize="small">arrow_right</Icon>,
  //       route: "/collapse/nested2-2",
  //       component: <AllLead />,
  //     },
  //     // Add more nested routes as needed
  //   ],
  //   // component: <AllLead />, // Commented out as it's not needed for collapsible items
  // },
  // {
  //   type: "collapse",
  //   name: "Collapse2",
  //   href: "/collapse2",
  //   key: "collapse2",
  //   icon: <Icon fontSize="small">people</Icon>,
  //   collapse: [
  //     {
  //       key: "nested-1",
  //       name: "Nested2 Route 1",
  //       icon: <Icon fontSize="small">arrow_right</Icon>,
  //       route: "/collapse2/nested2-1",
  //     },
  //     {
  //       key: "nested2-2",
  //       name: "Nested2 Route 2",
  //       icon: <Icon fontSize="small">arrow_right</Icon>,
  //       route: "/collapse2/nested2-2",
  //     },
  //     // Add more nested routes as needed
  //   ],
  //   // component: <AllLead />, // Commented out as it's not needed for collapsible items
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
