import Hero from "@/components/Hero";
import Particles from "@/components/Particles";
import { ThemeToggleButton } from "@/components/theme-toggle-btn";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ThemeToggleButton />
      <div id="app" className="max-w-6xl mx-auto p-4">
        <Hero />
      </div>
    </div>
  );
}
