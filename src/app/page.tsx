import { Hero } from "../components/hero";
import { FloatingNav } from "../components/ui/floating_navbar";
import { FaHome, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import { Grid } from "@/components/grid";
import RecentProjects from "@/components/recent_projects";
import Clients from "@/components/clients";
import Experience from "@/components/experience";
import Approach from "@/components/approach";
import Footer from "@/components/footer";
import { FaCodeBranch } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black text-white flex flex-col items-center justify-center overflow-hidden min-h-screen sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
        navItems={[
            {name: "Home", link: "#about", icon: <FaHome />}, // FaHome is perfect for Home
            {name: "About", link: "#about", icon: <FaInfoCircle />}, // FaInfoCircle (or FaUser for a personal site)
            {name: "Projects", link: "#projects", icon: <FaCodeBranch />},
            {name: "Contact", link: "#", icon: <FaEnvelope />}, // FaEnvelope is perfect for Contact
          ]}
        />
        <Hero></Hero>
        <Grid />
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Approach/>
        <Footer/>
      </div>

    </main>
  );
}
