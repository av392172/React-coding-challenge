import './App.css';
import Header from './components/Header';
// import Navbar from './components/Navbar';
import TodoListTable from './components/TodoListTable';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="container border border-dark rounded">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col">
          <TodoListTable />
        </div>
        <div className="col">
          <UserDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
