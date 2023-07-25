import React, { useState } from 'react'

function TeammembersList() {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'Logu', email: 'logu@gmail.com' },
        { id: 2, name: 'Jagan', email: 'jagan@gmail.com' },
        { id: 3, name: 'Mani', email: 'mani@gmail.com' }
      ]);
    
      const handleAssignTask = (id) => {
        // Find the employee by ID
        const updatedEmployees = employees.map((employee) => {
          if (employee.id === id) {
            return { ...employee, assigned: true };
          }
          return employee;
        });
    
        setEmployees(updatedEmployees);
      };
  return (
    <>
    <h2> Team Members List  </h2>
    <table> 
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Assign</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>
              {employee.assigned ? (
                <span>Assigned</span>
              ) : (
                <button onClick={() => handleAssignTask(employee.id)}>Assign</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  

    
  );
}

export default TeammembersList