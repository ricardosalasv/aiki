import React from 'react';

class ConnectionExample extends React.Component {
    componentDidMount() {
        const apiUrl = 'http://127.0.0.1:8000/api/tasks/task-list';

        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    render() {
        return <div>Example connection</div>;
    }
}

export default ConnectionExample;