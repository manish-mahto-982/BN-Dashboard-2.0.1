import {
  Badge,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Icon,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  useTheme,
} from "@mui/material";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { TbPhone, TbPlus, TbX } from "react-icons/tb";
import CustomDialog from "src/components/client-service/common/CustomDialog";
import FlexBoxBetween from "src/components/client-service/common/FlexBoxBetween";
import PrimaryButton from "src/components/client-service/common/PrimaryButton";
import NavbarButtonWithOverlay from "src/components/client-service/navbar/NavbarButtonWithOverlay";
import { TransitionSlidUp } from "src/components/client-service/table/DataGridTableDialog";
import MDTypography from "src/components/theme/common/MDTypography";

import { navbarIconButton } from "src/components/theme/layout/Navbars/DashboardNavbar/styles";
import useShowDialog from "src/hooks/useShowDialog";
import {
  api as salesApi,
  useLazyGetBlockCallQuery,
} from "src/services/sales/api";
function BlockCallOption({ light, darkMode, transparentNavbar }) {
  const [openDialog, setOpenDialog] = useShowDialog(false);
  const [openCallDetailsDialog, setOpenCallDetailsDialog] =
    useShowDialog(false);
  const [getBlockCall, { data, isLoading }] = useLazyGetBlockCallQuery();
  console.log("🚀 ~ BlockCallOption ~ data:", data);
  const theme = useTheme();
  const handleOpenSubChildDialog = () => {
    setOpenDialog(true);
    return openDialog;
  };

  const iconsStyle = ({
    palette: { dark, white, text },
    functions: { rgba },
  }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;
      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }
      return colorValue;
    },
  });

  return (
    <>
      <Badge badgeContent={2} color={"warning"} overlap="circular">
        <Tooltip title="Add Task">
          <IconButton
            sx={navbarIconButton}
            disableRipple
            onClick={() => {
              setOpenDialog(true);
              getBlockCall();
            }}
          >
            <Icon sx={iconsStyle}>call</Icon>
          </IconButton>
        </Tooltip>
      </Badge>
      {openDialog && (
        <BlockCallDialog
          {...{
            openDialog,
            setOpenDialog,
            setOpenCallDetailsDialog,
            dialogTitle: "Block Your Calls For 10 Days (Mar)",
            data,
            isLoading,
          }}
        />
      )}
      <CallDetailsDialog
        {...{
          setOpenCallDetailsDialog,
          openCallDetailsDialog,
          dialogTitle: "Enter Call Details",
        }}
      />
      {/* <NavbarButtonWithOverlay
        tooltipTitle="Block Call"
        openDialog={openDialog}
        Icon={TbPhone}
        subChildren={<></>}
      > */}
      {/* <TaskTable
          theme={theme}
          handleOpenSubChildDialog={handleOpenSubChildDialog}
        /> */}
      {/* </NavbarButtonWithOverlay> */}
    </>
  );
}

export default BlockCallOption;

const BlockCallDialog = ({
  openDialog,
  setOpenDialog,
  dialogTitle,
  setOpenCallDetailsDialog,
  data = [],
}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClose = () => setOpenDialog(false);
  return (
    <Dialog
      open={openDialog}
      onClose={handleClose}
      TransitionComponent={TransitionSlidUp}
      sx={{ maxHeight: "460px" }}
    >
      <DialogTitle
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        color={"#fff"}
        bgcolor={"info.main"}
        sx={{ fontSize: "16px" }}
      >
        {dialogTitle}
        <IconButton onClick={handleClose}>
          <TbX stroke="#fff" />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ maxWidth: "350px" }}>
        <div className="py-2">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabScrollButtonProps={{ style: { fill: "black", opacity: 1 } }}
              sx={{
                ".MuiButtonBase-root.MuiTab-root": { width: "100px" },
                ".MuiTabs-flexContainer": {
                  width: "fit-content",
                },
              }}
            >
              {Array.from({ length: 10 }).map((_, index) => (
                <Tab
                  label={dayjs().add(index, "day").format("DD ddd")}
                  {...a11yProps(0)}
                />
              ))}
            </Tabs>
          </Box>
        </div>
        <MDTypography fontSize="small" color="error" className="text-center">
          {"- All call timings are as per Indian time zone (IST)."}
        </MDTypography>
        <CustomTabPanel value={value} index={0}>
          <div className="flex flex-col gap-y-3">
            {data?.data?.appointment_list?.map((item) => (
              <FlexBoxBetween>
                <MDTypography fontSize="small">
                  {item.appointment_slots}
                </MDTypography>
                <PrimaryButton
                  size="small"
                  onClick={() => setOpenCallDetailsDialog(true)}
                >
                  Book Now
                </PrimaryButton>
              </FlexBoxBetween>
            ))}
          </div>
        </CustomTabPanel>
      </DialogContent>
    </Dialog>
  );
};

const CallDetailsDialog = ({
  openCallDetailsDialog,
  setOpenCallDetailsDialog,
  dialogTitle,
}) => {
  const handleClose = () => setOpenCallDetailsDialog(false);
  return (
    <Dialog
      open={openCallDetailsDialog}
      TransitionComponent={TransitionSlidUp}
      sx={{ maxHeight: "460px" }}
    >
      <DialogTitle
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        color={"#fff"}
        bgcolor={"info.main"}
        sx={{ fontSize: "16px" }}
      >
        {dialogTitle}
        <IconButton onClick={handleClose}>
          <TbX stroke="#fff" />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ maxWidth: "350px" }}></DialogContent>
    </Dialog>
  );
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <MDTypography>{children}</MDTypography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
