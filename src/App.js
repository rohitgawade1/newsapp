import './App.css';
import Navbar from './Components/Navbar';
import NewsC from './Components/NewsC';
import About from './Components/About';
import React from "react";
import {
  Routes,Route
} from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/newsapp' element={<NewsC/>}/>
        <Route path='/About' element={<About/>}/>
          
      </Routes>
    </>
  );
}

export default App;
