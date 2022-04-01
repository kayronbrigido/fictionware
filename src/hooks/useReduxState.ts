import { rootReducer } from "@src/store/redux-store/models";
import { useSelector } from "react-redux";

export const useReduxState = () => useSelector((state: rootReducer) => state)