import React, { useState, useEffect } from "react";
import Navbar from "../../components/header/Navbar";
import HeroSection from "../../components/hero-section/HeroSection";
import NewListing from "../../components/home-new-listing/NewListing";
import AuthModal from "../../components/auth/AuthModal";
 
const Home = () => {
  const [showModal, setShowModal] = useState(false);

   useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    < >
      <Navbar setShowModal={setShowModal} showModal={showModal} />
      <HeroSection />
      <NewListing />

      {showModal && <AuthModal setShowModal={setShowModal} />}
    </>
  );
};

export default Home;
