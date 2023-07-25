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
    return <p>Loading task details...</p>;
  }
    return (
        <>
        <div className='report-header text-center'>
            <h3>Report</h3>
        </div>
        <div className='report-task mt-5'>
            <div className='report-wrapper'>
                <div className='task-holder'>
                <p key={id}>Task Id: {taskDetails.taskId}</p>
                <p>Task Name: {taskDetails.taskName}</p>
                <p>Description: {taskDetails.taskDescription}</p>
                <p>Due Date: {taskDetails.dueDate}</p>
                <p>Status: {taskDetails.status}</p>
                <p>Assigned To: {taskDetails.assignedTo}</p>
                
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