import React from "react";
import admin from "../images/admin3.jpg";
import task from "../images/task.png";
import taskmanage from "../images/taskm.jpg"
import report from "../images/report.jpg"
import main from "../images/main2.jpg";
import ben from "../images/ben.png"
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  let benefits = [
    {
      description: "Improved scheduling and planning",
    },
    {
      description: "Better Communication And Team Collaboration",
    },
    {
      description: "Data is organized and centralized.",
    },
    {
      description: "Progress can be easily tracked.",
    },
    {
      description: "Remote working has been improved.",
    },
    {
      description: "Increased Productivity.",
    },
  ];
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-expand-md navbar-dark w-100 sticky-top"
        style={{ backgroundColor: "#008ECC" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-4" to="/">
            TaskManagemt
          </Link>

          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="sidebar offcanvas offcanvas-end"
            id="offcanvasNavbar"
            style={{ backgroundColor: "#4169E1" }}
          >
            <div className="offcanvas-header text-white border-bottom p-3">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                TaskManagement
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white shadow-none"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end ms-auto ps-3">
                <li className="nav-item ps-lg-3">
                  <a
                    className="nav-link "
                    style={{
                      fontSize: "20px",
                      borderBottom: "2px solid transparent",
                      transition: "border-color 0.5s",
                    }}
                    href="#scrollspyservice"
                    onMouseEnter={(e) =>
                      (e.target.style.borderColor = "#0dcaf0")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.borderColor = "transparent")
                    }
                  >
                    <i className="fas fa-dashboard pe-1 text-white d-inline-block d-md-none  d-lg-none"></i>{" "}
                    Services
                  </a>
                </li>
                <li className="nav-item ps-lg-3">
                  <a
                    className="nav-link"
                    style={{
                      fontSize: "20px",
                      borderBottom: "2px solid transparent",
                      transition: "border-color 0.5s",
                    }}
                    href="#scrollspybenefit"
                    onMouseEnter={(e) =>
                      (e.target.style.borderColor = "#0dcaf0")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.borderColor = "transparent")
                    }
                  >
                    <i className="fas fa-comments pe-1 text-white d-inline-block d-md-none  d-lg-none"></i>
                    Benefits
                  </a>
                </li>

                <li className="nav-item ps-lg-3">
                  <Link
                    className="nav-link"
                    style={{
                       
                      fontSize: "20px",
                      borderBottom: "2px solid transparent",
                      transition: "border-color 0.5s",
                    }}
                    to="/login"
                    onMouseEnter={(e) =>
                      (e.target.style.borderColor = "#0dcaf0")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.borderColor = "transparent")
                    }
                  >
                    <i className="fas fa-sign-in-alt pe-1 text-white d-inline-block d-md-none  d-lg-none"></i>{" "}
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 justify-content-center align-items-center">
            <div className="mt-5">
              <div className="heading_container">
                <h1
                  id="scrollspyHeading1"
                  className="text-center"
                  style={{ fontFamily: "Roboto Slab", color: "#000000" }}
                >
                  Task Management Portal
                </h1>
              </div>
              <p
                style={{
                    
                  fontSize: "19px",
                  textAlign: "justify",
                  marginTop: "20px",
                }}
              >

Are you tired of juggling multiple tasks and struggling to stay organized? 
Look no further! Task Management tool is here to streamline your life and bring order to your daily chaos.

                It offers a centralised platform for team
                collaboration, task management and progress tracking for Team
                Leaders and members. By allowing users to manage
                activities, resources and deadlines in a single location, the
                Task management tool seeks to increase Team Leader's
                effectiveness, communication and productivity.{" "}
              </p>
              <br />
              <Link to="/login">
                <button className="btn btn-primary ">
                  {" "}
                  Get Started{" "}
                </button>
              </Link>
            </div>
          </div>

          <div className="col-md-6 ">
            <div className="img-box">
              <img
                src={main}
                height="450px"
                width="650px"
                style={{ maxWidth: "100%" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <section class="service_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <br />
            <br />
            <h2
              className="text-center"
              id="scrollspyservice"
              style={{ fontFamily: "Roboto Slab", color: "#fd694d" }}
            >
              Services
            </h2>
            <br />
          </div>
        </div>
        <div class="container ">
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="box m-3 bg-white text-center card shadow border-0 p-4">
                <div class="d-flex flex-column align-items-center">
                  <div
                    class="img-box"
                    style={{ height: "75px", width: "75px" }}
                  >
                    <img
                      src={taskmanage}
                      class="img-fluid mx-auto cursor-pointer"
                      style={{ maxWidth: "120px", maxHeight: "150px" }}
                      alt=""
                    />
                  </div>
                  <div class="detail-box">
                    <br />
                    <h4 style={{ marginTop: "20px" }}>Task Management</h4>
                    <p>
                      In Task management, the Team Leader plan, execute,
                      track and complete projects with the help of
                      team members.
         