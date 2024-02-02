// Balance Nutrition React layouts
// @mui icons
import Icon from "@mui/material/Icon";
import HalftimeJourney from "src/screens/cs-dashboard/dashboard/HalftimeJourney";
import InductionFlow from "src/screens/cs-dashboard/dashboard/InductionFlow";
import OverallPending from "src/screens/cs-dashboard/dashboard/OverallPending";
import TailEndJourney from "src/screens/cs-dashboard/dashboard/TailEndJourney";
import ExpiryClient from "src/screens/cs-dashboard/task/ExpiryClient";
import Maintenance from "src/screens/cs-dashboard/task/Maintenance";
import OCClients from "src/screens/cs-dashboard/task/OCClients";
const clientServiceRoute = [
  {
    type: "title",
    key: "dashboard-title",
    title: "Dashboard",
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    collapse: [
      {
        key: "induction-flow",
        name: "Induction Flow",
        icon: <Icon fontSize="small">arrow_right</Icon>,
        route: "/dashboard/induction-flow",
        component: <InductionFlow />,
      },
      {
        key: "overall-pending",
        name: "Overall Pending",
        icon: <Icon fontSize="small">arrow_right</Icon>,
        route: "/dashboard/overall-pending",
        component: <OverallPending />,
      },
      {
        key: "halftime-journey",
        name: "Halftime Journey",
        icon: <Icon fontSize="small">arrow_right</Icon>,
        route: "/dashboard/halftime-journey",
        component: <HalftimeJourney />,
      },
      {
        key: "tail-end-journey",
        name: "Tail End Journey",
        icon: <Icon fontSize="small">arrow_right</Icon>,
        route: "/dashboard/tail-end-journey",
        component: <TailEndJourney />,
      },
    ],
  },
  {
    type: "divider",
    key: "dashboard-divider",
  },
  {
    type: "title",
    key: "task-title",
    title: "Task",
  },
  {
    type: "collapse",
    name: "Expiry Clients",
    key: "expiry-clients",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/expiry-clients",
    component: <ExpiryClient />,
  },
  {
    type: "collapse",
    name: "Maintenance",
    key: "maintenance",
    icon: <Icon fontSize="small">sports_soccer</Icon>,
    route: "/maintenance",
    component: <Maintenance />,
  },
  {
    type: "collapse",
    name: "OC Clients",
    key: "oc-clients",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/oc-clients",
    component: <OCClients />,
  },
  // {
  //   type: "divider",
  // },
  // {
  //   type: "title",
  //   title: "Quick Access",
  // },
  // {
  //   type: "collapse",
  //   name: "Engagement Section",
  //   key: "drafts",
  //   icon: <Icon fontSize="small">ImageIcon</Icon>,
  //   route: "/drafts",
  //   component: <EngagementSection />,
  // },
  // {
  //   type: "collapse",
  //   name: "Documentations",
  //   key: "documentations",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/documentations",
  //   component: <SpeenWheel />,
  // },
  // {
  //   type: "divider",
  // },
  // {
  //   type: "title",
  //   title: "Leads",
  // },
  // {
  //   type: "collapse",
  //   name: "Sales Work",
  //   key: "sales-work",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/sales-work",
  //   component: <SpeenWheel />,
  // },
];

export default clientServiceRoute;
