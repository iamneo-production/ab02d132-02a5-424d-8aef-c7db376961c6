import React from 'react';
import '../styles/Styles.css';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import axios from 'axios';
import { myAxios } from '../service/helper';

const ViewDetails = ({ modal, toggle, taskObj, deleteTask, index }) => {
  const handleDelete = () => {
    // Make an HTTP DELETE request to the backend API
    
    myAxios
      .delete(`/api/leader/tasks/${taskObj.taskId}`)
      .then((response) => {
        // Call the deleteTask function to update the state in the parent component
        deleteTask(index);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Task Description</ModalHeader>
      <ModalBody>
        <div key={taskObj.id}>
          <p>Task Id: {taskObj.taskId}</p>
          <p>Task Name: {taskObj.taskName}</p>
          <p>Description: {taskObj.taskDescription}</p>
          <p>Due Date: {taskObj.dueDate}</p>
          <p>Status: {taskObj.status}</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Link to={`/EditTaskPage/${taskObj.taskId}`}>
          <Button color="primary">Edit</Button>
        </Link>
        <Button color="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Link to={`/AssignTask/${taskObj.taskId}`}>
          <Button color="success">Assign</Button>
        </Link>
      </ModalFooter>
    </Modal>
  );
};

export default ViewDetails;
