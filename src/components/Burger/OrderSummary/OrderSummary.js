import React, { Fragment } from "react";
import PropTypes from "prop-types";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (ingredientKey) => {
      return (
        <li key={ingredientKey}>
          <span style={{ textTransform: "capitalize" }}>{ingredientKey}</span>:{" "}
          {props.ingredients[ingredientKey]}
        </li>
      );
    }
  );
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A burger with:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout</p>
    </Fragment>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default orderSummary;
