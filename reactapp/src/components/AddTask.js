import React, { useState } from 'react';
import '../styles/Styles.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {myAxios} from '../service/helper';
import axios from 'axios';
const Addtask = ({ modal, toggle, save }) => {
  const [taskId, setTaskId] = useState('');
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [duedate, setDueDate] = useState('');
  const [status, setStatus] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'taskId') {
      setTaskId(value);
    } else if (name === 'taskName') {
      setTaskName(value);
    } else if (name === 'description') {
      setDescription(value); 
    } 
    else if (name === 'duedate') {
      setDueDate(value); 
    } else if (name === 'status') {
      setStatus(value);
    }
  };

  const handleDueDateChange = (date) => {
    setDueDate(date);
  };

  const handleSave = async () => {
    const taskObj = {
      taskName: taskName,
      taskDescription: description,
      dueDate: duedate,
      status: status,
    };
    // console.log(taskObj,"-----------");
    try {
      const response = await myAxios.post('/api/leader/tasks/add', taskObj);
      save(response.data);
    } catch (error) {
      console.log(error);
    }

    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label htmlFor="taskName">Task Name</label>
            <input
              type="text"
              className="form-control"
              required
              value={taskName}
              onChange={handleChange}
              name="taskName"
              id="taskName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              required
              value={description}
              onChange={handleChange}
              name="description"
              id="description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <br />
            <DatePicker
              className="form-control"
              selected={duedate}
              onChange={handleDueDateChange}
              name="dueDate"
              id="dueDate"
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a due date"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                value="Todo"
                checked={status === 'Todo'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Todo</label>
            </div>
            {/* <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                value="InProgress"
                checked={status === 'InProgress'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">In Progress</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                value="Done"
                checked={status === 'Done'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label">Done</label>
            </div> */}
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Add
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Addtask;
