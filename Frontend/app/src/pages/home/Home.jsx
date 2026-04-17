import React, { useState, useEffect } from "react";
import Navbar from "../../components/header/Navbar";
import HeroSection from "../../components/hero-section/HeroSection";
import NewListing from "../../components/home-new-listing/NewListing";
import AuthModal from "../../components/auth/AuthModal";
 
const Home = () => {
  const [showModal, setShowModal] = useState(false);

  

  return (
    <div className={`relative h-screen ${showModal ? " overflow-hidden" : ""}`}>
      <Navbar setShowModal={setShowModal} showModal={showModal} />
      <HeroSection />
      <NewListing />

      {showModal && <AuthModal setShowModal={setShowModal} />}
    </div>
  );
};

export default Home;