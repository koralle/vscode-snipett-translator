import React from "react";
import Box from "@material-ui/core/Box";
import { Header } from "./components/Header/Header";
import InputSnipettContainer from "./containers/inputSnipettContainer";
import OutputSnipettContainer from "./containers/outputSnipettContainer";
import "./index.css";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header title="vscode-snipett-translator" />
      <Box display="flex" flexDirection="row">
        <InputSnipettContainer />
        <OutputSnipettContainer />
      </Box>
    </React.Fragment>
  );
};
