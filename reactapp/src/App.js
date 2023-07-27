import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './components/Login';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
import Dashboard from './components/Dashboard';
import EditTaskPage from './components/EditTaskPage';
import AssignTask from './components/AssignTask';
import Report from './components/Report';
import MemberDashboard from './components/MemberDashboard';
import EditMember from './components/EditMember';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
    {/* <Login></Login> */}
    <Router>
    <ToastContainer/>
     <Routes>
{/*  
       <Route exact path="/" element={<UserList/>}  />
       <Route exact path="/admin" element={<UserList/>}  />
       <Route path="/login" element={<Login />}/>
       <Route exact path='/adduser' element={<UserForm/>}/>
       <Route exact path="/edituser/:id" element={<EditUser/>}/>
       <Route exact path="/viewuser/:id" element={<ViewUser />} /> */}
       <Route path='/' element={ <Navigate to="/LandingPage" /> }/>
        <Route path="/login" element={<Login />}/>
        <Route exact path="/users" element={<UserList/>}  />
       <Route exact path='/adduser' element={<UserForm/>}/>
       <Route exact path="/edituser/:id" element={<EditUser/>}/>
       <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
       <Route path={"/Leader"} element={<Dashboard />} />
          
          <Route path={"/EditTaskPage/:id"} element={<EditTaskPage/>}/>
          <Route path={"/AssignTask/:id"} element={<AssignTask/>}></Route>
          <Route path={"/Report/:id"} element={<Report/>}></Route>
          <Route path="/tasks" element={<MemberDashboard />} />
          <Route path={"/EditMember/:id"} element={<EditMember/>}/>
     </Routes>

     </Router>
      {/* <HomePageNavbar/>
      <TeamLeaderNavbar/>
      <TeamMemberNavbar/>      
      <Todo></Todo>
      
      <UserList/>           
      <UserList1/>
      <TaskList/>   */}
      
    </>

  );
}
export default App;
  