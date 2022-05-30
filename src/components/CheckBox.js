import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from "./CheckBox.module.scss";

const CheckBox = ({ children, checked, ...rest }) => {
  return (
    <>
      <div className={styles.checkbox}>
        <label>
          <input type="checkbox" {...rest} />
          <div className={styles.icon}>
            {checked ? (
              <MdCheckBox className={styles.checked} />
            ) : (
              <MdCheckBoxOutlineBlank />
            )}
          </div>
        </label>
        <span>{children}</span>
      </div>
    </>
  );
};

export default CheckBox;
