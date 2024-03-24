import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/routes/Home";
import "@/style.css";
import NavBar from "./components/NavBar";
import ControlPanel from "./routes/ControlPanel";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panel" element={<ControlPanel />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
