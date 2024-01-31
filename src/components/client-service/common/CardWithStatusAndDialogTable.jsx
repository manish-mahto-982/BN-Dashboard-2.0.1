import { Box, Card, Divider, useTheme } from "@mui/material";
import React from "react";
import MDTypography from "src/components/theme/common/MDTypography";
import FlexBoxBetween from "./FlexBoxBetween";
import MDBox from "src/components/theme/common/MDBox";
import classNames from "classnames";
import { noStyleBtnProps } from "src/utils/constants";
function CardWithStatusAndDialogTable({ cardTitle = "", darkMode, data = [] }) {
  const theme = useTheme();
  return (
    <Card className={`mt-4`}>
      <MDBox
        variant="gradient"
        bgColor="info"
        className={`rounded-xl -mt-4 mx-3 w-fit p-3 `}
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
      {data.map((item, index) => (
        <React.Fragment key={item.title}>
          <FlexBoxBetween
            {...noStyleBtnProps}
            component="button"
            className={classNames(
              "hover:bg-zinc-100 cursor-pointer active:bg-transparent rounded-lg px-4 py-2.5 mx-2 my-1 duration-300 transition-all",
              { "hover:bg-opacity-10": darkMode }
            )}
          >
            <FlexBoxBetween columnGap={2}>
              <MDTypography fontSize="14px" fontWeight="bold">
                {item.title}
              </MDTypography>
              {
                <Box
                  borderRadius={100}
                  px={1.5}
                  py={0.3}
                  bgcolor={
                    item.active
                      ? "rgba(46, 204, 113,0.15);"
                      : "rgba(255, 76, 48,0.15);"
                  }
                >
                  <MDTypography
                    fontSize={"12px"}
                    color={item.active ? "success" : "error"}
                  >
                    {item.active ? "Active" : "Not Active"}
                  </MDTypography>
                </Box>
              }
            </FlexBoxBetween>
            {/* <MDTypography fontSize="14px" fontWeight="light">
              {item.title}
            </MDTypography> */}
            <MDTypography
              fontSize="14px"
              fontWeight="bold"
              color={item.title.includes("19th Day +") ||
              item.title.includes("Over Due")?'error':'text'}
            >
              {item.value}
            </MDTypography>
          </FlexBoxBetween>
          {index < data.length - 1 && (
            <Divider sx={{ borderColor: "#000", my: 0, opacity: 0.6 }} />
          )}
        </React.Fragment>
      ))}
    </Card>
  );
}

export default CardWithStatusAndDialogTable;
