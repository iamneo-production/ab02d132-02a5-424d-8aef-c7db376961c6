import React, { useState, useEffect } from 'react';
import '../styles/Styles.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from 'reactstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {myAxios} from '../service/helper';



const AssignTask = ({taskObj}) => {
  const [taskId, setTaskId] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState(null);
  const [status, setStatus] = useState('');
  const { id } = useParams();

  useEffect(() => {
    // Fetch task details by ID
    const fetchTaskDetails = async () => {
      try {
        const response = await myAxios.get(`/api/leader/tasks/${id}`);
        const taskData = response.data;
        setTaskName(taskData.taskName);
        setTaskDescription(taskData.taskDescription);
        setDueDate(new Date(taskData.dueDate));
        setStatus(taskData.status);
      } catch (error) {
        console.log(error);
        // Handle the error or display an error message to the user
      }
    };

    if (id) {
      fetchTaskDetails();
    }
  }, [id]);

  const handleEdit = () => {
    const taskData = {
      taskName: taskName,
      taskDescription: taskDescription,
      dueDate: dueDate,
      status: status
    };

    // Make an HTTP PUT request to update the task details by ID
    myAxios
      .put(`/api/leader/tasks/EditTask/${id}`, taskData)
      .then((response) => {
        // console.log(response.data); // Log the response from the backend
        // Handle the response or perform any necessary actions
      })
      .catch((error) => {
        console.log(error);
        // Handle the error or display an error message to the user
      });
  };

  return (
    <div>
      <div className="card edit-card" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="card-body">
          <h5 className="card-title mt-3 text-center">
            <b>EDIT TASK</b>
          </h5>
          <form>
            <div className="form-group mt-3">
              <label htmlFor="taskName">Task Name</label>
              <input
                type="text"
                className="form-control"
                required
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                required
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="dueDate">DueDate</label>
              <br />
              <DatePicker
                className="form-control"
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a due date"
              />
            </div>
            <div className="form-group mt-3">
              <label>Status</label>
              <br />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  value="Todo"
                  checked={status === 'Todo'}
                  onChange={() => setStatus('Todo')}
                />
                <label className="form-check-label">Todo</label>
              </div>
              {/* <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  value="InProgress"
                  disabled
                  checked={status === 'InProgress'}
                  onChange={() => setStatus('InProgress')}
                />
                <label className="form-check-label">In progress</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  value="Done"
                  disabled
                  checked={status === 'Done'}
                  onChange={() => setStatus('Done')}
                />
                <label className="form-check-label">Done</label>
              </div> */}
            </div>
          </form>
          <div className="text-center" style={{ marginTop: '1rem' }}>
            <Link to = "/Leader">
             <Button color="primary" style={{ marginRight: '1rem' }} onClick={handleEdit}>
               Edit
             </Button>
             </Link>
             <Link to="/Leader" >
            <Button color="secondary">Cancel</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignTask;