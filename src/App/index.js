import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Login";
import { PageNotFound } from "../pages/PageNotFound";
import { Footer } from "../components/Footer"
import { Menu } from "../components/Menu";

function App() {
  return (
    <BrowserRouter>
        <Menu/>
          <Routes>
              <Route path="/login/" exact element={< Login />}/> 
              <Route path="/contact/" exact element={< Contact />}/>
              <Route path="/explore/" exact element={< Contact />}/>
              <Route path="/*" element={< PageNotFound />}/> 
          </Routes>
        <Footer /> 
      </BrowserRouter>
  );
}

export default App;
