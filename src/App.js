// import './App.css';
import './index.css';


import React from 'react';
// import {useState} from 'react';
import NavBar from './sections/navBar/NavBar';
import Header from './sections/header/Header';
import Home from './sections/home/Home';
import About from './sections/about/About';
import Skills from './sections/skills/Skills';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Nav from './sections/navBarFloating/Nav';



function App() {
  

  return (
    <div >
     

  
    <h1>
      

    <NavBar />
    <Header />
    <Home />
    <About />
    <Skills />
    <Portfolio/>
    <Contact/>
    <Footer/>
    <Nav />

 






    </h1>
    </div>
  );
}

export default App;
