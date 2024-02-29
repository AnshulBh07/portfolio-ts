import React, { useState } from "react";
import styles from "../../sass/contactFormStyles.module.scss";
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface IProps {
  animate: boolean;
}

export const ContactForm: React.FC<IProps> = ({ animate }) => {
  const dispatch: AppDispatch = useDispatch();
  const [focus, setFocus] = useState<string>("");

  const { name, email, message } = useSelector(
    (state: RootState) => state.contact
  );

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // create a backend for further mail submission, use nodemailer
  };

  //   console.log(message);

  return (
    <form
      action="post"
      className={`${styles.container_form} ${animate ? styles.active : ""}`}
    >
      <label htmlFor="name" className={styles.input_wrapper}>
        name
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onFocus={(e) => setFocus(e.target.name)}
          onChange={(e) =>
            dispatch({ type: "contactForm/setName", payload: e.target.value })
          }
        />
        <div className={styles.bar}>
          <span style={focus === "name" ? { width: "100%" } : {}}></span>
        </div>
      </label>

      <label htmlFor="email" className={styles.input_wrapper}>
        email
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onFocus={(e) => setFocus(e.target.name)}
          onChange={(e) =>
            dispatch({ type: "contactForm/setEmail", payload: e.target.value })
          }
        />
        <div className={styles.bar}>
          <span style={focus === "email" ? { width: "100%" } : {}}></span>
        </div>
      </label>

      <label htmlFor="message" className={styles.input_wrapper}>
        message
        <textarea
          name="message"
          id="message"
          rows={3}
          value={message}
          onFocus={(e) => setFocus(e.target.name)}
          onChange={(e) =>
            dispatch({
              type: "contactForm/setMessage",
              payload: e.target.value,
            })
          }
        ></textarea>
        <div className={styles.bar}>
          <span style={focus === "message" ? { width: "100%" } : {}}></span>
        </div>
      </label>

      <button className={styles.submitBtn} onClick={handleFormSubmit}>
        submit
      </button>
    </form>
  );
};
