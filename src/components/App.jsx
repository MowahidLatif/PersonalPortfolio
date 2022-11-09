import React from "react";
import "../css/index.css";
import Header from "./Header"
import Nav from "./Nav"
import Experience from './Experience'
import Footer from "./Footer"
import About from "./About"
import Contact from "./Contact"
import Services from "./Services"

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;