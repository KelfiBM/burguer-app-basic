import React, { Fragment } from "react";
import PropTypes from "prop-types";

import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  const attachedClasses = [classes.SideDrawer];
  if (props.show) {
    attachedClasses.push(classes.Open);
  } else {
    attachedClasses.push(classes.Close);
  }
  return (
    <Fragment>
      <Backdrop show={props.show} click={props.close} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

sideDrawer.propTypes = {
  close: PropTypes.func,
  show: PropTypes.bool.isRequired,
};

export default sideDrawer;
