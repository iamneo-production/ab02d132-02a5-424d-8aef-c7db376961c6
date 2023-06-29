import axios from "axios";
import '../styles/Styles.css';
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from 'react-router-dom';
import { Button } from "reactstrap";

const AssignTask = () => {
  const [userdata, setUserdata] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getData();
    
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("https://8080-bdbdbfdecebafacecbefdccdeaeaadbdbabf.project.examly.io/api/users/byRole/Member");
      setUserdata(response.data);
      console.log(response.data, "----------------------");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // Fetch task details by ID
    const fetchTaskDetails = async () => {
      try {
        const response = await axios.get(`https://8080-bdbdbfdecebafacecbefdccdeaeaadbdbabf.project.examly.io/api/leader/tasks/${id}`);
        const taskData = response.data;
        setTaskName(taskData.taskName);
      } catch (error) {
        console.log(error);
        // Handle the error or display an error message to the user
      }
    };

    if (id) {
      fetchTaskDetails();
    }
  }, [id]);

  

  const handleAssignedByChange = (event) => {
    setAssignedTo(event.target.value);
    // setTaskdata(event.target.value);
  };

  const handleAssignTask = async () => {

    const taskData = {
      taskName: taskName,
      assignedTo: assignedTo
    };
    try {
      await axios.put(`https://8080-bdbdbfdecebafacecbefdccdeaeaadbdbabf.project.examly.io/api/leader/tasks/AssignTask/${id}`, taskData);
      console.log("Task assigned successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="card edit-card" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="card-body">
          <h5 className="card-title mt-3 text-center">
            <b>ASSIGN TASK</b>
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
              <label htmlFor="dropdown1">Assign To</label>
              <br />
              <select
                className="form-control"
                id="dropdown1"
                name="dropdown1"
                value={assignedTo}
                onChange={handleAssignedByChange}
              >
                {userdata.map((user) => (
                  <option key={user.id} value={user.username}>
                    {user.username}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <div className="text-center" style={{ marginTop: "1rem" }}>
            <Link to = "/Leader">
            <Button color="primary" style={{ marginRight: "1rem" }} onClick={handleAssignTask}>
              Assign
            </Button>
              </Link>
            <Button color="secondary">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignTask;
