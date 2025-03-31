import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutAlertia from "../components/AboutAlertia";
import Features from "../components/Features";
import LazoTool from "../components/LazoTool";
import OpenSourceSection from "../components/OpenSourceSection";
import BuisnessSection from "../components/BuisnessSection";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

const HomePage = () => {
  return (
    <PageTransition>
      <div className="flex flex-col p-11">
        <Header />
        <Hero />
        <AboutAlertia />
        <Features />
        <LazoTool />
        <BuisnessSection />
        <OpenSourceSection />
        <ContactPage />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default HomePage;
