import React from 'react';

export default function UserList() {
  return (
    <table className="table table-bordered">
      <thead className="table-primary">
        <tr>
          <th scope="col">
            <center>Name</center>
          </th>
          <th scope="col">
            <center>EmpID</center>
          </th>
          <th scope="col">
            <center>Email</center>
          </th>
          <th scope="col">
            <center>Status</center>
          </th>
          <th scope="col">
            <center>Role</center>
          </th>
          <th scope="col">
            <center>Actions</center>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <center>
              <p className="fw-bold mb-1">Alex Ray</p>
              
            </center>
          </td>
          <td>
            <center>
              <p className="fw-bold mb-1">001</p>
            </center>
          </td>
          <td>
            <center>
              
              <p className="text-muted mb-0">Jay.@gmail.com</p>
            </center>
          </td>
          
          <td>
            <center>
              <span className="badge bg-success">
                <center>Active</center>
              </span>
            </center>
          </td>
          <td>
            <center>Team Member</center>
          </td>
          <td>
            <div>
              <i className="fas fa-pencil-alt text-primary me-2"></i>
              <i className="fas fa-trash text-danger"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <center>
              <p className="fw-bold mb-1">Jayasree</p>
              
            </center>
          </td>
          <td>
            <center>
              <p className="fw-bold mb-1">002</p>
            </center>
          </td>
          <td>
            <center>
              
              <p className="text-muted mb-0">Jay.@gmail.com</p>
            </center>
          </td>
          <td>
            <center>
              <span className="badge bg-danger">Inactive</span>
            </center>
          </td>
          <td>
            <center>Team Member</center>
          </td>
          <td>
            <div>
              <i className="fas fa-pencil-alt text-primary me-2"></i>
              <i className="fas fa-trash text-danger"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}







