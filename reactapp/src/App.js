
import './App.css';
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
  );
}

export default App;
