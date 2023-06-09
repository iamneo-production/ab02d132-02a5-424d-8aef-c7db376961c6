import React from 'react'
import { Link } from 'react-router-dom'


function AdminNavbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-light " style={{ backgroundColor: "#e3f2fd" }} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/userform">Create  User</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/userlist">UserList</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">Logout</Link>
                            </li>

                        </ul>



                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminNavbar