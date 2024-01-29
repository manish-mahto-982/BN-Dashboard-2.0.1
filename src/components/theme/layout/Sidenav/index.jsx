import React, { useEffect, useState } from "react";

// react-router-dom components
import { useLocation, NavLink, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

import {
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  collapseIcon,
  collapseIconBox,
  collapseItem,
  collapseText,
} from "./styles/sidenavCollapse";
import SidenavCollapse from "./SidenavCollapse";
import SidenavRoot from "./SidenavRoot";
import sidenavLogoLabel from "./styles/sidenav";

import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "src/context";
import MDBox from "../../common/MDBox";
import MDTypography from "../../common/MDTypography";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const navigate = useNavigate();
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    transparentSidenav,
    whiteSidenav,
    darkMode,
    sidenavColor,
  } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");
  const [dropDown, setDropDown] = useState({
    open: false,
    active: { route: "", subRoute: "" },
  });

  const handleClick = (route, subRoute) => {
    if (route !== dropDown.active.route.route)
      return setDropDown({ open: true, active: { route, subRoute } });
    setDropDown({ open: !dropDown.open, active: { route, subRoute } });
  };
  let textColor = "white";

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(
        dispatch,
        window.innerWidth < 1200 ? false : transparentSidenav
      );
      setWhiteSidenav(
        dispatch,
        window.innerWidth < 1200 ? false : whiteSidenav
      );
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)

  const renderRoutes = routes.map(
    ({ type, name, icon, title, noCollapse, key, href, route, collapse }) => {
      let returnValue;

      if (type === "collapse") {
        if (collapse) {
          returnValue = (
            <React.Fragment key={key}>
              {/* Use 'div' to wrap the ListItem and Collapse */}
              <SidenavCollapse
                name={name}
                icon={icon}
                active={dropDown.open && dropDown.active.route === key}
                onClick={() => handleClick(key, collapse[0].name)}
                nocollapse={noCollapse}
              />
              {/* Add Collapse component for the dropdown effect */}
              <Collapse
                in={dropDown.open && dropDown.active.route === key}
                timeout="auto"
                unmountOnExit
              >
                {collapse.map((route) => (
                  // <NavLink key={key} href={route.route} to={route.route}>
                  //   <Typography
                  //     key={key}
                  //     color={textColor}
                  //     display="block"
                  //     variant="caption"
                  //     fontSize={14}
                  //     textTransform="capitalize"
                  //     pl={7.5}
                  //     mt={2}
                  //     mb={1}
                  //     ml={1}
                  //   >
                  //     {route.name}
                  //   </Typography>
                  // </NavLink>
                  <SidenavCollapse
                    key={route.key}
                    name={route.name}
                    icon={
                      dropDown.active.subRoute === route.name ? (
                        route.icon
                      ) : (
                        <></>
                      )
                    }
                    nocollapse={noCollapse}
                    onClick={() => {
                      handleClick(key, route.name);
                      navigate(route.route);
                    }}
                  />
                ))}
              </Collapse>
            </React.Fragment>
          );
        } else {
          returnValue = href ? (
            <Link
              href={href}
              key={key}
              target="_blank"
              rel="noreferrer"
              sx={{ textDecoration: "none" }}
            >
              <SidenavCollapse
                name={name}
                icon={icon}
                active={!dropDown.open ? key === collapseName : false}
                nocollapse={noCollapse}
                onClick={() =>
                  setDropDown((prev) => ({ ...prev, open: false }))
                }
              />
            </Link>
          ) : (
            <NavLink key={key} to={route}>
              <SidenavCollapse
                name={name}
                icon={icon}
                active={!dropDown.open ? key === collapseName : false}
                onClick={() =>
                  setDropDown((prev) => ({ ...prev, open: false }))
                }
              />
            </NavLink>
          );
        }
      } else if (type === "title") {
        returnValue = (
          <MDTypography
            key={key}
            color={textColor}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </MDTypography>
        );
      } else if (type === "divider") {
        returnValue = (
          <Divider
            key={key}
            light={
              (!darkMode && !whiteSidenav && !transparentSidenav) ||
              (darkMode && !transparentSidenav && whiteSidenav)
            }
          />
        );
      }

      return returnValue;
    }
  );

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <MDTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </MDTypography>
        </MDBox>
        <MDBox
          component={NavLink}
          to="/"
          display="flex"
          alignItems="center"
          columnGap={1}
        >
          {brand && (
            <MDBox component="img" src={brand} alt="Brand" width="1.5rem" />
          )}
          <MDBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <MDTypography
              component="h6"
              variant="button"
              fontWeight="bold"
              textTransform={"capitalize"}
              fontSize={15}
              color={textColor}
            >
              {brandName}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      <Divider
        light={
          (!darkMode && !whiteSidenav && !transparentSidenav) ||
          (darkMode && !transparentSidenav && whiteSidenav)
        }
      />
      <List>{renderRoutes}</List>
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
