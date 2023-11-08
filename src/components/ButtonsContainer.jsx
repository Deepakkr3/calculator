import React from "react";
import styles from "./ButtonContainer.module.css";

function ButtonsContainer({ buttonClicked }) {
  const allButton = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {allButton.map((btn) => (
        <button
          key={btn}
          className={styles.button}
          onClick={() => buttonClicked(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
