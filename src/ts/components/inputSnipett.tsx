import React from "react";
import { SnipettState } from "../states/snipettState";
import { SnipettActions } from "../containers/snipettContainer";

type inputSnipettProps = SnipettState & SnipettActions;

export const inputSnipett: React.FC<inputSnipettProps> = (
  props: inputSnipettProps
) => {
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.inputSnipettName(event.target.value);
  };
  const handleChangePrefix = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.inputSnipettPrefix(event.target.value);
  };
  const handleChangeBody = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.inputSnipettBody(event.target.value);
  };
  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.inputSnipettDescription(event.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => handleChangeName(e)} />
        <input type="text" onChange={(e) => handleChangePrefix(e)} />
        <input type="text" onChange={(e) => handleChangeBody(e)} />
        <input type="text" onChange={(e) => handleChangeDescription(e)} />
      </div>
      <div>
        <p>{props.name}</p>
        <p>{props.prefix}</p>
        <p>{props.body}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
