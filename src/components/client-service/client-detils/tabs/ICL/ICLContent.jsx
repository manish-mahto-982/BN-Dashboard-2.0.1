import { TextField, useTheme } from "@mui/material";
import React from "react";

const NaturalSpicesContent = React.lazy(
  () => import("./content/NaturalSpicesContent"),
);
const SnackContent = React.lazy(() => import("./content/SnackContent"));
const CerealsContent = React.lazy(() => import("./content/CerealsContent"));
const GroceryContent = React.lazy(() => import("./content/GroceryContent"));
import VerticalTabs from "src/components/client-service/common/VerticalTabs";

export default function ICLContent() {
  const theme = useTheme();
  return <VerticalTabs tabsHeight="180px" theme={theme} tabs={iclTabs} />;
}

const iclTabs = [
  {
    label: "Natural Spices",
    tabComponent: (
      <React.Suspense fallback={"loading..."}>
        <NaturalSpicesContent />
      </React.Suspense>
    ),
  },
  {
    label: "Snacks",
    tabComponent: (
      <React.Suspense fallback={"loading..."}>
        <SnackContent />
      </React.Suspense>
    ),
  },
  {
    label: "Cereals",
    tabComponent: (
      <React.Suspense fallback={"loading..."}>
        <CerealsContent />
      </React.Suspense>
    ),
  },
  {
    label: "Grocery",
    tabComponent: (
      <React.Suspense fallback={"loading..."}>
        <GroceryContent />
      </React.Suspense>
    ),
  },
];
