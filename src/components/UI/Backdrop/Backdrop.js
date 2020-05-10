import React from "react";
import PropTypes from "prop-types";

import classes from "./Backdrop.module.css";

const backdrop = (props) => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.click} />
  ) : null;
};

backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func,
};

export default backdrop;
