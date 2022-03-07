import React, { Component } from "react";
import ControlButton from "./ControlButton";
import ControlButtonInnerContainer from "./ControlButtonInnerContainer";

const ControlButtonContainer = () => {

  return (
    <div className="row react-taskList-division justify-content-between align-items-center">
        <ControlButton name="New Task" />
        <ControlButtonInnerContainer name="Sort By:" />
    </div>
  );

}

export default ControlButtonContainer;