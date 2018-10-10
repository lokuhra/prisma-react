import React, { Component } from "react";
import Application from "../../components/Template";
import UploadZones from "../../components/UploadZones";
import UploadLabels from "../../components/UploadLabels";

export default class index extends Component {
  render() {
    return (
      <div>
        <Application title={"titulo"}>
          <UploadZones />
          <UploadLabels />
        </Application>
      </div>
    );
  }
}
