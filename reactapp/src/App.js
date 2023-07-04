
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { Login } from './components/Login';
function App() {
  return (
    <>
      <Login></Login>
      <UserForm/>
      <UserList/>
    </>
  );
}

export default App;
