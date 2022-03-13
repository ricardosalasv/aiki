import React, { Component, useState } from "react";
import ReactDOM from 'react-dom';
import TaskCreateForm from './TaskCreateForm'
import { useDispatch, useSelector } from "react-redux";
import { store } from "../index";

const ControlButton = ({name}) => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const [thisState, setState] = useState({
        isCreateTaskDialogVisible: false
    })
    
    let action;
    let comparisonFunction;

    let content;

    if (name === "Name") {

        comparisonFunction = (a, b) => {
            let aTitle = a.title.toLowerCase();
            let bTitle = b.title.toLowerCase();
            
            if (state.sorting.reversed === false) {
                if (aTitle < bTitle) {
                    return -1;
                }
                if (aTitle > bTitle) {
                    return 1;
                }
            }
            else {
                if (aTitle < bTitle) {
                    return 1;
                }
                if (aTitle > bTitle) {
                    return -1;
                }
            }
            return 0;
        }

        action = () => {
            dispatch({ type: 'tasks/sort', 
                payload: {
                    tasks: {
                        pending: state.tasks.pending.sort(comparisonFunction),
                        completed: state.tasks.completed.sort(comparisonFunction)
                    },

                    sorting: {
                        type: "name",
                        reversed: !state.sorting.reversed
                    }
                }
            })
        }
    }
    else if (name === "Status") {

        comparisonFunction = (a, b) => {
            if (state.sorting.reversed === false) {
                return a.status - b.status;
            }
            else {
                return b.status - a.status;
            }
        }

        action = () => {
            dispatch({ type: 'tasks/sort', 
                payload: {
                    tasks: {
                        pending: state.tasks.pending.sort(comparisonFunction),
                        completed: state.tasks.completed.sort(comparisonFunction)
                    },

                    sorting: {
                        type: "status",
                        reversed: !state.sorting.reversed
                    }
                }
            })
        }
    }
    else if (name === "Creation Date") {

        comparisonFunction = (a, b) => {
            let aCreationDate = a.creation_datetime.toLowerCase();
            let bCreationDate = b.creation_datetime.toLowerCase();
            
            if (state.sorting.reversed === false) {
                if (aCreationDate < bCreationDate) {
                    return -1;
                }
                if (aCreationDate > bCreationDate) {
                    return 1;
                }
            }
            else {
                if (aCreationDate < bCreationDate) {
                    return 1;
                }
                if (aCreationDate > bCreationDate) {
                    return -1;
                }
            }
            return 0;
        }

        action = () => {
            dispatch({ type: 'tasks/sort', 
                payload: {
                    tasks: {
                        pending: state.tasks.pending.sort(comparisonFunction),
                        completed: state.tasks.completed.sort(comparisonFunction)
                    },

                    sorting: {
                        type: "creation_date",
                        reversed: !state.sorting.reversed
                    }
                }
            })
        }
    }
    else if (name === "Due Date") {

        comparisonFunction = (a, b) => {
            let aCreationDate = a.deadline.toLowerCase();
            let bCreationDate = b.deadline.toLowerCase();
            
            if (state.sorting.reversed === false) {
                if (aCreationDate < bCreationDate) {
                    return -1;
                }
                if (aCreationDate > bCreationDate) {
                    return 1;
                }
            }
            else {
                if (aCreationDate < bCreationDate) {
                    return 1;
                }
                if (aCreationDate > bCreationDate) {
                    return -1;
                }
            }
            return 0;
        }

        action = () => {
            dispatch({ type: 'tasks/sort', 
                payload: {
                    tasks: {
                        pending: state.tasks.pending.sort(comparisonFunction),
                        completed: state.tasks.completed.sort(comparisonFunction)
                    },

                    sorting: {
                        type: "creation_date",
                        reversed: !state.sorting.reversed
                    }
                }
            })
        }
    }
    
    // Content definition
    if (name === "New Task") {

        action = () => {
            setState({
                isCreateTaskDialogVisible: !thisState.isCreateTaskDialogVisible
            })
        }

        content = (
            <div>
                <div className="row">
                    <div className="col">
                        <button onClick={action}>
                            {name}
                        </button>
                    </div>
                </div>
                { thisState.isCreateTaskDialogVisible ? <TaskCreateForm setParentState={setState}/> : null }
            </div>
        )
    }
    else {
        content = (
            <button onClick={action}>
                {name}
            </button>
        )
    }

    return (
        <div className="col react-control-button">
            {content}
        </div>
    );
    
}

export default ControlButton;