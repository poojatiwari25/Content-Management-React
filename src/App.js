import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContentList from "./components/ContentList";
import ContentForm from "./components/ContentForm";
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ContentList />} />
          <Route path="/add" element={<ContentForm />} />
          <Route path="/edit/:id" element={<ContentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
