import React,{useState} from 'react'

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
function CreateUser() {
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')
    const [displaycolor,setcolor] = useState('')
    const[task,setTask]=useState([])
   const handleSubmit=(event)=>{
        if(value!==''){
            setTask([...task,value2,value3,value4,value,value1,displaycolor])
            setValue('')
            setValue1('')
            setcolor('')

        }
       event.preventDefault(); 
    };
    
//   let status=["Assigned","Inprogress","Completed"]; 
  return (
    <div className="App">
      <form>
        
<MDBContainer fluid className='my-1 w-50'>
<MDBRow className='g-0 align-items-center'>
<MDBCol col='6'>

    <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
    <MDBCardBody className='p-5 shadow-5 text-center'>
           <h2 className="fw-bold  mb-5"> User Account</h2>
        

           <MDBInput wrapperClass='mb-4' label='UserName' id='form3' type='text'
           value={value2}
           onChange={(e)=>setValue2(e.target.value)} />
           <MDBInput wrapperClass='mb-4' label='Emplyee Id' id='form3' type='text'
           value={value3}
           onChange={(e)=>setValue3(e.target.value)} />
           <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='text'
           value={value4}
           onChange={(e)=>setValue4(e.target.value)} />
           
           {/* <select class="form-select" aria-label="Default select example">
  <option selected>Gender</option>
  <option value="1">Female</option>
  <option value="2">Male</option>
  <option value="3">Other</option>
</select> */}
  <MDBInput wrapperClass='mb-4' label='Task' id='form3' type='text' 
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
        <MDBInput wrapperClass='mb-4' label='DueDate' id='form4' type='date'
        value1={value1}
        onChange={(e)=>setValue1(e.target.value)}
        />
      
       {/* {status.map(result=>(
         <>
 <MDBRadio btn btnColor='secondary' id='btn-radio2' name='options' wrapperTag='span' label={result}  onChange={(e)=>setcolor(e.target.value)} value={result}/>
 
 </>
       ))}
       
     */}
     <>
      <MDBRadio btn btnColor='secondary' id='btn-radio1' name='options' wrapperTag='span' label="Leader" onChange={(e)=>setcolor(e.target.value)} value="Leader"/>

      <MDBRadio btn btnColor='secondary' id='btn-radio2' name='options' wrapperClass='mx-2' wrapperTag='span' label='Member' onChange={(e)=>setcolor(e.target.value)}  value="Member"/>

      {/* <MDBRadio btn btnColor='secondary' id='btn-radio3' name='options' wrapperTag='span' label='InProgress' onChange={(e)=>setcolor(e.target.value)} value="Inprogress"/> */}
      </>
   <br/>
    <br/>
   

        {/* <div className='d-flex justify-content-center mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Confirm changes' />
        </div> */}
<>
    <MDBBtn className='mx-2 w-25' size='md 'wrapperTag='span'margin onClick={handleSubmit}>Create</MDBBtn>
      
      <MDBBtn MDBBtn className='mx-2 w-25' size='md 'wrapperTag='span' onClick={handleSubmit}>
       Update
      </MDBBtn>
</>
        
     
    
        <div className="text-center">
             </div>

      </MDBCardBody>
      </MDBCard>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
      <div>
         <ul>
      {task.map(task=><li  value={task}>{task}</li>)}
      </ul>
      </div>
     
      </form>
     
    </div>
 
  )
}



export default CreateUser