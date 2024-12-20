import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./home/homepage";
import Userpage from "./home/userpage";
import AdminPage from "./home/adminpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
