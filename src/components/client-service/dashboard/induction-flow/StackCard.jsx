import { Box, Divider, Typography } from "@mui/material";
import { FaRegCircleUser } from "react-icons/fa6";
import React, { useEffect } from "react";
import FlexBoxBetween from "../../common/FlexBoxBetween";
import MDTypography from "src/components/theme/common/MDTypography";

function StackCard({
  bgcolor,
  Icon,
  cardData=[],
  color = "white",
  title = "",
  handleClick = () => {},
}) {
  //FIXME: create custom hook for this

  return (
    <Box>
      <Box
        bgcolor={bgcolor}
        py={2.5}
        position={"relative"}
        color={"#fff"}
        overflow={"hidden"}
      >
        <Icon
          size={74}
          style={{
            position: "absolute",
            bottom: -12,
            left: -8,
            rotate: "30deg",
            opacity: 0.42,
            color: "text",
          }}
        />
        <MDTypography
          color={"white"}
          textAlign={"center"}
          fontSize={"1.25rem"}
          fontWeight={"bold"}
        >
          60
        </MDTypography>
        <MDTypography color={"white"} textAlign={"center"} fontSize={15}>
          {title}
        </MDTypography>
      </Box>
      <FlexBoxBetween
        justifyContent={"space-around"}
        textAlign={"center"}
        sx={{ mt: { md: 3 }, p: 3 }}
      >
        {cardData.map((item, index) => {
          let trigger;
          let res;
          if (item.fetchQuery) {
            [trigger, res] = item.fetchQuery?.();
          }
          const handleButtonClick = () => {
            trigger?.();
          };
          useEffect(() => {
            res?.data && handleClick(res, item.columns);
          }, [res]);
          return (
            <React.Fragment key={item.title}>
              <Box
                onClick={handleButtonClick}
                bgcolor={"unset"}
                border={"unset"}
                color={"unset"}
                sx={{
                  cursor: "pointer",
                  ":hover": { color: bgcolor },
                  transition: "linear",
                  transitionDuration: "300ms",
                }}
                component={"button"}
              >
                <MDTypography fontSize={24} fontWeight={"bold"}>
                  {item.count}
                </MDTypography>
                <MDTypography variant="">{item.title}</MDTypography>
              </Box>
              {index + 1 < cardData.length && (
                <Divider
                  orientation="vertical"
                  sx={{ height: "50px", width: "1px" }}
                />
              )}
            </React.Fragment>
          );
        })}
      </FlexBoxBetween>
    </Box>
  );
}

export default StackCard;
