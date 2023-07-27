import React, { useEffect, useState } from 'react';
import '../App.css'
import MemberCard from './MemberCard';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {isLoggedIn,doLogout, getCurrentUserDetail} from '../auth';
import {myAxios} from '../service/helper';


const MemberDashboard = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

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

  const loadTasks = async () => {
    const id=getCurrentUserDetail().username;
    try {
      const response = await myAxios.get(`/api/leader/tasks/assign/${id}`);
      console.log(response.data);
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

  return (
    <>
      <div className="header text-center">
      <button className="btn btn-primary mt-2 logout-button" onClick={handleLogout}>
        Logout
    </button>
    <div className='report-header text-left'>
            <h4>Virtusa Task Management</h4>
        </div>
        
      </div>
      <div className="task-container row">
        {taskList &&
          taskList.map((obj, index) => (
            <MemberCard key={index} taskObj={obj} index={index} deleteTask={deleteTask} taskId={obj.taskId} />
          ))}
      </div>
      
    </>
  );
};

export default MemberDashboard;
