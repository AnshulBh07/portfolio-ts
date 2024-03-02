import React from "react";
import styles from "../../sass/bracketsStyles.module.scss";

export const Brackets: React.FC = () => {
  return (
    <div className={styles.container}>
      <svg height={300} width={300}>
        {/* create a grid for better visual aid */}
        {/* draw shape */}
        <path
          className={styles.path1}
          d="M20,130 L20,170 L270,280 L270,220 L80,150 L270,80 L270,20 Z"
        />

        <path
          className={styles.path2}
          d="M20,130 L20,170 L270,280 L270,220 L80,150 L270,80 L270,20 Z"
        />

        <path
          className={styles.path3}
          d="M20,130 L20,170 L270,280 L270,220 L80,150 L270,80 L270,20 Z"
        />

        <path
          className={styles.path4}
          d="M20,130 L20,170 L270,280 L270,220 L80,150 L270,80 L270,20 Z"
        />
      </svg>
    </div>
  );
};
