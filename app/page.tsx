
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Contact from "./components/Contac";

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen">
      <Hero />
      <Features />
      <Benefits />
      <Projects />
      <Contact />
    </main>
  );
}
