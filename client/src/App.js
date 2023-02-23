import "./App.css";
import React from "react";
import Login from './components/Login';
import Notes from './components/Notes';
import NoteDetails from './components/NoteDetails';
import Create from './components/Create';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Notes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notes/:id" element={<NoteDetails />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
