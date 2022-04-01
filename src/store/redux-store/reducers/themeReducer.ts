import { stat } from "fs";
import { ThemeReducer } from "../models";
import { SET_THEME } from "../types";

const initalState: ThemeReducer = {
  theme: "darkTheme"
}

const themeReducer = (state = initalState, action: any) => {
  const { payload } = action

  switch (action.type) {
    case SET_THEME: 
      state = {
        ...state,
        theme: payload
      }
      break;
    default:
      return state;
  }
  return state;
}

export default themeReducer;