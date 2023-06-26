import logo from './logo.svg';
import './App.css';
import AssignTask from './components/TaskDetails';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      <AssignTask/>
    </div>
  );
}

export default App;
