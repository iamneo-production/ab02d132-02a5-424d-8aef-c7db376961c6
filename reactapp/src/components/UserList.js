import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBContainer,MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function UserList() {
  
  const [users,setUsers]=useState([]);
  const [searchText, setSearchText] = useState('');
    const [searchCategory, setSearchCategory] = useState('')
    const handleSearch = () => {
      let filteredUsers = users;
      if (searchText) {
        filteredUsers = users.filter((user) => {
          if (searchCategory === 'username') {
            return user.username.toLowerCase().includes(searchText.toLowerCase());
          } else if (searchCategory === 'id') {
            const empId = String(user.id); // Convert empId to string
            return empId === searchText;
          }
          return false;
        });
      }
      return filteredUsers;
    };
  const {id }=useParams()

useEffect(()=>{
  loadUsers();
},[]);

const loadUsers=async()=>{
  const result=await axios.get("http://localhost:8080/users")
setUsers(result.data);
};

const deleteUser=async(id)=>{
  await axios.delete(`http://localhost:8080/user/${id}`)
  loadUsers()
}


  return (
    <>
    <MDBNavbar light bgColor='light'>
    <MDBContainer tag="form" fluid className='justify-content-start'>
    <MDBNavbarBrand tag="span" className='mb-0 h1'>Virtusa Task Management</MDBNavbarBrand>
    
       <button active aria-current='page' className="btn btn-primary mx-2" type='button'>
              Userlist
            </button>
           
            <Link  className="btn btn-outline-primary mx-2" to="/adduser">
            Create User
            </Link>
            <form className='d-flex input-group w-auto'>
            <select class="form-select mx-2 w-25" aria-label="Default select example"  value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)}>
  <option selected>Search by</option>
  <option value="username">UserName</option>
  <option value="id">UserId</option>
  
</select>
            <input type='search' className='form-control mx-2 w-25' placeholder='Search...' aria-label='Search' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button  className="btn btn-primary mx-2"  onClick={handleSearch}>Back</button>
           
          </form>
           
            </MDBContainer>
    </MDBNavbar>    


   <>
   
   </>

       <br/>
       <br/>
       <br/>
    
    <MDBTable align='middle'>
      <MDBTableHead className='table-primary'>

        <tr>
        <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          
          <th scope='col'>Role</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>

        {/* {
          users.map((user,index)=>(
            <tr>
            <th scope='row' key={index}>{index+1}</th>
            <td>{user.username}</td>
            <td>{user.emailid}</td>
           
            <td>{user.userrole}</td>
            <td>
              
              <Link   className="btn btn-danger mx-2" to={`/edituser/${user.id}`}>
                Edit
              </Link>
            
              
              <button  className="btn btn-outline-primary mx-2" onClick={() => deleteUser(user.id)}>
                Delete
              </button>
              <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
              
            </td>
          </tr>
          ))
        }; */}
         {handleSearch().map((user,index) => (
            <tr>
            <th scope='row' key={index}>{user.id}</th>
            <td>{user.username}</td>
            <td>{user.emailid}</td>
           
            <td>{user.userrole}</td>
            <td>
              
              <Link   className="btn btn-danger mx-2" to={`/edituser/${user.id}`}>
                Edit
              </Link>
            
              
              <button  className="btn btn-outline-primary mx-2" onClick={() => deleteUser(user.id)}>
                Delete
              </button>
              <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
              
            </td>
          </tr>
          ))
        }
        
       
        
      </MDBTableBody>
    </MDBTable>
    
    
    </>
   
  )
}

export default UserList