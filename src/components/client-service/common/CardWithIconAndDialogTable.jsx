import { Card, Divider, useTheme } from "@mui/material";
import React from "react";
import MDTypography from "src/components/theme/common/MDTypography";
import FlexBoxBetween from "./FlexBoxBetween";
import MDBox from "src/components/theme/common/MDBox";
import classNames from "classnames";
import { noStyleBtnProps } from "src/utils/constants";
import { useMaterialUIController } from "src/context";
import useHandleTable from "src/hooks/useHandleTable";
function CardWithIconAndDialogTable({
  cardTitle = "",
  data = [],
  handleClick,
}) {
  const theme = useTheme();
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;
  return (
    <Card className={`mt-4`}>
      <MDTypography
        // borderBottom={`1px solid ${theme.palette.divider}`}
        variant="h6"
        color={
          cardTitle.includes("Final Reminder (Not Received)") ? "error" : "dark"
        }
        fontWeight={"medium"}
        className={`px-5 pb-4 pt-5`}
        sx={{ borderBottom: "1px solid", borderColor: "divider" }}
      >
        {cardTitle}
      </MDTypography>
      {data.map(({ Icon, ...item }, index) => {
        const [handleButtonClick] = useHandleTable(item, handleClick);
        return (
          <React.Fragment key={item.title}>
            <FlexBoxBetween
              {...noStyleBtnProps}
              component="button"
              onClick={handleClick && handleButtonClick}
              className={classNames(
                "m-2 cursor-pointer rounded-lg px-4 py-1 transition-all duration-300 hover:bg-zinc-100 active:bg-transparent",
                { "hover:bg-opacity-10": darkMode },
              )}
            >
              <FlexBoxBetween className={"gap-x-3"}>
                <MDBox
                  variant="gradient"
                  bgColor={darkMode ? "secondary" : "dark"}
                  className={
                    "flex h-11 w-11 items-center justify-center rounded-xl"
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
        );
      })}
    </Card>
  );
}

export default CardWithIconAndDialogTable;
