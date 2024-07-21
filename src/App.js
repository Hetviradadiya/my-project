// import React, { ReactDOM } from 'react';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./HomePage/Home";
import About from "./AboutMe/About";
import Inshorts from "./InshortsAPI/Inshorts";
import GitaAPI from "./GitaAPI/GitaAPI";
import SecNav from "./Navbar/SecNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <SecNav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/bhagavad-gita" Component={GitaAPI} />
          <Route path="/news" Component={Inshorts} />
          <Route path="/*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
