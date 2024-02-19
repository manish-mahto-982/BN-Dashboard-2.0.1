import { Box, Card, Divider, useTheme } from "@mui/material";
import React from "react";
import MDTypography from "src/components/theme/common/MDTypography";
import FlexBoxBetween from "./FlexBoxBetween";
import MDBox from "src/components/theme/common/MDBox";
import classNames from "classnames";
import { noStyleBtnProps } from "src/utils/constants";
import { useMaterialUIController } from "src/context";
import useHandleTable from "src/hooks/useHandleTable";
function CardWithDialogTable({
  cardTitle = "",
  titleType = "gradient" || "normal",
  data = [],
  handleClick,
}) {
  const [controller] = useMaterialUIController();

  const { darkMode } = controller;
  const theme = useTheme();

  return (
    <Card className={`mt-4`}>
      {titleType === "gradient" ? (
        <MDBox
          variant="gradient"
          bgColor="info"
          className={`mx-3 -mt-4 w-fit rounded-xl p-3 `}
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
          className={`px-5 pb-4 pt-5`}
          sx={{ borderBottom: "1px solid", borderColor: "divider" }}
        >
          {cardTitle}
        </MDTypography>
      )}

      {data.map((item, index) => {
        const [handleButtonClick] = useHandleTable(item, handleClick);

        return (
          <React.Fragment key={item.title}>
            <FlexBoxBetween
              {...noStyleBtnProps}
              component="button"
              onClick={handleClick && handleButtonClick}
              className={classNames(
                "mx-2 my-1 cursor-pointer rounded-lg px-4 py-2.5 transition-all duration-300 hover:bg-zinc-100 active:bg-transparent",
                { "hover:bg-opacity-10": darkMode },
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
        );
      })}
    </Card>
  );
}

export default CardWithDialogTable;
