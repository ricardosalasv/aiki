import React, { Component, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import axiosInstance from "../axios";
import Task from './Task';

const TaskList = ({type, receivedTasks}) => {

  const [tasks, setTasks] = useState(receivedTasks);
  
  useEffect(() => {setTasks(receivedTasks)}, [receivedTasks])

  return (
    <div className="row task-list p-0">
      <div className="col p-0">

        {type === "completed" ? <h3>Completed Tasks</h3> : null}
        {tasks !== null ? tasks.map(x => <Task key={x.title + x.start_date} 
                          title={x.title} 
                          status={x.status} 
                          start_date={x.start_date}
                          due_date={x.deadline}  />) : null }

      </div>
    </div>
  );

}

export default TaskList;