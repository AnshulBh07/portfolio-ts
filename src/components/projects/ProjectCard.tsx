import React, { useEffect, useRef, useState } from "react";
import styles from "../../sass/projectCardStyles.module.scss";
import { projectItem } from "../../data/interfaces";
import { FiGithub } from "react-icons/fi";
import { MdOutlineLiveTv } from "react-icons/md";

interface IProps {
  index: number;
  data: projectItem;
  key: number;
}

export const ProjectCard: React.FC<IProps> = ({ index, data }) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (projectRef.current) setAnimate(true);
        } else setAnimate(false);
      });
    });

    if (projectRef.current) observer.observe(projectRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${styles.project_wrapper} ${animate ? styles.active : ""}`}
      ref={projectRef}
      style={
        index % 2 === 0
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" }
      }
    >
      <div
        className={styles.img_container}
        onClick={() => window.open(data.liveLink, "_blank")}
      >
        <img src={data.imageLink} alt="thumbnail" />
      </div>

      <div
        className={styles.info}
        style={
          index % 2 === 0
            ? { alignItems: "flex-end" }
            : { alignItems: "flex-start" }
        }
      >
        <p
          className={styles.title}
          onClick={() => {
            window.open(data.gitLink, "_blank");
          }}
        >
          {data.title}
        </p>
        <div className={styles.desc}>
          <p
            style={
              index % 2 === 0 ? { textAlign: "right" } : { textAlign: "left" }
            }
          >
            {data.description}
          </p>
        </div>

        <div
          className={styles.tags_wrapper}
          style={
            index % 2 === 0
              ? { justifyContent: "flex-start" }
              : { justifyContent: "flex-end" }
          }
        >
          {data.tags.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>

        <div
          className={styles.redirects}
          style={index % 2 === 0 ? { right: "0" } : { left: "0" }}
        >
          <button
            className={styles.github}
            onClick={() => {
              window.open(data.gitLink, "_blank");
            }}
          >
            <FiGithub className={styles.icon} />
            <span>source code</span>
          </button>
          <button
            className={styles.live}
            onClick={() => {
              window.open(data.liveLink, "_blank");
            }}
          >
            <MdOutlineLiveTv className={styles.icon} />
            <span>live website</span>
          </button>
        </div>
      </div>
    </div>
  );
};
