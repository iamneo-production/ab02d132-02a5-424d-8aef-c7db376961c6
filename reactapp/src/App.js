import './App.css';
import UserList from './components/UserList';
import Todo from './components/Todo';
import UserForm from './components/UserForm';
import { Login } from './components/Login';
import UserList1 from './components/UserList1';
import HomePageNavbar from './components/HomePageNavbar';

function App() {
  return (
    <>
      <HomePageNavbar/>
      
      <Login></Login>
      <Todo></Todo>
      <UserForm/>
      <UserList/>      
      <UserList1/>
    </>

  );
}
export default App;
  