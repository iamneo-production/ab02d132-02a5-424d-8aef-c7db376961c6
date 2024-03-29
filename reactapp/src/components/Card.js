import React, { useState } from 'react';
import ViewDetails from './ViewDetails';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/Styles.css';
import axios from 'axios';
const Card = ({taskObj,index,deleteTask}) => {
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
            <p className="mt-2 fw-bold">Task Id : {taskObj.taskId}</p>
            <p className='fw-bold'>TaskName : {taskObj.taskName}</p>
            {/* <p>Description : {taskObj.taskDescription}</p>
            <p>DueDate : {taskObj.dueDate}</p> */}
            <p className='fw-bold'>Status : {taskObj.status} </p>
            <div class="d-flex justify-content-lg-between justify-content-evenly">

            <div><Button style={{"background-color":colors[index%5].primaryColor,"border-radius": "5px","border":colors[index%5].primaryColor}}onClick={()=>setModal(true)}>View</Button></div>
                <div>
                    <Link to = {`/Report/${taskObj.taskId}`}>
                    <Button className="btn1" style={{"background-color":colors[index%5].primaryColor,"border-radius": "5px","border":colors[index%5].primaryColor}}>Report</Button>   
                    </Link>
                </div>
            </div>
            </div>
     
    
                 
                
            
    </div>
    <ViewDetails modal={modal} toggle={toggle} taskObj={taskObj} deleteTask={deleteTask}/>
    </div>
    </div>
    );
};

export default Card;