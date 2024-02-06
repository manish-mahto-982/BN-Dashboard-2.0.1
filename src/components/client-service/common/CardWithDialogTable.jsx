import { Box, Card, Divider, useTheme } from "@mui/material";
import React from "react";
import MDTypography from "src/components/theme/common/MDTypography";
import FlexBoxBetween from "./FlexBoxBetween";
import MDBox from "src/components/theme/common/MDBox";
import classNames from "classnames";
import { noStyleBtnProps } from "src/utils/constants";
function CardWithDialogTable({
  cardTitle = "",
  titleType = "gradient" || "normal",
  darkMode,
  data = [],
}) {
  const theme = useTheme();
  return (
    <Card className={`mt-4`}>
      {titleType === "gradient" ? (
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
      ) : (
        <MDTypography
          // borderBottom={`1px solid ${theme.palette.divider}`}
          variant="h6"
          color={
            cardTitle.includes("Final Reminder (Not Received)")
              ? "error"
              : "dark"
          }
          fontWeight={"medium"}
          className={`px-5 pt-5 pb-4`}
          sx={{ borderBottom: "1px solid", borderColor: "divider" }}
        >
          {cardTitle}
        </MDTypography>
      )}

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
            <MDTypography
              component="span"
              fontSize="14px"
              fontWeight="light"
              color={
                item.title.includes("19th Day +") ||
                item.title.includes("Over Due")
                  ? "error"
                  : "dark"
              }
            >
              {item.title.includes("(") ? (
                <FlexBoxBetween>
                  {item.title.split("(")[0]}&nbsp;
                  <MDTypography
                    component="span"
                    bgcolor={
                      item.title.includes("On Hold (OD)")
                        ? "rgba(255,0,0,0.1)"
                        : theme.palette.background.default
                    }
                    width={"fit-content"}
                    px={2}
                    py={0.32}
                    // border={`1px solid ${
                    //   darkMode
                    //     ? item.title.includes("On Hold (OD)")
                    //       ? "unset"
                    //       : "rgba(255,255,255,0.1)"
                    //     : item.title.includes("On Hold (OD)")
                    //     ? "unset"
                    //     : "rgba(0,0,0,0.07)"
                    // }`}
                    color={
                      item.title.includes("On Hold (OD)") ? "error" : "text"
                    }
                    fontSize={11}
                    borderRadius={20}
                  >
                    {`${item.title.split("(")[1]}`.slice(0, -1)}
                  </MDTypography>
                </FlexBoxBetween>
              ) : (
                item.title
              )}
            </MDTypography>

            <MDTypography
              fontSize="14px"
              fontWeight="bold"
              color={
                item.title.includes("19th Day +") ||
                item.title.includes("Over Due")
                  ? "error"
                  : "text"
              }
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

export default CardWithDialogTable;
