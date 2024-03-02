import React from "react";
import styles from "../../sass/preloaderStyles.module.scss";

export const Preloader: React.FC = () => {
  return (
    <section className={styles.container}>
      {/* an svg */}
      <svg className={styles.svg_container} width={300} height={300}>
        <circle cx={150} cy={150} r={100} className={styles.circle1} />
        <circle cx={150} cy={150} r={100} className={styles.circle2} />
        <circle cx={150} cy={150} r={100} className={styles.circle3} />
        <circle cx={150} cy={150} r={100} className={styles.circle4} />
      </svg>
    </section>
  );
};
