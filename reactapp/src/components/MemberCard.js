import React, { useState } from 'react';
import '../App.css';
import ViewMember from './ViewMember';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
const MemberCard = ({taskObj,index,deleteTask}) => {
    const [modal,setModal]=useState(false);
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]
const toggle=()=>{
    setModal(!modal);
}

   
    return (
        <div className="task-container col-lg-4 col-12">
        <div class = "card-wrapper mr-5">
        <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
        <div class = "task-holder">
           
            
            
            <div key={taskObj.id}> 
            <p className="fw-bolder mt-2">Task Id : {taskObj.taskId}</p>
            <p class="fw-bolder">TaskName : {taskObj.taskName}</p>
            <p class="fw-bolder">Description : {taskObj.taskDescription}</p>
            <p class="fw-bolder">DueDate : {taskObj.dueDate}</p>
            <p class="fw-bolder">Status : {taskObj.status} </p>
            <div><Button style={{"background-color":colors[index%5].primaryColor,"border-radius": "5px","border":colors[index%5].primaryColor}}onClick={()=>setModal(true)}>View Details</Button></div>
            
            </div>
     
    
                 
                
            
    </div>
    <ViewMember modal={modal} toggle={toggle} taskObj={taskObj} deleteTask={deleteTask}/>
    </div>
    </div>
    );
};

export default MemberCard;