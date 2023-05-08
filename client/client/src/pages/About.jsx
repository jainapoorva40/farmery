import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Chat from "../components/Chat"
import Dresses from "../components/Dresses"

const About = () => {
  return (
    <div>
      <Navbar />
      <Dresses/>
      <Newsletter/>
      <Footer/>
      <Chat/>
    </div>
  );
};

export default About;