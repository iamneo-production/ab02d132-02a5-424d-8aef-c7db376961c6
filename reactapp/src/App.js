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
function App() {
  return (
    <>
      <HomePageNavbar/>
      <TeamLeaderNavbar/>
      <TeamMemberNavbar/>      
      <Login></Login>
      <Todo></Todo>
      <UserForm/>
      <UserList/>           
      <UserList1/>
      <TaskList/>  
    </>

