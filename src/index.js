import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, } from "react-router-dom";


import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Home from "views/index.js";
import Dashboard from "views/admin/Dashboard.js"
import Login from "views/auth/Login.js"
import Register from "views/auth/Register.js"
import FooterAdmin from "components/Footers/FooterAdmin.js"
import UserDropdown from "components/Dropdowns/UserDropdown";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* add routes with layouts */}
      <Route exact path="/admin" element={<Admin/>} />
      <Route exact path="/auth" element={<Auth/>} />
      {/* add routes without layouts */}
      <Route exact path="/landing" element={<Landing/>} />
      <Route exact path="/profile" element={<Profile/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/footeradmin" element={<FooterAdmin/>} />
      <Route exact path="/userdrop" element={<UserDropdown/>} />
      <Route exact path="/" element={<Home/>} />
      {/* add redirect for first page */}
      
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
