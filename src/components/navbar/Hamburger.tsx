import React from "react";
import styles from "../../sass/hamburgerStyles.module.scss";
import {
  disableScroll,
  enableScroll,
} from "../../helper-functions/scrollEnableDisable";

interface IProps {
  setFunction: React.Dispatch<React.SetStateAction<"open" | "close" | "">>;
  hamClick: "open" | "close" | "";
}

export const Hamburger: React.FC<IProps> = ({ setFunction, hamClick }) => {
  const handleHamClick = () => {
    switch (hamClick) {
      case "open":
        setFunction("close");
        enableScroll();
        break;
      case "close":
        setFunction("open");
        disableScroll();
        break;
      case "":
        setFunction("open");
        disableScroll();
        break;
    }
  };

  return (
    <button className={styles.ham_wrapper} onClick={handleHamClick}>
      <div
        className={`${styles.bar} ${hamClick === "open" ? styles.open1 : ""} ${
          hamClick === "close" ? styles.close1 : ""
        }`}
      ></div>
      <div
        className={`${styles.bar} ${hamClick === "open" ? styles.open2 : ""} ${
          hamClick === "close" ? styles.close : ""
        }`}
      ></div>
      <div
        className={`${styles.bar} ${hamClick === "open" ? styles.open3 : ""} ${
          hamClick === "close" ? styles.close3 : ""
        }`}
      ></div>
    </button>
  );
};
