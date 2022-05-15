import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentPage from './pages/Appoinment/AppointmentPage';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import RequiredAuth from './pages/Auth/RequiredAuth';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard/Dashboard';
import MyBooking from './pages/Dashboard/MyBooking';
import MyReviews from './pages/Dashboard/MyReviews';
import MyHistory from './pages/Dashboard/MyHistory';

function App() {
  return (
    <div>
      <Toaster />
      <Navbar >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/appointment' element={<RequiredAuth><AppointmentPage /></RequiredAuth>} />
          <Route path='/dashboard' element={<RequiredAuth><Dashboard /></RequiredAuth>} >
            <Route index element={<MyBooking />} />
            <Route path='reviews' element={<MyReviews />} />
            <Route path='history' element={<MyHistory />} />


          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Navbar>


    </div>
  );
}

export default App;
