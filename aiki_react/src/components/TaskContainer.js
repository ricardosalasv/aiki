import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import TaskList from './TaskList';
import ControlButtonContainer from "./ControlButtonContainer";
import updateTaskList from '../api/updateTaskList';

const TaskContainer = () => {

  // Populate the task list on the initial render
  useEffect(() => {
    updateTaskList()
  }, [])

  // Accessing the tasks in the Redux Store
  const stateTasks = useSelector(state => state.tasks)
  console.log(stateTasks)

  return (
    <div className="row react-taskList-container">
      <div className="col">
        <ControlButtonContainer />
        <div className="row pt-4"><hr /></div>
        {stateTasks.pending? <TaskList receivedTasks={stateTasks.pending}/> : null}
        <div className="row pt-4"><hr /></div>
        {stateTasks.completed ? <TaskList type="completed" receivedTasks={stateTasks.completed}/> : null}
      </div>
    </div>
  );

}

export default TaskContainer;