import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "src/components/theme/common//MDBox";
import MDInput from "src/components/theme/common//MDInput";

// Material Dashboard 2 React example components
import Breadcrumbs from "../../Breadcrumbs";
import NotificationItem from "../../Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "src/components/theme/layout/Navbars/DashboardNavbar/styles";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "src/context";
import AddLead from "./TopbarPopup/AddLead";
import ConsultationBooked from "./TopbarPopup/ConsultationBooked";
import MDButton from "src/components/theme/common//MDButton";
import Tooltip from "@mui/material/Tooltip";
function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    transparentNavbar,
    fixedNavbar,
    openConfigurator,
    darkMode,
  } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(
        dispatch,
        (fixedNavbar && window.scrollY === 0) || !fixedNavbar
      );
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () =>
    setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem
        icon={<Icon>podcasts</Icon>}
        title="Manage Podcast sessions"
      />
      <NotificationItem
        icon={<Icon>shopping_cart</Icon>}
        title="Payment successfully completed"
      />
    </Menu>
  );

  // Styles for the navbar icons
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

  const enhancedIconButtonStyle = {
    borderRadius: "50%", // Make it a circley
    // border: "1px solid red",
    width: "40px", // Adjust the size of the circle as needed
    height: "40px", // Adjust the size of the circle as needed
    margin: "0 8px", // Add spacing between icons
    padding: "5px", // Adjust the padding as needed
    background: light ? "#d0d6ea" : "#d0d6ea", // Light green or dark background
    transition: "background 0.3s, box-shadow 0.3s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center the content
    "&:hover": {
      background: light ? "rgba(255,0,0,0.30)" : "rgba(255,0,0,0.30)", // Light green or darker hover color
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Add a box shadow on hover
    },
    "& .MuiIconButton-root": {
      padding: "0", // Set padding to 0 for the IconButton component
    },
    "& .MuiSvgIcon-root": {
      width: "100%", // Make the icon fill the entire width of the circle
      height: "100%", // Make the icon fill the entire height of the circle
      color: "#ffffff", // White icon color
    },
  };

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) =>
        navbar(theme, { transparentNavbar, absolute, light, darkMode })
      }
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox
          color="inherit"
          mb={{ xs: 1, md: 0 }}
          sx={(theme) => navbarRow(theme, { isMini })}
        >
          <Breadcrumbs
            icon="home"
            title={route[route.length - 1]}
            route={route}
            light={light}
          />
        </MDBox>
        {isMini ? null : (
          <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
            {/* <MDBox pr={1}>
              <AddLead />
            </MDBox>
            <MDBox   pr={1}>
              <ConsultationBooked />
            </MDBox> */}

            <MDBox
              color={light ? "white" : "inherit"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Link to="/authentication/sign-in/basic">
                <Tooltip title="Account">
                  <IconButton
                    sx={{ ...navbarIconButton, ...enhancedIconButtonStyle }}
                    size="medium"
                    disableRipple
                  >
                    <Icon sx={iconsStyle}>account_circle</Icon>
                  </IconButton>
                </Tooltip>
              </Link>
              <Tooltip title="Menu">
                <IconButton
                  size="medium"
                  disableRipple
                  color="inherit"
                  sx={{
                    ...navbarIconButton,
                    ...enhancedIconButtonStyle,
                    ...navbarMobileMenu,
                  }}
                  onClick={handleMiniSidenav}
                >
                  <Icon sx={iconsStyle} fontSize="medium">
                    {miniSidenav ? "menu_open" : "menu"}
                  </Icon>
                </IconButton>
              </Tooltip>
              <Tooltip title="Create Link">
                <IconButton
                  size="medium"
                  disableRipple
                  color="inherit"
                  sx={{ ...navbarIconButton, ...enhancedIconButtonStyle }}
                  aria-controls="link-menu"
                  aria-haspopup="true"
                  variant="contained"
                  onClick={handleMiniSidenav}
                >
                  <Icon sx={iconsStyle}>link</Icon>
                </IconButton>
              </Tooltip>
              <Tooltip title="Chat">
                <IconButton
                  size="medium"
                  disableRipple
                  color="inherit"
                  sx={{ ...navbarIconButton, ...enhancedIconButtonStyle }}
                  aria-controls="chat-menu"
                  aria-haspopup="true"
                  variant="contained"
                  onClick={handleMiniSidenav}
                >
                  <Icon sx={iconsStyle}>chat</Icon>
                </IconButton>
              </Tooltip>
              <Tooltip title="Add Daily Task">
                <IconButton
                  size="medium"
                  disableRipple
                  color="inherit"
                  sx={{ ...navbarIconButton, ...enhancedIconButtonStyle }}
                  aria-controls="add-task-menu"
                  aria-haspopup="true"
                  variant="contained"
                  onClick={handleMiniSidenav}
                >
                  <Icon sx={iconsStyle}>add_circle</Icon>
                </IconButton>
              </Tooltip>
              <Tooltip title="Send Review">
                <IconButton
                  size="medium"
                  disableRipple
                  color="inherit"
                  sx={{ ...navbarIconButton, ...enhancedIconButtonStyle }}
                  aria-controls="send-review-menu"
                  aria-haspopup="true"
                  variant="contained"
                  onClick={handleMiniSidenav}
                >
                  <Icon sx={iconsStyle}>send</Icon>
                </IconButton>
              </Tooltip>
              <Tooltip title="Notification">
                <IconButton
                  size="medium"
                  disableRipple
                  color="inherit"
                  sx={{ ...navbarIconButton, ...enhancedIconButtonStyle }}
                  aria-controls="notification-menu"
                  aria-haspopup="true"
                  variant="contained"
                  onClick={handleOpenMenu}
                >
                  <Icon sx={iconsStyle}>notifications</Icon>
                </IconButton>
              </Tooltip>
              {renderMenu()}
            </MDBox>
          </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
