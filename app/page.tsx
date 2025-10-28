import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <div id="app" className="max-w-6xl mx-auto p-4">
        <NavBar />
        <Hero />
        <Skills />
      </div>
    </div>
  );
}
