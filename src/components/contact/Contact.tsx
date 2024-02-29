import React, { useEffect, useRef, useState } from "react";
import styles from "../../sass/contactStyles.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IContactItem } from "../../data/interfaces";
import { BsInstagram, BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { ContactForm } from "./ContactForm";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";

export const Contact: React.FC = () => {
  const arr: IContactItem[] = [
    {
      icon: <FaLocationDot className={styles.contact_icon} />,
      text: "Narela, Delhi - 11040",
      link: "",
    },
    {
      icon: <FaPhoneAlt className={styles.contact_icon} />,
      text: "+91 - 8130607433",
      link: "",
    },
    {
      icon: <MdEmail className={styles.contact_icon} />,
      text: "anshulbh009@gmail.com",
      link: "",
    },
  ];

  const socialMediaItems: IContactItem[] = [
    {
      icon: <BsLinkedin className={styles.icon} />,
      link: "https://www.linkedin.com/in/anshul-bhardwaj-5aa515110/",
      text: "",
      hoverText: "linkedin",
    },
    {
      icon: <BsGithub className={styles.icon} />,
      link: "https://github.com/AnshulBh07",
      text: "",
      hoverText: "github",
    },
    {
      icon: <BsWhatsapp className={styles.icon} />,
      link: "",
      text: "",
      hoverText: "whatsApp",
    },
    {
      icon: <SiLeetcode className={styles.icon} />,
      link: "https://leetcode.com/Anshul_Bhardwaj/",
      text: "",
      hoverText: "leetcode",
    },
    {
      icon: <BsInstagram className={styles.icon} />,
      link: "",
      text: "",
      hoverText: "instagram",
    },
  ];

  const contactRef = useRef<HTMLTableSectionElement>(null);
  const [animate, setAnimate] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (contactRef.current) {
      const val = contactRef.current.offsetTop;

      dispatch({ type: "scroll/setContact", payload: val });
    }
  }, [dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else setAnimate(false);
      });
    });

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container} ref={contactRef}>
      <p className={styles.title}>
        <span>contacts</span>
      </p>

      <div className={styles.info_form_wrapper}>
        {/* container info */}
        <div className={`${styles.info} ${animate ? styles.active : ""}`}>
          <div className={styles.contacts_wrapper}>
            {arr.map((item, index) => {
              return (
                <button className={styles.tile} key={index}>
                  {item.icon} <span>{item.text}</span>
                </button>
              );
            })}
          </div>

          <ul className={styles.social_media_wrapper}>
            {socialMediaItems.map((item, index) => {
              return (
                <li key={index}>
                  <button className={styles.socialBtn}>
                    {item.icon} <span>{item.hoverText}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* container contact form */}
        <ContactForm animate={animate} />
      </div>
    </section>
  );
};
