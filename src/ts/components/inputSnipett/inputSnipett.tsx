import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { SnipettState } from "../../states/snipettState";
import { SnipettActions } from "../../containers/common/SnipettContainer";

type inputSnipettProps = SnipettState & SnipettActions;

export const inputSnipett: React.FC<inputSnipettProps> = (
  props: inputSnipettProps
) => {
  const handleChangeName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.inputSnipettName(event.target.value);
  };
  const handleChangePrefix = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.inputSnipettPrefix(event.target.value);
  };
  const handleChangeBody = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.inputSnipettBody(event.target.value);
  };
  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.inputSnipettDescription(event.target.value);
  };

  return (
    <Box>
      <Box display="flex" flexDirection="column">
        <Box className="input-snipett-text-field">
          <TextField onChange={(e) => handleChangeName(e)} placeholder="name" />
        </Box>
        <Box className="input-snipett-text-field">
          <TextField
            onChange={(e) => handleChangePrefix(e)}
            placeholder="prefix"
          />
        </Box>
        <Box className="input-snipett-text-field">
          <TextField onChange={(e) => handleChangeBody(e)} placeholder="body" />
        </Box>
        <Box className="input-snipett-text-field">
          <TextField
            onChange={(e) => handleChangeDescription(e)}
            placeholder="description"
          />
        </Box>
      </Box>
    </Box>
  );
};
