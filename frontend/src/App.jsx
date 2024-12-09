import { Route, Routes } from 'react-router-dom';
import CaptainLogin from './pages/captain-login';
import CaptainSignup from './pages/captain-signup';
import Home from './pages/home';
import UseerLogin from './pages/user-login';
import UserSignup from './pages/user-signup';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UseerLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
