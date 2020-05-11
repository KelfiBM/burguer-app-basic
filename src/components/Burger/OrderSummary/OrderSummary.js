import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total Price: {props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout</p>
      <Button buttonType={"Danger"} clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button buttonType={"Success"} clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  purchaseCanceled: PropTypes.func,
  purchaseContinued: PropTypes.func,
  totalPrice: PropTypes.number.isRequired,
};

export default orderSummary;
