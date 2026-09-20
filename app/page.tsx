import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import LiveDemo from "@/components/LiveDemo";
import Verification from "@/components/Verification";
import Pricing from "@/components/Pricing";
import ForDoctors from "@/components/ForDoctors";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <LiveDemo />
        <Verification />
        <Pricing />
        <ForDoctors />
        <Testimonials />
        <Stats />
        <DownloadApp />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
