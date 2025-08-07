import { Route, Routes } from "react-router-dom";
import CaptainLogin from "./pages/captain-login";
import CaptainSignup from "./pages/captain-signup";
import Home from "./pages/home";
import Start from "./pages/start";
import UseerLogin from "./pages/user-login";
import UserProtectWrapper from "./pages/user-protect-wrapper";
import UserSignup from "./pages/user-signup";
import UserLogout from "./pages/UserLogout";

const App = () => {
  return (
    <div className="max-w-sm mx-auto">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UseerLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
