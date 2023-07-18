import React from 'react';
// import './TaskList.css';
import Switch from 'react-switch';

const TaskDetails = () => {
    const [Data] = React.useState([
        {
            taskid: "1",
            taskname: "Frontend",
            taskdate: "22-02-2023",
            taskstatus: "Done",
        },
        {
            taskid: "2",
            taskname: "Backend",
            taskdate: "21-03-2023",
            taskstatus: "To Do",
        }
    ]);

    return (
        <div>
            <center>
                <div className="heading">
                    <h7>TASK DETAILS</h7>
                </div>
                <table className="table">
                    <thead className="thead">
                        <tr className="tr">
                            <th>TaskId</th>&nbsp;
                            <th>TaskName</th>&nbsp;
                            <th>TaskDate</th>&nbsp;
                            <th>TaskStatus</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="tbd">
                        {Data.map((items, id) => (
                            <tr key={id}>
                                <td>{items.taskid}</td>&nbsp;
                                <td>{items.taskname}</td>&nbsp;
                                <td>{items.taskdate}</td>&nbsp;
                                <td>{items.taskstatus}</td>
                                <td>
                                    <Switch
                                        
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
};

export default TaskDetails;