import React from "react";
import PropTypes from "prop-types";

import classes from "./Modal.module.css";

const modal = (props) => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  );
};

modal.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default modal;
