import axiosInstance from '../axios'
import customLocalStorage from '../lib/helpers/customLocalStorage'

// Get Status definitions from backend and store them in 
// localstorage for further use in other components far from the parent
const updateTaskList = async (updateState) => {
    let queriedStatus;
    axiosInstance.get("tasks/get-status-definitions/")
        .then((response) => {
            queriedStatus = response.data
            localStorage.setItem("statusDefinitions", JSON.stringify(queriedStatus))
            
            // Query tasks
            axiosInstance.get("tasks/task-list/")
            .then((response) => {
                let receivedTasks = response.data;
                let completedStatus = queriedStatus.filter(x => x.name === "Completed")

                updateState({
                    pendingTasks: receivedTasks.filter(x => x.status != completedStatus[0].id),
                    completedTasks: receivedTasks.filter(x => x.status == completedStatus[0].id)
                })
            })
        })
}

export default updateTaskList;