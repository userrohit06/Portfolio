import { About } from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#020617]">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
