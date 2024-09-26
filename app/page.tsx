import Grid from "../components/Grid"
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { navItems } from "../../data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approaches from "@/components/Approaches";





export default function Home() {
  return (
    <main className="bg-black-100 overflow-hidden mx-auto justify-center flex-col items-center sm:px-10 px-5 relative">
      <div className="max-w-9xl">
        <FloatingNav
         navItems={navItems}
        />
        <h1> <Hero/></h1>
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Approaches/>
      </div>
    </main>
  );
}
