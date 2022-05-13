import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentPage from './pages/Appoinment/AppointmentPage';
import Login from './pages/Auth/Login';
import RequiredAuth from './pages/Auth/RequiredAuth';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={<RequiredAuth><AppointmentPage /></RequiredAuth>} />
        <Route path='/login' element={<Login />} />
      </Routes>


    </div>
  );
}

export default App;
