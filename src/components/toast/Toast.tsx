import React from "react";
import styles from "../../sass/toastStyles.module.scss";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoWarningOutline } from "react-icons/io5";
import { VscError } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";

export const Toast: React.FC = () => {
  const toastState = useSelector((state: RootState) => state.toast);
  const dispatch: AppDispatch = useDispatch();
  //   console.log(toastState);
  const { message, activity, status } = toastState;
  const currState = toastState;

  const handleCloseClick = () => {
    currState.activity = "close";

    dispatch({ type: "toast/close", payload: currState });
  };

  //   function that handles icon and color based on toast status
  const getToastStuff: (a: string) => [JSX.Element, string, string] = (
    status: string
  ) => {
    switch (status) {
      case "success":
        return [
          <IoCheckmarkCircleOutline
            className={styles.status_icon}
            style={{ color: "#00ff48" }}
          />,
          "#00c237",
          "#00ff48",
        ];
      case "warning":
        return [
          <IoWarningOutline
            className={styles.status_icon}
            style={{ color: "#ffe100" }}
          />,
          "#cfb600",
          "#ffe100",
        ];
      case "error":
        return [
          <VscError
            className={styles.status_icon}
            style={{ color: "#cf0000" }}
          />,
          "#cf0000",
          "#ff0000",
        ];
      default:
        return [
          <IoCheckmarkCircleOutline className={styles.status_icon} />,
          "",
          "",
        ];
    }
  };

  const progressStyle = {
    backgroundImage: `linear-gradient(to right,${getToastStuff(status)[1]},${
      getToastStuff(status)[2]
    })`,
  };

  return (
    <div
      className={`${styles.container} ${
        activity === "open" ? styles.open : ""
      } ${activity === "close" ? styles.close : ""}`}
    >
      <div className={styles.top}>
        <div className={styles.icon_wrapper}>{getToastStuff(status)[0]}</div>

        <div className={styles.info}>
          <h2>{status}</h2>
          <p>{message}</p>
        </div>

        <button className={styles.closeBtn} onClick={handleCloseClick}>
          <IoCloseOutline className={styles.close_icon} />
        </button>
      </div>

      <div
        className={`${styles.bottom} ${
          activity === "open" ? styles.active : ""
        }`}
      >
        <div className={styles.bar1} style={progressStyle}></div>
        <div className={styles.bar2} style={progressStyle}></div>
      </div>
    </div>
  );
};
