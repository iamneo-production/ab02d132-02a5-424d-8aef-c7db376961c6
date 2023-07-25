import React,{useState} from 'react'
import { generate } from '@wcj/generate-password';
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
import { Link, useNavigate } from 'react-router-dom';
import {myAxios} from '../service/helper';


function UserForm() {

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_gdedojf',
    'template_jy1b2xb',
    e.target,
    'lyPV9ADs50wKONbnC'
    ).then(res=>{
      // console.log(res);
    }).catch(err=>console.log(err));
  }

  
  generate({ special: false, numeric: false });



  let navigate=useNavigate()
    const [user, setUser] = useState({
      username:"",
      emailid:"",
     password:"",
      userrole:""
    })
   
    // const client = axios.create({
    //   baseURL: "https://8080-ebaabbafcdafacecbefdccdeaeaadbdbabf.project.examly.io/",
    // });

    const{username,emailid,password,userrole}=user

    const onInputChange=(e)=>{
              setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit=async (e)=>{
      e.preventDefault();
      //// console.log(user)
      const { data } = await myAxios.post("/api/users/add",user)
      // console.log(data);
      
      sendEmail(e);
      navigate("/users")
    };
 
    

  return (
    <div className="App">
      
      <form onSubmit={(e) => { onSubmit(e); }}>
<MDBContainer fluid className='my-1 w-50'>
<MDBRow className='g-0 align-items-center'>
<MDBCol col='6'>

    <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
    <MDBCardBody className='p-5 shadow-5 text-center'>
           <h2 className="fw-bold  mb-5"> Create User Account</h2>
        
          
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
           
          
           <MDBInput
  wrapperClass='mb-4'
  label='Password'
  id='form3'
  type='password'
  name='password'
  value={password}
  onFocus={(e) => {
    e.preventDefault();
    const generatedPassword = generate({ special: false, numeric: false });
    setUser({ ...user, password: generatedPassword });
  }}
/>
       
      
       
     <>
      <MDBRadio btn btnColor='secondary' id='btn-radio1' name='userrole' wrapperTag='span' label="Leader"   value="Leader"  checked={userrole === 'Leader'} onChange={(e)=>onInputChange(e)}/>

      <MDBRadio btn btnColor='secondary' id='btn-radio2' name='userrole' wrapperClass='mx-2' wrapperTag='span' label="Member" value="Member" checked={userrole === 'Member'}  onChange={(e)=>onInputChange(e)}/>

     
      </>
   <br/>
    <br/>
   

       
<>
<button type="submit" className="btn btn-primary mx-2 w-25">
              Create
            </button>
            <Link className="btn btn-danger mx-2 w-25" to="/users">
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

export default UserForm

