import React, { Component, useState } from "react";
import ReactDOM from 'react-dom';
import Task from './Task';

const TaskList = ({type}) => {

  const [tasks, setTasks] = useState(null);

  let data = null;

  let names = ["Task1", "Task2", "Task3", "Task4", "Task5", "Task6"]

  if (type === "completed") {
    // Filter the tasks which have a Completed status
  }

  return (
    <div className="row task-list p-0">
      <div className="col p-0">
          
        {names.map(x => <Task key={x} name={x} />)}

      </div>
    </div>
  );

}

export default TaskList;