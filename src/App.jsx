import { useState } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Header/>
    <Hero/>

    <Routes>
      <Route path="/login" element={<Login/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App
