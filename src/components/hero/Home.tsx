import React from "react";
import styles from "../../sass/homeStyles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Home: React.FC = () => {
  const skillsList = [
    "HTML5",
    "SCSS",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
  ];

  const { contact } = useSelector((state: RootState) => state.scroll);

  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.info}>
          <h1 className={styles.hello}>
            hello <span>.</span>
          </h1>
          <p className={styles.name}>
            <span>i'm anshul</span>
          </p>
          <h1 className={styles.role}>fullstack developer</h1>

          <div className={styles.btns_wrapper}>
            <button
              className={styles.contactBtn}
              onClick={() => {
                window.scrollTo({ top: contact, left: 0, behavior: "smooth" });
              }}
            >
              contact me
            </button>
            <button
              className={styles.resumeBtn}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1AINL-N5azKQe111n_1rgr-p5vSJ2hD_C/view?usp=sharing",
                  "_blank"
                )
              }
            >
              resume
            </button>
          </div>
        </div>

        <div className={styles.img_container}>
          <div className={styles.ring_wrapper}>
            <div className={styles.outer_ring}>
              <div className={styles.inner_ring}></div>
            </div>
          </div>
        </div>
      </div>

      {/* skills strip with animation*/}
      <div className={styles.skill_container}>
        <div className={styles.skill_wrapper}>
          {skillsList.map((item, index) => {
            return (
              <p className={styles.skill} key={index}>
                {item}
              </p>
            );
          })}
        </div>

        <div className={styles.skill_wrapper}>
          {skillsList.map((item, index) => {
            return (
              <p className={styles.skill} key={index}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};
