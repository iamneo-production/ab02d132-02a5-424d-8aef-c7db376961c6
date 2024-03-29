import React, { useState, useEffect } from 'react';
import '../styles/Styles.css';
import axios from 'axios';
import { Button } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import {myAxios} from '../service/helper';


const Report = ({ taskId }) => {
  const [taskDetails, setTaskDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchTaskDetails();
  }, []);

  const fetchTaskDetails = async () => {
    try {
      const response = await myAxios.get(`/api/leader/tasks/${id}`);
      // console.log(response.data);
      setTaskDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!taskDetails) {
    return <p>Loading Report...</p>;
  }
    return (
        <>
        <div className='report-header text-left'>
            <h4>Virtusa Task Management-REPORT</h4>
        </div>
        <div className='report-task mt-5'>
          
            <div className='report-wrapper'>
                <div className='task-holder'>
                <p class="fw-bolder" key={id}>Task Id: {taskDetails.taskId}</p>
                <p class="fw-bolder">Task Name: {taskDetails.taskName}</p>
                <p class="fw-bolder">Description: {taskDetails.taskDescription}</p>
                <p class="fw-bolder">Due Date: {taskDetails.dueDate}</p>
                <p class="fw-bolder">Status: {taskDetails.status}</p>
                <p class="fw-bolder">Assigned To: {taskDetails.assignedTo}</p>
                
             <Link to="/Leader">
            <Button color="secondary">Cancel</Button>
            </Link>
                </div>
            </div>
        </div> 
        </>
    );
};

export default Report;