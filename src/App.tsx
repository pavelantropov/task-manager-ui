import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./features/layout/Layout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;
