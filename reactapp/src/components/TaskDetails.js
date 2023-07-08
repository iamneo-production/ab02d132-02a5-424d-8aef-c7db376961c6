import React, {useState} from 'react';

import '../styles/TaskDetails.css';

import './TaskDetails.css';


import '../styles/TaskDetails.css';

function TaskDetails() {
    const [data, setData] = useState({
      task: '',
      description: '',
      dueDate: ''
    });
  
    const { task, description, dueDate } = data;
  
    const changeHandler = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(data);
    };
  
    return (
      <div className="app-container">
        <center>

          <h1>Assigning Task</h1>
          <h2>Employee ID:</h2>

          <form onSubmit={submitHandler} className="form-container">
            <div className="input-row">
              <label className="input-label">Task Name:</label>
              <input
                type="text"
                name="task"
                value={task}
                onChange={changeHandler}
                className="input-field"
                placeholder="Task"
              />
            </div>





            <div className="input-row">
              <label className="input-label">Description:</label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={changeHandler}
                className="input-field"
                placeholder="Description"
              />
            </div>




            <div className="input-row">
              <label className="input-label">Due Date:</label>
              <input
                type="date"
                name="dueDate"
                value={dueDate}
                onChange={changeHandler}
                className="input-field"
              />
            </div>




            <div className="input-button">
              <input
                type="submit"
                value="Assign Task"
                className="submit-button"
              />
            </div>

          </form>

        </center>

      </div>

    );
  }
  
  export default TaskDetails;
  











