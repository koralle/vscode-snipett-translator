import { reducerWithInitialState } from "typescript-fsa-reducers";
import { snipettActions } from "../actions/snipettActions";

export interface SnipettState {
  name: string;
  prefix: string;
  body: string;
  description: string;
}

const initialState: SnipettState = {
  name: "",
  prefix: "",
  body: "",
  description: "",
};

const {
  inputSnipettName,
  inputSnipettPrefix,
  inputSnipettBody,
  inputSnipettDescription,
} = snipettActions;

export const SnipettReducer = reducerWithInitialState(initialState)
  .case(inputSnipettName, (state, name) => {
    return { ...state, name };
  })
  .case(inputSnipettPrefix, (state, prefix) => {
    return { ...state, prefix };
  })
  .case(inputSnipettBody, (state, body) => {
    return { ...state, body };
  })
  .case(inputSnipettDescription, (state, description) => {
    return { ...state, description };
  });
