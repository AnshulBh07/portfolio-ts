import { IContactForm } from "../data/interfaces";

const initialState: IContactForm = {
  name: "",
  message: "",
  email: "",
};

type actionType = { type: string; payload?: string };

export const contactFormReducer = (
  state = initialState,
  action: actionType
) => {
  switch (action.type) {
    case "contactForm/setName":
      return { ...state, name: action.payload! };
    case "contactForm/setEmail":
      return { ...state, email: action.payload! };
    case "contactForm/setMessage":
      return { ...state, message: action.payload! };
    default:
      return state;
  }
};
