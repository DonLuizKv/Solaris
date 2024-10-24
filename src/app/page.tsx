"use client"
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Contact from "./components/Contac";
import SolarInformatic from "./components/SolarInformatic";
import { useState } from "react";
import { X } from "lucide-react";
import Footer from "./components/Footer";

export default function Home() {
  // Estado para controlar el modal y el video seleccionado
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Función para abrir el modal con el video seleccionado
  const openModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedVideo(null);
  };

  return (
    <main className="bg-gray-900 min-h-screen">
      {isOpen && (
        <div className="h-full w-full bg-black/50 fixed z-20 flex items-center justify-center">
          <div className="bg-gray-800 rounded-lg p-4 flex flex-col gap-4">
            <button
              onClick={closeModal}
              className="text-white w-full justify-start hover:text-red-500 transition-colors"
            >
              <X/>
            </button>
            {selectedVideo && (
              <video
                src={selectedVideo}
                controls
                className="w-full h-[40rem] rounded-lg"
              ></video>
            )}
          </div>
        </div>
      )}
      <Hero />
      <Features />
      <Benefits />
      <SolarInformatic />
      <Projects event={openModal} />
      <Contact />
      <Footer />
    </main>
  );
}
