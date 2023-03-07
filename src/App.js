import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Store from "./components/Store";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import MainNav from "./components/mainNav";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
const App = () => {
  return (
    <ShoppingCartProvider>
      
      <Navbar />
      <MainNav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
        <Footer/>
    </ShoppingCartProvider>
  );
};

  export default App;