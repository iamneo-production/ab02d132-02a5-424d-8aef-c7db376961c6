import React from 'react'

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



function ViewUser() {


   
  return (
    <div className="App">
      
         
<MDBContainer fluid className='my-1 w-50'>
<MDBRow className='g-0 align-items-center'>
<MDBCol col='6'>

    <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
    <MDBCardBody className='p-5 shadow-5 text-center'>
           <h2 className="fw-bold  mb-5"> User Account Details</h2>
           <MDBCard alignment='center'>
      <MDBCardHeader><b>DETAILS OF USER ID:</b></MDBCardHeader>
      <MDBCardBody>
        
        <MDBCardText>
        <MDBListGroup style={{ minWidthL: '22rem' }} light>
      <MDBListGroupItem><b>Name:</b> </MDBListGroupItem>
      <MDBListGroupItem><b>Email:</b> </MDBListGroupItem>
      <MDBListGroupItem><b>Task:</b></MDBListGroupItem>
    
      <MDBListGroupItem><b>Role:</b></MDBListGroupItem>
    </MDBListGroup>
        </MDBCardText>
      
      </MDBCardBody>
      <MDBCardFooter >  
      
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