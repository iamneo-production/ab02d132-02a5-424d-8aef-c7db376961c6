import React, {useState} from 'react';
<<<<<<< HEAD
import '../styles/TaskDetails.css';
=======
import './TaskDetails.css';
>>>>>>> 9b306bb (First commit)
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
<<<<<<< HEAD

          <h1>Assigning Task</h1>

          <h2>Employee ID:</h2>

=======
          <h1>Assigning Task</h1>
          <h2>Employee ID:</h2>
>>>>>>> 9b306bb (First commit)
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
<<<<<<< HEAD

=======
>>>>>>> 9b306bb (First commit)
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
<<<<<<< HEAD

=======
>>>>>>> 9b306bb (First commit)
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
<<<<<<< HEAD

=======
>>>>>>> 9b306bb (First commit)
            <div className="input-button">
              <input
                type="submit"
                value="Assign Task"
                className="submit-button"
              />
            </div>
<<<<<<< HEAD

          </form>

        </center>

      </div>

=======
          </form>
        </center>
      </div>
>>>>>>> 9b306bb (First commit)
    );
  }
  
  export default TaskDetails;
  











