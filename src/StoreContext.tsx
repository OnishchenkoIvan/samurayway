import React from "react";
import { StoreReduxType } from "./redux/redux-store";

export const StoreContext = React.createContext({} as StoreReduxType);

export type ProviderPropsType = {
  store: StoreReduxType;
  children: React.ReactNode;
};

export const Provider = (props: ProviderPropsType) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
};
