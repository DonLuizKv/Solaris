import { HandHelping, Bot, Coins, Lightbulb, HardHat, } from 'lucide-react';

const benefits = [
    {
        title: "Sostenibilidad",
        description: "Promover el uso de fuentes de energía renovables para reducir la huella de carbono de los centros de datos y dispositivos tecnológicos.",
        icon: <HandHelping className="w-8 h-8 text-yellow-400" />,
    },
    {
        title: "Autonomia Energetica",
        description: "Facilitar el funcionamiento de dispositivos y sistemas en lugares remotos donde no hay acceso a la red eléctrica, como en estaciones meteorológicas o sensores IoT.",
        icon: <Bot className="w-8 h-8 text-blue-400" />,
    },
    {
        title: "Reduccion de Costos",
        description: "Disminuir los gastos en electricidad a largo plazo, lo que puede ser especialmente beneficioso para empresas que operan grandes instalaciones de servidores.",
        icon: <Coins className="w-8 h-8 text-green-400" />,
    },
    {
        title: "Innovacion",
        description: "Fomentar el desarrollo de tecnologías que integren paneles solares en dispositivos electrónicos, mejorando la eficiencia y la autonomía de los mismos.",
        icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
    },
    {
        title: "Desarrollo de Infraestructura",
        description: "Impulsar la creación de soluciones tecnológicas que utilicen energía solar para alimentar redes de telecomunicaciones, computación en la nube y otros servicios digitales.",
        icon: <HardHat className="w-8 h-8 text-red-400" />,
    },
];

export default function SolarInformatic() {

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2
                    className="text-4xl font-bold text-center text-white mb-16"
                >
                    Objetivo de la energia solar en Informatica
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-900 mx-auto mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white text-center mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-400 text-center mb-4 break-words">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}