import React from "react";
import PropTypes from "prop-types";

import classes from "./SideDrawerToggle.module.css";

const sideDrawerToggle = (props) => {
  return <div onClick={props.click}>Menu</div>;
};

sideDrawerToggle.propTypes = {
  onClick: PropTypes.func,
};

export default sideDrawerToggle;
