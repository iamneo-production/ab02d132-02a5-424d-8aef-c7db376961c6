import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Login } from './components/Login';
import UserList from './components/UserList';
import Todo from './components/Todo';
import UserForm from './components/UserForm';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
import UserList1 from './components/UserList1';
import HomePageNavbar from './components/HomePageNavbar';
import TaskList from './components/TaskList';
import TeamLeaderNavbar from './components/TeamLeaderNavbar';
import TeamMemberNavbar from './components/TeamMemberNavbar';
import UserList2 from './components/UserList2';
function App() {
  return (
    <>
    {/* <Login></Login> */}
    <Router>
     

     <Routes>
 
       <Route exact path="/" element={<UserList/>}  />
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
  