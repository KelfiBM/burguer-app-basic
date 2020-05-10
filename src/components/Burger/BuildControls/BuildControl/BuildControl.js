import React from "react";
import PropType from "prop-types";

import classes from "./BuildControl.module.css";

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

buildControl.propType = {
  label: PropType.string.isRequired,
  removed: PropType.func,
  disabled: PropType.bool,
  added: PropType.func,
};

export default buildControl;
