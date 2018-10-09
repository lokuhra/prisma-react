import React from "react";
import { Provider } from "mobx-react";
import Drawer from "./drawer";
import Zonas from "./zonas";

const drawerStore = new Drawer();
const zonasStore = new Zonas();

const stores = {
  drawerStore,
  zonasStore
};

const MobXProvider = ({ children }) => (
  <Provider {...stores}>{children}</Provider>
);

export default MobXProvider;
