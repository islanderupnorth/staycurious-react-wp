import React from "react";
import styles from "./arrow-style.scss";
import { NavLink } from "react-router-dom";
import cx from "classnames";

const Arrow = ({ onClick, next }) => (
  // <NavLink to="/">
  <div onClick={onClick}>
    <svg
      width="49px"
      height="18px"
      viewBox="0 0 49 18"
      className={cx(styles.arrow, next && styles.next)}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-63.000000, -75.000000)" stroke="#000000">
          <g transform="translate(89.000000, 84.000000) rotate(180.000000) translate(-89.000000, -84.000000) translate(65.000000, 76.000000)">
            <g transform="translate(1.000000, 0.000000)">
              <polyline
                id="arrowhead"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="40 0 48 8 40 16"
              />
              <path d="M47,8 L0,8" id="Line" strokeWidth="2" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
  // </NavLink>
);

export default Arrow;
