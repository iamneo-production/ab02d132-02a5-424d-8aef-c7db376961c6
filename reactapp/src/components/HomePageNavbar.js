import React from 'react'

export default function HomePageNavbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg  navbar-light " style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <img src="./images/logo.png"  alt ="virtusa" width="" height="30" />
                    </a>
                    <div className="d-flex" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>

                        </ul>



                    </div>
                </div>
            </nav>
    </div>
  )
}
