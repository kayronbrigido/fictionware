import { SET_THEME } from "../types"

export const setTheme = (theme: string) => (dispatch: any) => {
  try {
    dispatch({
      type: SET_THEME,
      payload: theme
    })
  } catch (err) {
    console.error(err)
  }
}