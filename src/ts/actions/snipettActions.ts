import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const snipettActions = {
  inputSnipettName: actionCreator<string>("INPUT_SNIPETT_NAME"),
  inputSnipettPrefix: actionCreator<string>("INPUT_SNIPETT_PREFIX"),
  inputSnipettBody: actionCreator<string>("INPUT_SNIPETT_BODY"),
  inputSnipettDescription: actionCreator<string>("INPUT_SNIPETT_DESCRIPTION"),
};
