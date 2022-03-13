import { useSelector } from 'react-redux';
import axiosInstance from '../axios'
import {store} from '../index';

// Get Status definitions from backend and store them in 
// localstorage for further use in other components far from the parent
const updateTaskList = async () => {
    let queriedStatus;

    axiosInstance.get("tasks/get-status-definitions/")
        .then((response) => {
            queriedStatus = response.data
            store.dispatch({ type: "statusDefinitions/update", payload: queriedStatus})

            // Query tasks
            axiosInstance.get("tasks/task-list/")
            .then((response) => {
                let receivedTasks = response.data;
                let completedStatus = queriedStatus.filter(x => x.name === "Completed")

                let dispatchPayload = {
                    completedStatus: completedStatus,
                    tasks: receivedTasks
                }

                store.dispatch({ type: "tasks/update", payload: dispatchPayload })
            })
        })
}

export default updateTaskList;