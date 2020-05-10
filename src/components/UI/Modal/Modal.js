import React, { Fragment } from "react";
import PropTypes from "prop-types";

import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.show} click={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

modal.propTypes = {
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func,
};

export default modal;
