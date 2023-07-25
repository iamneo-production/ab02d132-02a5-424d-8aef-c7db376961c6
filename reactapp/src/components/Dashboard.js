import React, { useEffect, useState } from 'react';
import '../styles/Styles.css';
import Addtask from './AddTask';
import Card from './Card';
import axios from 'axios';
import { doLogout, isLoggedIn } from '../auth';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await axios.get('https://8080-ebaabbafcdafacecbefdccdeaeaadbdbabf.project.examly.io/api/leader/tasks');
      setTaskList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem('taskList', JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };
  const navigate=useNavigate()
 
  const [login,setLogin]=useState(false)
  useEffect(()=>{
    setLogin(isLoggedIn());
  },[login])

  if(!login){
    navigate("/login");
  }
  const handleLogout = () =>{
    if(login){
      doLogout();
      navigate('/login');
    }
  }

  return (
    <>
      <div className="header text-center">
        <h3>LEADER DASHBOARD</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
        <button className="btn btn-primary mt-2 logout-button" onClick={handleLogout}>
        Logout
        </button>
      </div>
      <div className="task-container row">
        {taskList &&
          taskList.map((obj, index) => (
            <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} taskId={obj.taskId} />
          ))}
      </div>
      <Addtask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default Dashboard;
