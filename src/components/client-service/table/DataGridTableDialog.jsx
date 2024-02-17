import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, useTheme } from "@mui/material";
import { useMaterialUIController } from "src/context";

export const TransitionSlidUp = React.forwardRef(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  },
);

const DataGridTableDialog = React.memo(
  ({ title = "", open, setOpen, dataGrid }) => {
    const theme = useTheme();
    const handleClose = () => {
      setOpen(false);
    };

    const [controller] = useMaterialUIController();

    const {
      openConfigurator,
      fixedNavbar,
      sidenavColor,
      transparentSidenav,
      whiteSidenav,
      darkMode,
    } = React.useMemo(() => controller, [controller]);

    return (
      <>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={TransitionSlidUp}
        >
          <AppBar
            elevation={0}
            color={sidenavColor}
            sx={{ position: "relative" }}
          >
            <Toolbar>
              <Typography
                sx={{ ml: 2, flex: 1, textTransform: "capitalize" }}
                fontSize={16}
                color={"#fff"}
                component="div"
              >
                {title}
              </Typography>
              <IconButton
                edge="start"
                onClick={handleClose}
                aria-label="close"
                style={{ outline: "none" }}
              >
                <CloseIcon style={{ fill: "#fff" }} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              p: { xs: 1, sm: 2, md: 3, lg: 4 },
              height: "100%",
              overflow: "scroll",
              backgroundColor: "background.default",
            }}
          >
            {dataGrid}
          </Box>
        </Dialog>
      </>
    );
  },
);

export default DataGridTableDialog;
