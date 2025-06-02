import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Header from './Header/header';
import Home from './Home/home';
import Domain from './Domain/domain';
import VerticalTimeline from './VerticalTimeline/verticalTimeline';
import Documents from './Documents/document';
import Slides from './Slides/slides';
import AboutUs from './AboutUs/aboutUs';
import ContactUs from './ContactUs/contactUs';
import Footer from './Footer/footer';
import './App.css';



// Main App Component
const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Domain />
      <VerticalTimeline />
      <Documents />
      <Slides />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;