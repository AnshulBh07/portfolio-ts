import React, { useEffect, useRef, useState } from "react";
import styles from "../../sass/skillsStyles.module.scss";
import { ISkillItem } from "../../data/interfaces";

interface IProps {
  data: ISkillItem;
  index: number;
}

export const SkillTile: React.FC<IProps> = ({ data, index }) => {
  // let's add intersection observer for animation
  const skillRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      });
    });

    if (skillRef.current) observer.observe(skillRef.current);

    // cleanup function
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${styles.skill_wrapper} ${animate ? styles.active : ""}`}
      ref={skillRef}
      style={animate ? { animationDelay: `${index * 0.3}s` } : {}}
    >
      <div className={styles.logo_wrapper}>
        <img src={data.icon} alt="logo" />
        {/* hover text */}
        <span>
          {data.name} - {data.proficiency}%
        </span>
      </div>

      <div className={styles.bar}>
        <div
          className={styles.progress}
          style={{
            width: `${data.proficiency}%`,
            animationDelay: `${0.4 * index}s`,
          }}
        ></div>
      </div>
    </div>
  );
};
