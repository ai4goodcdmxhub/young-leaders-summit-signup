import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventInfo from "@/components/EventInfo";
import ScheduleSection from "@/components/ScheduleSection";
import SpeakersSection from "@/components/SpeakersSection";
import AlliesSection from "@/components/AlliesSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Inject Luma checkout script
    if (!document.getElementById("luma-checkout")) {
      const script = document.createElement("script");
      script.id = "luma-checkout";
      script.src = "https://embed.lu.ma/checkout-button.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main>
      <Navbar />
      <HeroSection />
      <EventInfo />
      <ScheduleSection />
      <SpeakersSection />
      <AlliesSection />
      <Footer />
    </main>
  );
};

export default Index;
