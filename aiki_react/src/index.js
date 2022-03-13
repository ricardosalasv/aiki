import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Register from './views/Register';
import Login from './views/Login';
import Home from './views/Home';
import reportWebVitals from './reportWebVitals';
import "./styles.css"

const initialState = {
  tasks: {
      pending: [],
      completed: []
    },

  sorting: {
    type: "creation_date",
    reversed: false
  },

  statusDefinitions: [],
}

export const store = createStore((state = initialState, action) => {
  switch(action.type) {

    case 'task/mark-unmarkAsCompleted': {
      return {
        ...state,
        tasks: [
          {
            pending: [],
            completed: []
          }
        ]
      }
    }

    case 'tasks/update': {

      return {
        ...state,
        tasks: {
          pending: action.payload.tasks.filter(x => x.status != action.payload.completedStatus[0].id),
          completed: action.payload.tasks.filter(x => x.status == action.payload.completedStatus[0].id)
        }
      }
    }

    case 'tasks/sort': {
      return {
        ...state,
        tasks: action.payload.tasks,
        sorting: action.payload.sorting,
      }
    }

    case 'statusDefinitions/update': {
      return {
        ...state,
        statusDefinitions: action.payload
      }
    }

    default:
      return state
  }

})

const routing = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();