import { Card, Divider, useTheme } from "@mui/material";
import React from "react";
import MDTypography from "src/components/theme/common/MDTypography";
import FlexBoxBetween from "./FlexBoxBetween";
import MDBox from "src/components/theme/common/MDBox";

function CardWithDialogTable({ cardTitle = "" }) {
  const theme = useTheme();
  return (
    <Card className={`mt-4`}>
      <MDBox
        variant="gradient"
        bgColor="info"
        className={`rounded-xl -mt-4 mx-3 w-fit p-3`}
      >
        <MDTypography
          // borderBottom={`1px solid ${theme.palette.divider}`}
          variant="h6"
          color={
            cardTitle.includes("Final Reminder (Not Received)")
              ? "error"
              : "white"
          }
          fontWeight={"medium"}
        >
          {cardTitle}
        </MDTypography>
      </MDBox>
      <FlexBoxBetween
        className={`hover:bg-zinc-50 dark:hover:bg-opacity-10 mx-2 rounded-lg transition-all`}
        px={2}
        py={2}
      >
        <MDTypography fontSize="14px" fontWeight="bold">
          Hello
        </MDTypography>
        <MDTypography fontSize="14px" fontWeight="bold">
          23
        </MDTypography>
      </FlexBoxBetween>
      <Divider sx={{ borderColor: "#000", my: 0, opacity: 0.6 }} />

      <FlexBoxBetween
        className={`hover:bg-zinc-100  mx-2 rounded-lg transition-all`}
        px={2}
        py={2}
        mb={2}
      >
        <MDTypography fontSize="14px" fontWeight="bold">
          Hello
        </MDTypography>
        <MDTypography fontSize="14px" fontWeight="bold">
          23
        </MDTypography>
      </FlexBoxBetween>
    </Card>
  );
}

export default CardWithDialogTable;
