import React, { useMemo } from "react";
import CSLayout from "../layout";
import { randomNumberGenerator } from "src/utils/helper";
import CardWithDialogTable from "src/components/client-service/common/CardWithDialogTable";
import { Grid } from "@mui/material";
import { useMaterialUIController } from "src/context";

function HalftimeJourney() {
  const [controller] = useMemo(
    () => useMaterialUIController(),
    [useMaterialUIController],
  );

  const { darkMode } = controller;

  return (
    <CSLayout>
      <Grid container rowGap={3} columnGap={3}>
        {Object.entries(cardData).map(([cardTitle, data]) => (
          <Grid key={cardTitle} item xs={12} lg={3.8}>
            <CardWithDialogTable titleType="normal" {...{ cardTitle, data }} />
          </Grid>
        ))}
      </Grid>
    </CSLayout>
  );
}

export default HalftimeJourney;

const cardData = {
  "Today Received": [
    { title: "HT Health Score", value: 21 },
    { title: "HT Feedback", value: 21 },
    { title: "HT Call", value: 21 },
  ],
  "1st Reminder (Not Received)": [
    { title: "HT Health Score", value: 1 },
    { title: "HT Feedback", value: 21 },
    { title: "HT Call", value: 2 },
  ],
  "2nd Reminder (Not Received)": [
    { title: "HT Health Score", value: 3 },
    { title: "HT Feedback", value: 4 },
    { title: "HT Call", value: 2 },
  ],
  "3rd Reminder (Not Received)": [
    { title: "HT Health Score", value: 5 },
    { title: "HT Feedback", value: 2 },
    { title: "HT Call", value: 1 },
  ],
  "4th Reminder (Not Received)": [
    { title: "HT Health Score", value: randomNumberGenerator() },
    { title: "HT Feedback", value: randomNumberGenerator() },
    { title: "HT Call", value: randomNumberGenerator() },
  ],
  "Final Reminder (Not Received)": [
    { title: "HT Health Score", value: randomNumberGenerator() },
    { title: "HT Feedback", value: randomNumberGenerator() },
    { title: "HT Call", value: randomNumberGenerator() },
  ],
};
