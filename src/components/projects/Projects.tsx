import React, { useEffect, useRef, useState } from "react";
import styles from "../../sass/projectsStyles.module.scss";
import { projectsList } from "../../data/projectsList";
import { ProjectCard } from "./ProjectCard";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";

export const Projects: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLTableSectionElement>(null);
  const [animateTitle, setAnimateTitle] = useState<boolean>(false);
  const [animateLine, setAnimateLine] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.localName === "h1") setAnimateTitle(true);
          if (entry.target.localName === "div") setAnimateLine(true);
        } else {
          setAnimateLine(false);
          setAnimateTitle(false);
        }
      });
    });

    if (titleRef.current) observer.observe(titleRef.current);

    if (lineRef.current) observer.observe(lineRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (projectRef.current) {
      const val = projectRef.current.offsetTop;
      dispatch({ type: "scroll/setProject", payload: val });
    }
  }, [dispatch]);

  return (
    <section className={styles.container} ref={projectRef}>
      <h1
        className={`${styles.title} ${animateTitle ? styles.active : ""}`}
        ref={titleRef}
      >
        projects
      </h1>
      <div
        className={`${styles.vert_line} ${animateLine ? styles.active : ""}`}
        ref={lineRef}
      >
        <span>.</span>
      </div>

      <div className={styles.projects}>
        {projectsList.map((item, index) => {
          return <ProjectCard key={index} index={index} data={item} />;
        })}
      </div>
    </section>
  );
};
