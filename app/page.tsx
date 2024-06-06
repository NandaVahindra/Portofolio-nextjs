import Footer from "@/components/Footer";
// import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import dynamic from "next/dynamic";

export default function Home() {
  const Grid = dynamic(() => import("@/components/Grid"), {
    ssr: false,
  });
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto
    sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProject/>
        <Footer/>
      </div>
    </main>
  );
}
