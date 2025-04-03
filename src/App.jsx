import React, {useState} from "react";
import "./App.css";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

// import components
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify";

// import pages
import Home from "./pages/Home";
import Book from "./pages/Book";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import UnitedState from "./pages/UnitedState";
import India from "./pages/India";
import France from "./pages/France";
import Germany from "./pages/Germany";

const AppStyle = styled.div`
margin-top: 56px;
min-height: calc(100vh - 56px);
  body {
    font-family: "Roboto", serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: "wdth" 100;
  }

  .custom_bg {
    background-color: orange;
  }

  .sectionHeading h2 {
    margin: 20px 0px;
  }
  p{
    color: #4a4a4a;
  }
  h2{
    color: #2c3e50;
  }
`;

function App() {
  const [userName, setUserName] = useState("");
  const knowName = (userName) => {
    setUserName(userName);
  }
  return (
    <BrowserRouter basename="/WanderWay/">
    <Navbar knowName={knowName} userName={userName}/>
    <AppStyle>
      
      <Routes>
        <Route path="/" element={<Home userName={userName} />}></Route>
        <Route path="/book" element={userName?<Book/>:<Navigate to="/" />}></Route>
        <Route path="/service" element={userName?<Services/>:<Navigate to="/" />}></Route>
        <Route path="/gallery" element={userName?<Gallery/>:<Navigate to="/" />}></Route>
        <Route path="/about" element={userName?<AboutUs/>:<Navigate to="/" />}></Route>
        <Route path="/packages/united-state" element={userName?<UnitedState />:<Navigate to="/" />}></Route>
        <Route path="/packages/india" element={userName?<India />:<Navigate to="/" />}></Route>
        <Route path="/packages/france" element={userName?<France />:<Navigate to="/" />}></Route>
        <Route path="/packages/germany" element={userName?<Germany />:<Navigate to="/" />}></Route>
      </Routes>
      <Footer />
    </AppStyle>
    <ToastContainer position="top-center"/>
    </BrowserRouter>
  );
}

export default App;
