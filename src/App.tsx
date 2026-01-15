import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'
import OTP from './pages/otp'
import EC from './components/auth/EmailChecker'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/email-checker" element={<EC />} />

        {/* Add more routes later */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
