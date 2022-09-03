import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import CreateUser from './pages/CreateUser';
import Edit from './pages/Edit';
import View from './pages/View'

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={"/"} className="nav-link">Users</Link>
          </li>
          <li className='nav-item'>
            <Link to={"/create"} className="nav-link">Create New User</Link>
          </li>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/view/:id' element={<View />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
