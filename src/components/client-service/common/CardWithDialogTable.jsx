import { Card } from "@mui/material";
import React from "react";
import MDTypography from "src/components/theme/common/MDTypography";

function CardWithDialogTable({cardTitle=""}) {
  return (
    <Card>
      <MDTypography
        p={2}
        fontSize={"1.125rem"}
        color={
          cardTitle.includes("Final Reminder (Not Received)") ? "#f00" : "unset"
        }
        fontWeight={500}
      >
        {cardTitle}
      </MDTypography>
    </Card>
  );
}

export default CardWithDialogTable;
