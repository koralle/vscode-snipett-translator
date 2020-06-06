import React from "react";
import Box from "@material-ui/core/Box";
import { SnipettState } from "../../states/snipettState";
import { SnipettActions } from "../../containers/common/SnipettContainer";

type outputSnipettProps = SnipettState & SnipettActions;

export const OutputSnipett: React.FC<outputSnipettProps> = (
  props: outputSnipettProps
) => {
  return (
    <Box>
      <p> {props.name} </p>
      <p> {props.prefix} </p>
      <p> {props.body} </p>
      <p> {props.description} </p>
    </Box>
  );
};
