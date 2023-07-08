import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { Login } from './components/Login';
import UserList1 from './components/UserList1';
import HomePageNavbar from './components/HomePageNavbar';

function App() {
  return (
    <>
      <Login></Login>
      <UserForm/>
      <UserList/>      
      <UserList1/>
      <HomePageNavbar/>
    </>

  );
}
export default App;
