import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Plans from "@/components/sections/Plans";
import Features from "@/components/sections/Features";
import Streaming from "@/components/sections/Streaming";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Plans />
        <Features />
        <Streaming />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
