import React from "react";
import styles from "./Display.module.css";

function Display({ calVal }) {
  return (
    <input
      value={calVal}
      className={styles.display}
      type="text"
      readOnly
    ></input>
  );
}

export default Display;
