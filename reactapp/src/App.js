import React from 'react';

<<<<<<< HEAD
import UserList from './components/UserList';

export default function App() {
  return (
    <div>
      
      <UserList/>
=======
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
// import AdminNavbar from './components/AdminNavbar';
import UserForm from './components/UserForm';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   // Link,
//   Routes
// } from "react-router-dom";

// import HomePageNavbar from './components/HomePageNavbar';
// import TeamLeaderNavbar from './components/TeamLeaderNavbar';
// import TeamMemberNavbar from './components/TeamMemberNavbar';

function App() {
  return (
    <>
      <div className="App">
        <UserForm/>
        {/* <AdminNavbar/> */}
        {/* <HomePageNavbar/>
        <TeamLeaderNavbar/>
        <TeamMemberNavbar/> */}

        {/* <Router>
          <HomePageNavbar/>
          <div className="container my-3" >
            <Routes>
              <Route exact path="/userform" element={<UserForm />}>
              </Route>
              <Route exact path="/userlist" element={<UserList/>}>
              </Route>
              <Route exact path="/logout" element={<Logout/>}>
              </Route>
            </Routes>
          </div>
        </Router> */}

        {/* <Router>
          <AdminNavbar/>
          <div className="container my-3" >
            <Routes>
              <Route exact path="/userform" element={<UserForm />}>
              </Route>
              <Route exact path="/userlist" element={<UserList/>}>
              </Route>
              <Route exact path="/logout" element={<Logout/>}>
              </Route>
            </Routes>
          </div>
        </Router> */}

        {/* <Router>
          <TeamLeaderNavbar/>
          <div className="container my-3" >
            <Routes>
              <Route exact path="/userform" element={<UserForm />}>
              </Route>
              <Route exact path="/userlist" element={<UserList/>}>
              </Route>
              <Route exact path="/logout" element={<Logout/>}>
              </Route>
            </Routes>
          </div>
        </Router> */}

        {/* <Router>
          <TeamMemberNavbar/>
          <div className="container my-3" >
            <Routes>
              <Route exact path="/userform" element={<UserForm />}>
              </Route>
              <Route exact path="/userlist" element={<UserList/>}>
              </Route>
              <Route exact path="/logout" element={<Logout/>}>
              </Route>
            </Routes>
          </div>
        </Router> */}

      </div>
    </>
=======
import TaskDetails from './components/TaskDetails';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Home/>
     <TaskDetails/>
>>>>>>> Project-Workspace-Rishu-Gangishetti
    </div>

>>>>>>> main
  );
}
