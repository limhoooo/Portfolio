/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css';
import Header from "./components/header";
import Main from "./components/main";
import Project from "./components/project";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
        <Routes>
          <Route path="/project" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
