
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { Login } from './components/Login';
import UserList1 from './components/UserList1';
import TeammembersList from './components/TeammembersList';

function App() {
  return (
    <>
      <Login></Login>

      <UserForm/>

      <UserList/>
      
      <UserList1/>
      <TeammembersList></TeammembersList>
    </>

  );
}
export default App;
