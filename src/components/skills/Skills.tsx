import React, { useEffect, useRef, useState } from "react";
import styles from "../../sass/skillsStyles.module.scss";
import { SkillTile } from "./SkillTile";
import { skillsList } from "../../data/skillsData";

export const Skills: React.FC = () => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else setAnimate(false);
      });
    });

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container}>
      <p
        className={`${styles.title} ${animate ? styles.active : ""}`}
        ref={titleRef}
      >
        <span>Tools & Technologies</span>
      </p>

      <div className={styles.container_skills}>
        {skillsList.map((item, index) => {
          return <SkillTile key={index} data={item} index={index} />;
        })}
      </div>
    </section>
  );
};
