import { IScroll } from "../data/interfaces";

const initialState: IScroll = {
  home: 0,
  about: 0,
  projects: 0,
  contact: 0,
};

type actionType = { type: string; payload?: number };

export const scrollReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case "scroll/setAbout":
      return { ...state, about: action.payload! };
    case "scroll/setProject":
      return { ...state, projects: action.payload! };
    case "scroll/setContact":
      return { ...state, contact: action.payload! };
    default:
      return state;
  }
};
