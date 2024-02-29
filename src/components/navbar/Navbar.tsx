import React, { useEffect, useState } from "react";
import styles from "../../sass/navbarStyles.module.scss";
import { navListItem } from "../../data/interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Navbar: React.FC = () => {
  const navList: navListItem[] = [
    { name: "home", link: "/home" },
    { name: "about", link: "/about" },
    { name: "projects", link: "/projects" },
    { name: "contact", link: "/contact" },
  ];

  const [sticky, setSticky] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);
  const [lastScroll, setLastScroll] = useState<number>(0);
  const scrollState = useSelector((state: RootState) => state.scroll);

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    const { home, projects, contact, about } = scrollState;

    switch (name) {
      case "home":
        window.scrollTo({ top: home, left: 0, behavior: "smooth" });
        break;
      case "about":
        window.scrollTo({ top: about, left: 0, behavior: "smooth" });
        break;
      case "projects":
        window.scrollTo({ top: projects, left: 0, behavior: "smooth" });
        break;
      case "contact":
        window.scrollTo({ top: contact, left: 0, behavior: "smooth" });
        break;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      if (window.scrollY > lastScroll) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`${styles.container} ${show ? styles.show : styles.hide}`}
      style={
        sticky
          ? {
              backdropFilter: "blur(15px)",
              padding: "1.2rem 8rem",
              boxShadow: "0px 0px 20px #000",
            }
          : { backgroundColor: "transparent", backdropFilter: "none" }
      }
    >
      <h3 className={styles.name}>anshul bhardwaj</h3>

      <ul className={styles.navbar}>
        {navList.map((item, index) => {
          return (
            <li key={index}>
              <button
                className={styles.navBtn}
                name={item.name}
                onClick={(e) => handleNavClick(e)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
