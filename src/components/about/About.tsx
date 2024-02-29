import React, { useEffect, useRef } from "react";
import styles from "../../sass/aboutStyles.module.scss";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";

export const About: React.FC = () => {
  const aboutRef = useRef<HTMLTableSectionElement>(null);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (aboutRef.current) {
      const val = aboutRef.current.offsetTop;
      // console.log(val);
      dispatch({ type: "scroll/setAbout", payload: val });
    }
  }, [dispatch]);

  return <section className={styles.container_main} ref={aboutRef}></section>;
};
