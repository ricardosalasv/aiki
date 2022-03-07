import React, { Component } from "react";
import TaskList from './TaskList';
import ControlButtonContainer from "./ControlButtonContainer";

const TaskContainer = () => {

  return (
    <div className="row react-taskList-container">
      <div className="col">
        <ControlButtonContainer />
        <div className="row pt-4"><hr /></div>
        <TaskList />
        <div className="row pt-4"><hr /></div>
        <TaskList type="completed" />
      </div>
    </div>
  );

}

export default TaskContainer;