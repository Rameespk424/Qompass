import React from "react";
// import Button from './components/buttons';
import { BrowserRouter as Router } from "react-router-dom";

import TopBar from "./ui/TopBar";
import Dashboard from "./ui/DashBoard";
import SideBar from "./ui/SideBar";

import "./App.css";

function App() {
  return (
    <Router>
      {" "}
      <div className="min-h-screen bg-gray-100">
        <TopBar />

        <div className="flex">
          <div className="w-3/4 p-6">
            <Dashboard />
          </div>

          <div className="w-1/4 bg-white p-6 shadow-md">
            <SideBar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
