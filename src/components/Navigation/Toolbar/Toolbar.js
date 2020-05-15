import React from "react";
import PropTypes from "prop-types";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle/SideDrawerToggle";

const toolbar = (props) => {
  return (
    <div>
      <header className={classes.Toolbar}>
        <SideDrawerToggle click={props.sideDrawerToggleClick} />
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
      </header>
    </div>
  );
};

toolbar.propTypes = {
  sideDrawerToggleClick: PropTypes.func,
};

export default toolbar;
