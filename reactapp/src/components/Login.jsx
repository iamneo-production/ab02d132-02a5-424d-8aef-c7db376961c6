import React, { useState } from 'react'
import { loginUser } from '../service/login_Service';
import { toast } from 'react-toastify';
import { doLogin, getCurrentUserDetail } from '../auth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate=useNavigate()
    const [loginDetail,setLoginDetail]=useState({
        username:'',
        password:''
    });


    const handleChange=(event,field)=>{
        let actualValue=event.target.value;
        setLoginDetail({
            ...loginDetail,
            [field]:actualValue
        })
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();

        if(loginDetail.username.trim()===""|| loginDetail.password.trim()===""){
            toast.error("Username or Password required !!")
            return;
        }
        //submit the server to generate token
        loginUser(loginDetail).then((data)=>{
            doLogin(data,()=>{
                const role=getCurrentUserDetail().userrole;
                if(role==='Member'){
                    navigate("/tasks")
                }
                else if(role==='Admin'){
                    navigate("/users")
                }
                else if(role==='Leader'){
                    navigate('/leader')
                }

            });

            toast.success("Login Success");
        }).catch(error=>{
            if(error.response.status===400 || error.response.status===404){
                toast.error(error.response.data.message)
            }
            else{

                toast.error("Somthing went wrong !!");
            }
        })


    };



  return (
    <div>
        
        <div className="container text-center">
        <div className="row">
            <div className="col">
                <img src={require("../images/loginpage_img.jpg")} className="img-fluid max-width: 100%" alt='icon'/>
            </div>
            <div className="col">
                
                <h1 className="m-5 pt-2 text-secondary">Task Management</h1>
                <div className="m-3 pt-3">
                    <form  onSubmit={handleFormSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="email" className="form-label ">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="username" onChange={(e)=>handleChange(e,'username')} value={loginDetail.username}/>
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="password" className="form-label position-relative start">Password</label>
                            <input type="password" className="form-control" id="password" name="password" onChange={(e)=>handleChange(e,'password')} value={loginDetail.password}/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary m-3 ">Login</button>
                    </form>
                </div>
            </div>
            
        </div>
        </div>
    </div>
    
  )
}
export default Login;
