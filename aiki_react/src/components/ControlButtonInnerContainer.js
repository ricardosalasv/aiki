import React, { Component } from "react";
import ControlButton from "./ControlButton";

const ControlButtonInnerContainer = ({name}) => {

  return (
    <div className="col-9 react-taskList-inner-division">
      <div className="row justify-content-between">
        <div className="col-2 text-center">
          <h4>{name}</h4>
        </div>
        <ControlButton name="Name" />
        <ControlButton name="Status" />
        <ControlButton name="Creation Date" />
        <ControlButton name="Due Date" />
      </div>
    </div>
  );

}

export default ControlButtonInnerContainer;