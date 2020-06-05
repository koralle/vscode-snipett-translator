import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../store";
import { snipettActions } from "../actions/snipettActions";
import { inputSnipett } from "../components/inputSnipett";

export interface SnipettActions {
  inputSnipettName: (v: string) => Action<string>;
  inputSnipettPrefix: (v: string) => Action<string>;
  inputSnipettBody: (v: string) => Action<string>;
  inputSnipettDescription: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
  return {
    inputSnipettName: (v: string) =>
      dispatch(snipettActions.inputSnipettName(v)),
    inputSnipettPrefix: (v: string) =>
      dispatch(snipettActions.inputSnipettPrefix(v)),
    inputSnipettBody: (v: string) =>
      dispatch(snipettActions.inputSnipettBody(v)),
    inputSnipettDescription: (v: string) =>
      dispatch(snipettActions.inputSnipettDescription(v)),
  };
}

function mapStateToProps(appState: AppState) {
  return { ...appState.snipett };
}

export default connect(mapStateToProps, mapDispatchToProps)(inputSnipett);
