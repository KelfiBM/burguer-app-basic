import React from "react";

import classes from "./Logo.module.css";
import logoImage from "../../assets/images/logo.png";

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logoImage} alt="MyBurger" />
    </div>
  );
};

export default logo;
