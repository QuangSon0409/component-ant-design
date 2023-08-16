import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPrd from "./components/AddPrd";
import UpLoadFile from "./components/UpLoad";
import Sliding from "./components/Sliding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddPrd />} />
        <Route path="/upload" element={<UpLoadFile />} />
        <Route path="/signin" element={<Sliding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
