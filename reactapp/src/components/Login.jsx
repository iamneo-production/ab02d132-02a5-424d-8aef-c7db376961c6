import React from 'react'

export const Login = () => {
  return (
    <div>
        
        <div className="container text-center">
        <div className="row">
            <div className="col">
                <img src={require("../Images/loginpage_img.jpg")} className="img-fluid max-width: 100%" />
            </div>
            <div className="col">
                
                <h1 className="m-5 pt-2 text-secondary">Task Management</h1>
                <div className="m-3 pt-3">
                <form >
                    <div className="mb-3 text-start">
                        <label for="exampleInputEmail1" className="form-label ">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3 text-start">
                        <label for="exampleInputPassword1" className="form-label position-relative start">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    
                    <div className="row">
                        <div className="col text-start">
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Show Password</label>
                            </div>
                        </div>
                        <div className="col text-end">
                            <a className="text" href="#"><p className="text-primary">Forget password?</p></a>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary m-3 ">Submit</button>
                    </form>
                </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}