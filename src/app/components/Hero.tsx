"use client"
import Image from "next/image";
// import { Sun } from 'lucide-react';
import { useState } from 'react';


export default function Hero() {

    const [Switch, setSwitch] = useState<boolean>(false);

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 select-none">
            <div className="absolute inset-0 overflow-hidden">
                <div className={`
                    ${!Switch ? "absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent blur-2xl transform scale-150" : ""
                    }
                `}></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div
                    className="text-center"
                >
                    <div className="flex justify-center mb-8">
                        <Image onClick={() => setSwitch(!Switch)} className="w-20 h-20 text-yellow-400" src="/logo.png" alt="logo" quality={50} height={300} width={300} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Energía Solar para un
                        <span className={`transition-colors ${!Switch ? "text-yellow-400" : "text-white"}`}> Futuro Brillante</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Transformamos la luz solar en energía limpia y sostenible para tu hogar y negocio
                    </p>
                    <button
                        className={`${!Switch ? "bg-yellow-400 text-gray-900" : "bg-gray-900 text-white"} text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-gray-900 transition-colors`}
                    >
                        Descubre Más
                    </button>
                </div>
            </div>
        </div>
    );
}