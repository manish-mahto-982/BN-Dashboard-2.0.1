import { TextField, useTheme } from "@mui/material";
import React from "react";
import PersonalDetailsContent from "./content/PersonalDetailsContent";
import NutritionLifestyleAndAnalysisContent from "./content/NutritionLifestyleAndAnalysisContent";
import TwentyFourHourDietRecall from "./content/TwentyFourHourDietRecall";
import FoodFrequency from "./content/FoodFrequency";
import UploadPhoto from "./content/UploadPhoto";
import MedicalHistory from "./content/MedicalHistory";
import NoteToMentorAndKhyati from "./content/NoteToMentorAndKhyati";
import FastingMethod from "./content/FastingMethod";
import VerticalTabs from "src/components/client-service/common/VerticalTabs";

export default function AssessmentContent() {
  const theme = useTheme();
  return (
    <VerticalTabs
      theme={theme}
      tabs={[
        {
          label: "Personal Details",
          tabComponent: <PersonalDetailsContent theme={theme} />,
        },
        {
          label: "Nutrition Lifestyle and Analysis",
          tabComponent: <NutritionLifestyleAndAnalysisContent theme={theme} />,
        },
        {
          label: "24 Hour Diet Recall",
          tabComponent: <TwentyFourHourDietRecall theme={theme} />,
        },
        {
          label: "Food Frequency",
          tabComponent: <FoodFrequency theme={theme} />,
        },
        { label: "Upload Photo", tabComponent: <UploadPhoto theme={theme} /> },
        {
          label: "Medical History",
          tabComponent: <MedicalHistory theme={theme} />,
        },
        {
          label: "Note to Mentor & Khyati",
          tabComponent: <NoteToMentorAndKhyati theme={theme} />,
        },
        {
          label: "Fasting Method (Intermittent Fasting)",
          tabComponent: <FastingMethod theme={theme} />,
        },
      ]}
    />
  );
}

const Card = () => {
  return;
};
