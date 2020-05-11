import React from "react";
import PropTypes from "prop-types";

import classes from "./Button.module.css";

const button = (props) => {
  return (
    <button
      className={[classes.Button, classes[props.buttonType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

button.propTypes = {
  clicked: PropTypes.func,
  buttonType: PropTypes.oneOf(["Success", "Danger"]).isRequired,
};

export default button;
