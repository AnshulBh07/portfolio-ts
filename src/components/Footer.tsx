import React from "react";
import styles from "../sass/footerStyle.module.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { IContactItem } from "../data/interfaces";

export const Footer: React.FC = () => {
  const arr: IContactItem[] = [
    { icon: <IoMail className={styles.icon} />, text: "", link: "" },
    {
      icon: <PiGithubLogoFill className={styles.git_icon} />,
      text: "",
      link: "",
    },
    { icon: <FaLinkedinIn className={styles.icon} />, text: "", link: "" },
  ];

  return (
    <footer className={styles.container}>
      <h2 className={styles.name}>anshul bhardwaj</h2>
      <p className={styles.copyright}>
        All rights reserved for Anshul Bhardwaj, Design by Aisaa
      </p>
      <div className={styles.icons_wrapper}>
        {arr.map((item, index) => {
          return (
            <button className={styles.contactBtn} key={index}>
              {item.icon}
            </button>
          );
        })}
      </div>
    </footer>
  );
};
