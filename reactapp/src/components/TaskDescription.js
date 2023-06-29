import React from 'react';
import './TaskDescription.css';


const TaskList = () => {
  return (
    <div className="container">
      <h2>Task Details</h2>
      <div className="card">
        <div >
          <div className="form-group" >
            <label htmlFor="inputField">Name:</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <input type="text" className="form-control" id="status" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea className="form-control" id="description" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" className="form-control" id="date" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
