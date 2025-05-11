import React from 'react'
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from './pages/gallery';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
      
  )
}

export default App