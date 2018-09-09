import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation-style.scss";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <NavLink to="/">
        <span className={styles.staycurious}>Stay Curious</span>
        <span className={styles.by}> by Nicolai Habla</span>
        {/* <span className={styles.curious}>Curious</span> */}
      </NavLink>
    </div>
  );
};

export default Navigation;
