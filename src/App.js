import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
