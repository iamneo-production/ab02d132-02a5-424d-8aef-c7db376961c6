import React from 'react';
import './styles/TaskList.css';
 import UserForm from './components/UserForm';
import TaskList from './components/TaskList';
function App() {
  return (
    <div className="App">
     <UserForm/> 
     <TaskList/>
    </div>

  );
}
export default App