import { IToast } from "../data/interfaces";

const initialState: IToast = {
  status: "success",
  activity: "",
  message: "",
};

type actionType = { type: string; payload?: IToast };

export const toastReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case "toast/setData":
      return {
        ...state,
        status: action.payload!.status,
        activity: action.payload!.activity,
        message: action.payload!.message,
      };
    case "toast/close":
      return {
        ...state,
        activity: action.payload!.activity,
      };
    default:
      return state;
  }
};
