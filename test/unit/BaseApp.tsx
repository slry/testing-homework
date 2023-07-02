import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { ApplicationState } from "../../src/client/store"
import { Application } from "../../src/client/Application"


type BaseAppProps = {
  Component?: React.FC;
  state?: ApplicationState;

}

export const BaseApp: React.FC<BaseAppProps> = ({ Component = Application, state = { cart: {}, details: {} } }) => {
  const store = createStore(() => state)
  return (
    <BrowserRouter basename={'/'}>
      <Provider store={store}>
        <Component />
      </Provider>
    </BrowserRouter>
  );
};

