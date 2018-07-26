import React from "react";
import styles from "./filter-style.scss";

const Filter = ({ changeFilter }) => {
  return (
    <div className={styles.filter}>
      <button
        type="button"
        onClick={() => {
          changeFilter("all");
        }}
      >
        All
      </button>

      <button
        type="button"
        onClick={() => {
          changeFilter("music");
        }}
      >
        Music
      </button>
    </div>
  );
};

export default Filter;
