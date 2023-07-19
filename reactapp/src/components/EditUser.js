import React,{useEffect, useState} from 'react'
import emailjs from '@emailjs/browser';
import {
    
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRow,
    MDBCol,
  
  } from 'mdb-react-ui-kit';
import { MDBRadio } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditUser() {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_gdedojf',
    'template_qz1h9um',
    e.target,
    'lyPV9ADs50wKONbnC'
    ).then(res=>{
      console.log(res);
    }).catch(err=>console.log(err));
    }
  


  let navigate=useNavigate()
  const {id}=useParams();
    const [user, setUser] = useState({
      username:"",
      emailid:"",
      
      userrole:""
    })
  

    const{username,emailid,userrole}=user

    const onInputChange=(e)=>{
              setUser({...user,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        loadUser();
}, []);

    const onSubmit=async (e)=>{
      e.preventDefault();
      console.log(user)
      await axios.put(`https://8080-ebaabbafcdafacecbefdccdeaeaadbdbabf.project.examly.io//api/users/${id}`,user)
      navigate("/")
    };
 const loadUser =async ()=>{
    const result=await axios.get(`https://8080-ebaabbafcdafacecbefdccdeaeaadbdbabf.project.examly.io//api/users/${id}`)
    setUser(result.data)
 }
    

  return (
    <div className="App">
      
      <form onSubmit={(e) => { onSubmit(e); sendEmail(e); }}>
<MDBContainer fluid className='my-1 w-50'>
<MDBRow className='g-0 align-items-center'>
<MDBCol col='6'>

    <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
    <MDBCardBody className='p-5 shadow-5 text-center'>
           <h2 className="fw-bold  mb-5"> Edit User Account</h2>
        
          
           <MDBInput wrapperClass='mb-4' label='UserName' id='form3' type='text'
           name='username'
           value={username} 
           onChange={(e)=>onInputChange(e)}
          />
           
           <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='text'
           name='emailid'
           value={emailid}
           onChange={(e)=>onInputChange(e)}
            />
            
           
          
  
       
      
       
     <>
      <MDBRadio btn btnColor='secondary' id='btn-radio1' name='userrole' wrapperTag='span' label="Leader"   value="Leader"  checked={userrole === 'Leader'} onChange={(e)=>onInputChange(e)}/>

      <MDBRadio btn btnColor='secondary' id='btn-radio2' name='userrole' wrapperClass='mx-2' wrapperTag='span' label="Member" value="Member" checked={userrole === 'Member'}  onChange={(e)=>onInputChange(e)}/>

     
      </>
   <br/>
    <br/>
   

       
<>
<button type="submit" className="btn btn-outline-primary mx-2 w-25">
              Update
            </button>
            <Link className="btn btn-outline-danger mx-2 w-25" to="/">
              Cancel
            </Link>
</>
        

    
        <div className="text-center">
             </div>

      </MDBCardBody>
      </MDBCard>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
     
     
      </form>
     
    </div>
 
  )
    };

export default EditUser

