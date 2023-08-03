import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { path } from "./Router/router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Feeds";
import ConfirmCode from "./pages/Confirmcode";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
        <Route path={path.DASHBOARD} element={<Dashboard />} />
        <Route path={path.CONFIRMCODE} element={<ConfirmCode />} />
        <Route path={path.ABOUT} element={<About />} />
        <Route path={path.CONTACT} element={<Contact />} />
        <Route path={path.BLOG} element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
