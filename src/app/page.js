"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import BusinessSuccess from "@/components/BusinessSuccess";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("checkout") === "success") {
      setShowSuccess(true);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  return (
    <div>
      {showSuccess && (
        <div
          style={{
            background: "#16a34a",
            color: "white",
            textAlign: "center",
            padding: "12px",
            fontWeight: 600,
            position: "relative",
          }}
        >
          🎉 Payment successful! Your subscription is now active.
          <button
            onClick={() => setShowSuccess(false)}
            style={{
              position: "absolute",
              right: "16px",
              top: "10px",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
      )}
      <Navbar />
      <Hero />
      <Features />
      <Steps />
      <Pricing />
      <BusinessSuccess />
      <Stats />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}