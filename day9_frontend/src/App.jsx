import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./home/homepage";
import Userpage from "./home/userpage";
import AdminPage from "./home/adminpage";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <PrivateRoute path="/userpage" element={<Outlet />} allowedRoles={[1]}>
        <Route path="/" element={<Userpage />} />
      </PrivateRoute>
      <PrivateRoute path="/adminpage" element={<Outlet />} allowedRoles={[0]}>
        <Route path="/" element={<AdminPage />} />
      </PrivateRoute>
    </Routes>
  );
}

export default App;
