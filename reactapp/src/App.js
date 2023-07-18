import './App.css';
import UserList from './components/UserList';
import Todo from './components/Todo';
import UserForm from './components/UserForm';
import { Login } from './components/Login';
import UserList1 from './components/UserList1';
import HomePageNavbar from './components/HomePageNavbar';
import TaskList from './components/TaskList';
import TeamLeaderNavbar from './components/TeamLeaderNavbar';
import TeamMemberNavbar from './components/TeamMemberNavbar';
import ViewUser from './components/ViewUser';
import EditUser from './components/EditUser';
function App() {
  return (
    <>
      <HomePageNavbar/>
      <TeamLeaderNavbar/>
      <TeamMemberNavbar/>      
      <Login></Login>
      <UserForm/>
      <EditUser/>
      <Login/>
      <ViewUser/>
      <UserList/>
      <UserList1/>
      <TaskList/>  
    </>

    
  );
}
export default App;
  
