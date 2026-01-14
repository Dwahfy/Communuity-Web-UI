import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'
import OTP from './pages/otp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />

        {/* Add more routes later */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
