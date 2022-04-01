import { combineReducers } from "@reduxjs/toolkit"
import themeReducer from "./themeReducer"

const appReducer = combineReducers({
  theme: themeReducer
})

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

