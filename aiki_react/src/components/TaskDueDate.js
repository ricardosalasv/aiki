import React, { Component, useState } from "react";
import updateTaskList from "../api/updateTaskList";
import axiosInstance from "../axios";

const TaskDueDate = (data) => {

    const [state, setState] = useState({
        isDatePickerVisible: false,
        selectedDate: data.date
    })

    const showDatePicker = () => {
        setState({
            ...state,
            isDatePickerVisible: !state.isDatePickerVisible
        })
    }

    const action = async (e) => {

        let newDate = e.target.value
        
        await axiosInstance.patch(
            `tasks/task-update/${data.id}`,
            {
                deadline: newDate
            }
        )
        .then((response) => {
            setState({
                ...state,
                isDatePickerVisible: false,
                selectedDate: newDate
            })
        }).catch((error) => {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

            alert("It has ocurred a server error, please try again later")
        })
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    return (
        <div className="row react-TaskDueDate">
            <div className="col" onClick={showDatePicker}>
                <p>Due Date - {state.selectedDate}</p>
                {state.isDatePickerVisible ? <input type="date" id="datePicker" onClick={stopPropagation} onChange={action} /> : null}
            </div>
        </div>
    );

}

export default TaskDueDate;