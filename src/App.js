import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import Register from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    // <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
    // </Router>
  );
};

export default App;
