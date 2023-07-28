import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { myAxios } from "../service/helper";
import {
   
    MDBContainer,
    MDBCard,
    MDBCardBody,
    
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBRow,
    MDBListGroup,
    MDBListGroupItem,
    MDBCol,
  
  } from 'mdb-react-ui-kit';
import { Link, useParams } from 'react-router-dom';


function ViewUser() {

   const [user, setUser] = useState({
    username: "",
        emailid: "",
        usertask:"",
        duedate:"",
        userrole:""
   })

   const {id}=useParams();
   useEffect(() => {
    loadUser()
     },[])
   

   const loadUser=async()=>{
    const result=await myAxios.get(`/api/users/${id}`)
    setUser(result.data)
   }
   
  return (
    <div className="App">
      
         
<MDBContainer fluid className='my-1 w-50'>
<MDBRow className='g-0 align-items-center'>
<MDBCol col='6'>

    <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
    <MDBCardBody className='p-5 shadow-5 text-center'>
           <h2 className="fw-bold  mb-5"> User Account Details</h2>
           <MDBCard alignment='center'>
      <MDBCardHeader><b>User Id:{user.id}</b></MDBCardHeader>
      <MDBCardBody>
        
        <MDBCardText>
        <MDBListGroup style={{ minWidthL: '22rem' }} light>
      <MDBListGroupItem><b>Name:</b>  {user.username}</MDBListGroupItem>
      <MDBListGroupItem><b>Email:</b>  {user.emailid}</MDBListGroupItem>
    
    
      <MDBListGroupItem><b>Role:</b>{user.userrole}</MDBListGroupItem>
    </MDBListGroup>
        </MDBCardText>
      
      </MDBCardBody>
      <MDBCardFooter >  
      <Link className="btn btn-primary my-2" to={"/users"}>Back to Home
          </Link>
         </MDBCardFooter>
    </MDBCard>
           </MDBCardBody>
           </MDBCard>
           </MDBCol>
        
           </MDBRow>
           </MDBContainer>
         
           </div>
  )
}

export default ViewUser