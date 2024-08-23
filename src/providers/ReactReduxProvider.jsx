
"use client";

import { Provider } from "react-redux";
import store from "../store/storeIndex"; 

const ReactReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReactReduxProvider;
