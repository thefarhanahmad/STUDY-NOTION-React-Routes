import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LogOut from "./components/LogOut";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    // wrapper
    <div className="bg-gray-800 w-full h-screen overflow-hidden box-border">
      {/* navbar */}
      <Navbar isLoggedIn={isLoggedIn} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
        <Route path="/logout" element={<LogOut setLoggedIn={setLoggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute setLoggedIn={setLoggedIn}>
              <Dashboard setLoggedIn={setLoggedIn} />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
