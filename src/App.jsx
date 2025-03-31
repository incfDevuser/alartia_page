import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import QuienesSomosPage from "./pages/QuienesSomosPage";
import AlianzasPage from "./pages/AlianzaPage";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/quienes-somos" element={<QuienesSomosPage />} />
        <Route path="/alianzas" element={<AlianzasPage />} />

      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
