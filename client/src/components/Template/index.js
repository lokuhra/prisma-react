import React, { Fragment } from "react";

import Helmet from "../Helmet";
import AppBar from "../AppBar";
import Drawer from "../Drawer";

const Template = ({ title, children }) => (
  <Fragment>
    <Helmet title={title} />
    <AppBar />
    <Drawer />
    <div className={"pt-350 md\:pt-4"}>{children}</div>
  </Fragment>
);

export default Template;
