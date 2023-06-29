import React from 'react';
import './Home.css';
import taskImage from '../images/Task.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-image">
        <img src={taskImage} alt="Task" />
      </div>
      <div className="home-content">
        <h1>Welcome to the Task Management System</h1>
        <p>Stay organized and manage your tasks effectively!</p>
      </div>
    </div>
  );
};

export default Home;
