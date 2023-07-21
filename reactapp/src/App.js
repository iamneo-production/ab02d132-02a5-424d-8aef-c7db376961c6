import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './components/Login';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
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
       <Route path='/' element={ <Navigate to="/users" /> }/>
        <Route path="/login" element={<Login />}/>


       <Route exact path="/users" element={<UserList/>}  />
       <Route exact path='/adduser' element={<UserForm/>}/>
       <Route exact path="/edituser/:id" element={<EditUser/>}/>
       <Route exact path="/viewuser/:id" element={<ViewUser />} />
     </Routes>

     </Router>
      {/* <HomePageNavbar/>
      <TeamLeaderNavbar/>
      <TeamMemberNavbar/>      
      <Todo></Todo>
      
      <UserList/>           
      <UserList1/>
      <TaskList/>   */}
      {/* <UserList2/> */}
    </>

  );
}
export default App;
  