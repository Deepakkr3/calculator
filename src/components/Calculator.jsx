import React, { useState } from "react";
import styles from "./Calculator.module.css";
import Display from "./Display";
import ButtonsContainer from "./ButtonsContainer.jsx";

function Calculator() {
  let [calVal, setCalVal] = useState("");
  function buttonClicked(buttonText) {
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      let newval = calVal + buttonText;
      setCalVal(newval);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display calVal={calVal} />
      <ButtonsContainer buttonClicked={buttonClicked} />
    </div>
  );
}

export default Calculator;
