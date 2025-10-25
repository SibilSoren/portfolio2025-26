import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <div id="app" className="max-w-6xl mx-auto p-4">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}
