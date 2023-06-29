import React from 'react'
import {  MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function UserList2() {
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Employee ID</th>  
          <th scope='col'>Name</th>
          <th scope='col'>Task</th>
          
          
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            {/* <div className='d-flex align-items-center'> */}
              
              <div className='ms-3'>
                <p className='fw-bold mb-1'>1</p>
                
              </div>
            
          </td>
          <td>
            <p className='fw-normal mb-1'>abc</p>
    
          </td>
          <td>
          <p className='text-muted mb-0'>task 1</p>
          </td>
          
          <td>
          <MDBBtn rounded size='sm' className="btn btn-primary">approved</MDBBtn>
              <MDBBtn rounded size='sm' className="btn btn-danger ">not approved</MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            {/* <div className='d-flex align-items-center'> */}
              
              <div className='ms-3'>
                <p className='fw-bold mb-1'>2</p>
                
              </div>
            
          </td>
          <td>
            <p className='fw-normal mb-1'>xyz</p>
            
          </td>
          <td>
          <p className='text-muted mb-0'>task 2</p>
          </td>
          
          <td>
          <MDBBtn rounded size='sm' className="btn btn-primary">approved</MDBBtn>
              <MDBBtn rounded size='sm' className="btn btn-danger ">not approved</MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            {/* <div className='d-flex align-items-center'> */}
              
              <div className='ms-3'>
                <p className='fw-bold mb-1'>3</p>
                
              </div>
            
          </td>
          <td>
            <p className='fw-normal mb-1'>iiii</p>
            <p className='text-muted mb-0'></p>
          </td>
          <td>
          <p className='text-muted mb-0'>task 3</p>
          </td>
          
          <td>
          <MDBBtn rounded size='sm' className="btn btn-primary">approved</MDBBtn>
          
              <MDBBtn rounded size='sm' className="btn btn-danger ">not approved</MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  )
}

export default UserList2