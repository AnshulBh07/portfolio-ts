import React, { useEffect, useState } from "react";
import styles from "../../sass/navbarStyles.module.scss";
import { navListItem } from "../../data/interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Hamburger } from "./Hamburger";
import { enableScroll } from "../../helper-functions/scrollEnableDisable";

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
  const [hamClick, setHamClick] = useState<"open" | "close" | "">("");

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    const { home, projects, contact, about } = scrollState;

    switch (name) {
      case "home":
        window.scrollTo({ top: home, left: 0, behavior: "smooth" });
        setHamClick("close");
        enableScroll();
        break;
      case "about":
        window.scrollTo({ top: about, left: 0, behavior: "smooth" });
        setHamClick("close");
        enableScroll();
        break;
      case "projects":
        window.scrollTo({ top: projects, left: 0, behavior: "smooth" });
        setHamClick("close");
        enableScroll();
        break;
      case "contact":
        window.scrollTo({ top: contact + 100, left: 0, behavior: "smooth" });
        setHamClick("close");
        enableScroll();
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
              paddingTop: "1.2rem",
              paddingBottom: "1.2rem",
              boxShadow: "0px 0px 20px #000",
            }
          : { backgroundColor: "transparent", backdropFilter: "none" }
      }
    >
      <h3 className={styles.name}>anshul bhardwaj</h3>

      <nav
        className={`${styles.navWrapper} ${
          hamClick === "open" ? styles.open : styles.close
        }`}
      >
        <ul
          className={`${styles.navbar} ${
            hamClick === "open" ? styles.open : ""
          } ${hamClick === "close" ? styles.close : ""}`}
        >
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

          {/* resume button */}
          <li>
            <button
              className={styles.resumeBtn}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1hDUK1MhNZ7erQEJ0vykX_5VbNPpXftsQ/view?usp=drive_link",
                  "_blank"
                )
              }
            >
              resume
            </button>
          </li>
        </ul>
      </nav>

      <Hamburger setFunction={setHamClick} hamClick={hamClick} />
    </header>
  );
};
