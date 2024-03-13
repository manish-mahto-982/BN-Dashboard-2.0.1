import {
  Backdrop,
  Badge,
  Box,
  Icon,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { TbPlus } from "react-icons/tb";
import NavbarButtonWithOverlay from "src/components/client-service/navbar/NavbarButtonWithOverlay";
import {
  AddReminderDialog as AddTaskDialog,
  ReminderTable as TaskTable,
} from "src/components/client-service/navbar/ReminderSection";
import { navbarIconButton } from "src/components/theme/layout/Navbars/DashboardNavbar/styles";
import useShowDialog from "src/hooks/useShowDialog";
function AddDailyTaskOption({ light, darkMode, transparentNavbar }) {
  const [openDialog, setOpenDialog] = useShowDialog(false);
  const [openTableDialog, setOpenTableDialog] = useShowDialog(false);
  const theme = useTheme();
  const handleOpenSubChildDialog = () => {
    setOpenDialog(true);
    setOpenTableDialog(false);
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
            onClick={() => setOpenTableDialog(true)}
          >
            <Icon sx={iconsStyle}>add_circle</Icon>
          </IconButton>
        </Tooltip>
      </Badge>
      <AddTaskDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        dialogTitle="Add Task"
      />
      {openTableDialog && (
        <div className="absolute -left-6 -top-[33px] h-[100vh] w-[100vw] bg-black bg-opacity-20 ">
          <Box className="absolute right-72  top-24 w-28 ">
            <TaskTable
              tableTitle="Tasks"
              theme={theme}
              handleOpenSubChildDialog={handleOpenSubChildDialog}
            />
          </Box>
        </div>
      )}
    </>
  );
}

export default AddDailyTaskOption;
