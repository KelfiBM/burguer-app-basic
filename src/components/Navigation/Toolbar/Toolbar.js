import React from "react";
import PropTypes from "prop-types";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const toolbar = (props) => {
  return (
    <div>
      <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>...</nav>
      </header>
    </div>
  );
};

toolbar.propTypes = {};

export default toolbar;
