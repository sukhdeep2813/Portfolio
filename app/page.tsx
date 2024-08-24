import Grid from "../components/Grid"
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";



export default function Home() {
  return (
    <main className="bg-black-100 overflow-hidden mx-auto justify-center flex-col items-center sm:px-10 px-5 relative">
      <div className="max-w-9xl">
        <FloatingNav
         navItems={[ 
          {name: "Home", link: "/", icon: <FaHome/>}
        ]}
        />
        <h1> <Hero/></h1>
        <Grid/>
        <RecentProjects/>
      </div>
    </main>
  );
}
