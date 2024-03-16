import { Badge, Icon, IconButton, Tooltip, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TbPhone, TbPlus } from "react-icons/tb";
import NavbarButtonWithOverlay from "src/components/client-service/navbar/NavbarButtonWithOverlay";

import { navbarIconButton } from "src/components/theme/layout/Navbars/DashboardNavbar/styles";
import useShowDialog from "src/hooks/useShowDialog";
function BlockCallOption({ light, darkMode, transparentNavbar }) {
  const [openDialog, setOpenDialog] = useShowDialog(false);
  const theme = useTheme();
  const handleOpenSubChildDialog = () => {
    setOpenDialog(true);
    return openDialog;
  };

  return (
    <>
      <NavbarButtonWithOverlay
        tooltipTitle="Block Call"
        openDialog={openDialog}
        Icon={TbPhone}
        subChildren={<></>}
      >
        {/* <TaskTable
          theme={theme}
          handleOpenSubChildDialog={handleOpenSubChildDialog}
        /> */}
      </NavbarButtonWithOverlay>
    </>
  );
}

export default BlockCallOption;
