import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Places from "./Pages/Places";
import Signup from "./Pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Package from "./Pages/Package";
import Soon from "./Pages/Soon";
import Bikes from "./Pages/Bikes";
import Addbike from "./Pages/addBike.jsx";
import Bike from "./Pages/bike.jsx";
import BikeDetails from "./Pages/bikeDetails";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Places" element={<Places />} />
          <Route path="/Package" element={<Package />} />
          <Route path="/Soon" element={<Soon />} />
          <Route path="/Bikes" element={<Bikes />} />
          <Route path="/Addbike" element={<Addbike />} />
          <Route path="/Bike" element={<Bike />} />
          <Route path="/bikes/:id" element={<BikeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
