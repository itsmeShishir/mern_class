import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import PrivateRoute from "./role/PrivateRoute";
import AdminMain from "./pages/admin/adminmain";
import AdminDashboard from "./pages/admin/dashboard";
import UserMain from "./pages/user/usermain";
import UserDashboard from "./pages/user/userdashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="admin" element={<PrivateRoute allowedRoles={"admin"} />}>
        <Route element={<AdminMain />} />
        <Route path="mainadmin" element={<AdminDashboard />} />
      </Route>
      {/* admin and user */}
      <Route path="user" element={<PrivateRoute allowedRoles={"user"} />}>
        <Route element={<UserMain />} />
        <Route path="mainuser" element={<UserDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
