import React from 'react'

export const Userlist_Leader = () => {
  return (
    <div className='container mt-5 '>
      <table className="table table-bordered border border-2 table-hover ">
      <thead>
          <tr className='table-primary'>
            <th scope="col">Employee ID</th>
            <th scope="col">Name of the member</th>
            <th scope="col">task Name</th>
            <th scope="col">Approval</th>
            
          </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            
            <td><span class="badge text-bg-success"><button>approved</button></span>
            <span class="badge text-bg-danger"><button>not approved</button></span></td>
           
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td><span class="badge text-bg-success"><button>approved</button></span>
            <span class="badge text-bg-danger"><button>not approved</button></span></td>
            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td><span class="badge text-bg-success"><button>approved</button></span>
            <span class="badge text-bg-danger"><button>not approved</button></span></td>
            
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}
