import React from 'react'

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBRadio
} from 'mdb-react-ui-kit';

function UserForm() {
   
    

  return (
    <div className="App">
      <form>
        
<MDBContainer fluid className='my-1 w-50'>
<MDBRow className='g-0 align-items-center'>
<MDBCol col='6'>

    <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
    <MDBCardBody className='p-5 shadow-5 text-center'>
           <h2 className="fw-bold  mb-5">Create User Account</h2>
        

           <MDBInput wrapperClass='mb-4' label='UserName' id='form3' type='text'
           />
           
           <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='Email'
           />
           <MDBInput wrapperClass='mb-4' label='Password' id='form3' type='Password'
            />
           
          
 
        
      
     
     <>
      <MDBRadio btn btnColor='secondary' id='btn-radio1' name='options' wrapperTag='span' label="Leader"  />

      <MDBRadio btn btnColor='secondary' id='btn-radio2' name='options' wrapperClass='mx-2' wrapperTag='span' label='Member' />

     
      </>
   <br/>
    <br/>
   

        
<>
    <MDBBtn className='mx-2 w-25' size='md 'wrapperTag='span'margin>Create</MDBBtn>
      
      <MDBBtn MDBBtn className='mx-2 w-25' size='md 'wrapperTag='span' >
       Cancel
      </MDBBtn>
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
}

export default UserForm