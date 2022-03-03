import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Task from './Task';
import ControlButton from "./ControlButton";

const TaskContainer = () => {

  return (
    <h1>Hello world!</h1>
    // <div className="react-TaskContainer">
    //   <div className="row p-2">
    //     <div className="col">
    //       <ControlButton name="New Task" />
    //     </div>
    //     <div className="col">
    //       <ControlButton name="Sort By:" />
    //     </div>
    //   </div>

    //   <div className="row task-list">
        
    //   </div>
    // </div>
  );

}

const DOMContainer = document.querySelector('#task_list_container');
ReactDOM.render(<TaskContainer />, DOMContainer);