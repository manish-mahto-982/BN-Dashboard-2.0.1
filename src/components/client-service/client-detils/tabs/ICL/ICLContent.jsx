import { TextField, useTheme } from "@mui/material";
import React from "react";

import NaturalSpicesContent from "./content/NaturalSpicesContent";
import SnackContent from "./content/SnackContent";
import CerealsContent from "./content/CerealsContent";
import GroceryContent from "./content/GroceryContent";
import VerticalTabs from "src/components/client-service/common/VerticalTabs";

export default function ICLContent() {
  const theme = useTheme();
  return <VerticalTabs tabsHeight="180px" theme={theme} tabs={iclTabs} />;
}

const iclTabs = [
  {
    label: "Natural Spices",
    tabComponent: <NaturalSpicesContent />,
  },
  {
    label: "Snacks",
    tabComponent: <SnackContent />,
  },
  {
    label: "Cereals",
    tabComponent: <CerealsContent />,
  },
  {
    label: "Grocery",
    tabComponent: <GroceryContent />,
  },
];
