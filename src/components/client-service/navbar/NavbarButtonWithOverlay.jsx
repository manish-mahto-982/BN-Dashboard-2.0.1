import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  CardActions,
  Chip,
  ClickAwayListener,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Paper,
  Popover,
  Popper,
  Rating,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// assets
import { TbCalendarTime, TbStars } from "react-icons/tb";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Transitions from "../extended/Transitions";
import NavbarButton from "./NavbarButton";

// ==============================|| NOTIFICATION ||============================== //

const NavbarButtonWithOverlay = ({
  children,
  openDialog,
  subChildren,
  Icon,
  tooltipTitle = "",
}) => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different components and specifying one type leads to other components throwing an error
   **/
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    openDialog && setOpen(false);
  }, [openDialog]);
  return (
    <>
      <Box
        sx={{
          [theme.breakpoints.down("md")]: {
            mr: 0.5,
          },
        }}
      >
        <Tooltip title={tooltipTitle}>
          <ButtonBase sx={{ borderRadius: "12px" }} style={{ outline: "none" }}>
            <Avatar
              variant="rounded"
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                transition: "all .2s ease-in-out",
                color: theme.palette.secondary.main,
                
                borderRadius: "12px",
                background: "transparent",
              }}
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              color="inherit"
            >
              <Icon  />
            </Avatar>
          </ButtonBase>
        </Tooltip>
      </Box>
      <Popper
        placement={matchesXs ? "bottom" : "bottom-end"}
        open={open}
        sx={{
          zIndex: 20,
          position: "relative",
          boxShadow: "none",
        }}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [matchesXs ? 5 : 0, 20],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions
            position={matchesXs ? "top" : "top-right"}
            in={open}
            {...TransitionProps}
          >
            <Paper
              sx={{
                position: "relative",
                zIndex: 20,
                boxShadow: "none",
                overflow: "hidden",
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <Box>{children}</Box>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
      {subChildren}
      {/* Overlay */}
      <Dialog
        open={open || openDialog}
        sx={{ zIndex: 10, position: "absolute" }}
      />
    </>
  );
};

export default NavbarButtonWithOverlay;
