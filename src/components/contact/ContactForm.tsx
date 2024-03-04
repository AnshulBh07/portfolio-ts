import React, { useState } from "react";
import styles from "../../sass/contactFormStyles.module.scss";
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { IToast } from "../../data/interfaces";
import { validateForm } from "../../helper-functions/formValidation";

interface IProps {
  animate: boolean;
}

export const ContactForm: React.FC<IProps> = ({ animate }) => {
  const dispatch: AppDispatch = useDispatch();
  const [focus, setFocus] = useState<string>("");

  const contactState = useSelector((state: RootState) => state.contact);

  const { name, email, message } = contactState;

  let timerId: NodeJS.Timeout;

  const handleFormSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // clear any prev timers
    clearTimeout(timerId);
    e.preventDefault();

    try {
      // check validity of form inputs (mainly email, and empty inputs)
      const toastData: IToast = {
        activity: "",
        status: "success",
        message: "",
      };

      const isValid = validateForm(contactState);

      // if there is some issue
      if (!isValid[0]) {
        switch (isValid[1]) {
          case 0:
            toastData.activity = "open";
            toastData.status = "warning";
            toastData.message = "Please enter a valid name!";
            dispatch({ type: "toast/setData", payload: toastData });
            timerId = setTimeout(() => {
              toastData.activity = "close";
              dispatch({ type: "toast/close", payload: toastData });
            }, 5000);
            return;

          case 1:
            toastData.activity = "open";
            toastData.status = "warning";
            toastData.message = "Please enter a valid email!";
            dispatch({ type: "toast/setData", payload: toastData });
            timerId = setTimeout(() => {
              toastData.activity = "close";
              dispatch({ type: "toast/close", payload: toastData });
            }, 5000);
            return;

          case 2:
            toastData.activity = "open";
            toastData.status = "warning";
            toastData.message = "Please enter a valid message!";
            dispatch({ type: "toast/setData", payload: toastData });
            timerId = setTimeout(() => {
              toastData.activity = "close";
              dispatch({ type: "toast/close", payload: toastData });
            }, 5000);
            return;

          default:
            break;
        }
      }

      // create a backend for further mail submission, use nodemailer
      const response = await axios({
        method: "post",
        url: "https://portfolio-backend-6dc8.onrender.com/contact",
        data: contactState,
      });

      console.log(response.status);

      // show toast messages according to response
      switch (response.status) {
        case 200:
          toastData.activity = "open";
          toastData.status = "success";
          toastData.message = "Email was received successfully!";
          dispatch({ type: "toast/setData", payload: toastData });
          timerId = setTimeout(() => {
            toastData.activity = "close";
            dispatch({ type: "toast/close", payload: toastData });
          }, 5000);
          break;
        default:
          toastData.activity = "open";
          toastData.status = "error";
          toastData.message = "Something went wrong!. Please try again later..";
          dispatch({ type: "toast/setData", payload: toastData });
          timerId = setTimeout(() => {
            toastData.activity = "close";
            dispatch({ type: "toast/close", payload: toastData });
          }, 5000);
          break;
      }

      dispatch({ type: "contactForm/clear" });
    } catch (err) {
      console.error(err);
    }
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
