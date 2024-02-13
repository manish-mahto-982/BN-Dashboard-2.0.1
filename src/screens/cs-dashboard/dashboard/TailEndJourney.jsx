import React from "react";
import CSLayout from "../layout";
import { randomNumberGenerator } from "src/utils/helper";
import CardWithDialogTable from "src/components/client-service/common/CardWithDialogTable";
import { Grid } from "@mui/material";

function TailEndJourney() {
  return (
    <CSLayout>
      <Grid container spacing={3}>
        {Object.entries(cardData).map(([cardTitle, data]) => (
          <Grid key={cardTitle} item xs={12} sm={6} lg={4}>
            <CardWithDialogTable titleType="normal" {...{ cardTitle, data }} />
          </Grid>
        ))}
      </Grid>
    </CSLayout>
  );
}

export default TailEndJourney;

const cardData = {
  "Today Received": [
    { title: "Goal", value: randomNumberGenerator() },
    { title: "TE Health Score", value: 21 },
    { title: "TE Feedback", value: 21 },
    { title: "TE Call", value: 21 },
  ],
  "1st Reminder (Not Received)": [
    { title: "Goal", value: randomNumberGenerator() },
    { title: "TE Health Score", value: 1 },
    { title: "TE Feedback", value: 21 },
    { title: "TE Call", value: 2 },
  ],
  "2nd Reminder (Not Received)": [
    { title: "Goal", value: randomNumberGenerator() },
    { title: "TE Health Score", value: 3 },
    { title: "TE Feedback", value: 4 },
    { title: "TE Call", value: 2 },
  ],
  "3rd Reminder (Not Received)": [
    { title: "Goal", value: randomNumberGenerator() },
    { title: "TE Health Score", value: 5 },
    { title: "TE Feedback", value: 2 },
    { title: "TE Call", value: 1 },
  ],
  "4th Reminder (Not Received)": [
    { title: "Goal", value: randomNumberGenerator() },
    { title: "TE Health Score", value: randomNumberGenerator() },
    { title: "TE Feedback", value: randomNumberGenerator() },
    { title: "TE Call", value: randomNumberGenerator() },
  ],
  "Final Reminder (Not Received)": [
    { title: "Goal", value: randomNumberGenerator() },
    { title: "TE Health Score", value: randomNumberGenerator() },
    { title: "TE Feedback", value: randomNumberGenerator() },
    { title: "TE Call", value: randomNumberGenerator() },
  ],
};

