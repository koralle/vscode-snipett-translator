import * as React from "react";
import { Header } from "./components/Header";
import SnipettContainer from "./containers/snipettContainer";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header title="vscode-snipett-translator" />
      <SnipettContainer />
    </React.Fragment>
  );
};
