import { Badge, Icon, IconButton, Tooltip, useTheme } from "@mui/material";
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
    <Badge badgeContent={2} color={"warning"} overlap="circular">
      <NavbarButtonWithOverlay
        tooltipTitle="Add Task"
        openDialog={openDialog}
        Icon={TbPlus}
        subChildren={
          <AddTaskDialog
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            theme={theme}
          />
        }
      >
        <TaskTable
          theme={theme}
          handleOpenSubChildDialog={handleOpenSubChildDialog}
        />
      </NavbarButtonWithOverlay>
      {/* <Badge badgeContent={2} color={"warning"} overlap="circular">
        <Tooltip title="Add Task">
          <IconButton
            sx={navbarIconButton}
            disableRipple
            onClick={() => setShowDialog(true)}
          >
            <Icon sx={iconsStyle}>add_circle</Icon>
          </IconButton>
        </Tooltip>
      </Badge>
      <AddTaskDialog
        openDialog={showDialog}
        setOpenDialog={setShowDialog}
        dialogTitle="Add Task"
      />
      <TaskTable
        theme={theme}
        handleOpenSubChildDialog={handleOpenSubChildDialog}
      /> */}
    </Badge>
  );
}

export default AddDailyTaskOption;
