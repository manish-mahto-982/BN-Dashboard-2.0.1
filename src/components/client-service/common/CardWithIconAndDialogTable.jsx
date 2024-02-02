import { Card, Divider, useTheme } from "@mui/material";
import React from "react";
import MDTypography from "src/components/theme/common/MDTypography";
import FlexBoxBetween from "./FlexBoxBetween";
import MDBox from "src/components/theme/common/MDBox";
import classNames from "classnames";
import { noStyleBtnProps } from "src/utils/constants";
function CardWithIconAndDialogTable({ cardTitle = "", darkMode, data = [] }) {
  const theme = useTheme();
  return (
    <Card className={`mt-4`}>
      <MDTypography
        // borderBottom={`1px solid ${theme.palette.divider}`}
        variant="h6"
        color={
          cardTitle.includes("Final Reminder (Not Received)") ? "error" : "dark"
        }
        fontWeight={"medium"}
        className={`px-5 pt-5 pb-4`}
        sx={{ borderBottom: "1px solid", borderColor: "divider" }}
      >
        {cardTitle}
      </MDTypography>
      {data.map(({ Icon, ...item }, index) => (
        <React.Fragment key={item.title}>
          <FlexBoxBetween
            {...noStyleBtnProps}
            component="button"
            className={classNames(
              "hover:bg-zinc-100 cursor-pointer active:bg-transparent rounded-lg px-4 py-1 m-2 duration-300 transition-all",
              { "hover:bg-opacity-10": darkMode }
            )}
          >
            <FlexBoxBetween className={"gap-x-3"}>
              <MDBox
                variant="gradient"
                bgColor={darkMode ? "secondary" : "dark"
                }
                className={
                  "rounded-xl flex items-center justify-center w-11 h-11"
                }
              >
                <Icon size={20} className={"stroke-white"} />
              </MDBox>
              <MDTypography fontSize="14px" fontWeight="light">
                {item.title}
              </MDTypography>
            </FlexBoxBetween>
            <MDTypography fontSize="14px" fontWeight="bold">
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

export default CardWithIconAndDialogTable;
