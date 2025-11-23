import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import TrustedPartners from "../components/TrustedPartners";
import Video from "../components/Video";
const Home = () => {
  return (
    <>
      <NavBar Name="Vinay" Role="Student" />
      <Hero />
      <TrustedPartners />
      <Video />
    </>
  );
};

export default Home;
