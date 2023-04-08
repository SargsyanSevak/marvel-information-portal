import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

const Button = ({ appearance,href, children, ...props }) => {

  const classNames = require("classnames");

  return (
    <Link to={href}>
      <button
        className={classNames(
          styles.btn1,
          appearance === "red" ? styles.red : styles.gray
        )}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
