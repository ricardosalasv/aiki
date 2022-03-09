import React, { Component, useEffect, useState } from "react";
import TaskList from './TaskList';
import ControlButtonContainer from "./ControlButtonContainer";
import axiosInstance from "../axios";
import axios from "axios";
import updateTaskList from '../api/updateTaskList';

const TaskContainer = () => {

  const [listState, setListState] = useState({
    pendingTasks: null,
    completedTasks: null
  })

  useEffect(() => {
    updateTaskList(setListState)
  }, [])

  return (
    <div className="row react-taskList-container">
      <div className="col">
        <ControlButtonContainer />
        <div className="row pt-4"><hr /></div>
        <TaskList receivedTasks={listState.pendingTasks}/>
        <div className="row pt-4"><hr /></div>
        <TaskList type="completed" receivedTasks={listState.completedTasks}/>
      </div>
    </div>
  );

}

export default TaskContainer;