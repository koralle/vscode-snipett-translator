import { createStore, combineReducers } from "redux";
import { SnipettReducer, SnipettState } from "./states/snipettState";

export type AppState = {
  snipett: SnipettState;
};

const store = createStore(
  combineReducers<AppState>({
    snipett: SnipettReducer,
  })
);

export default store;
