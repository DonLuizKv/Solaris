import { SunMedium, Wind, TreePine, Factory } from 'lucide-react';

const benefits = [
    {
        title: "Energía Renovable",
        description: "Aprovecha una fuente inagotable de energía limpia directamente del sol",
        icon: <SunMedium className="w-8 h-8 text-yellow-400" />,
        stat: "100%",
        statText: "Renovable"
    },
    {
        title: "Cero Emisiones",
        description: "Contribuye a la reducción de gases de efecto invernadero",
        icon: <Wind className="w-8 h-8 text-blue-400" />,
        stat: "0",
        statText: "Emisiones CO₂"
    },
    {
        title: "Impacto Ambiental",
        description: "Protege los ecosistemas y la biodiversidad",
        icon: <TreePine className="w-8 h-8 text-green-400" />,
        stat: "25+",
        statText: "Años de Vida Útil"
    },
    {
        title: "Independencia Energética",
        description: "Reduce tu dependencia de la red eléctrica tradicional",
        icon: <Factory className="w-8 h-8 text-purple-400" />,
        stat: "70%",
        statText: "Ahorro Energético"
    }
];

export default function Benefits() {

    return (
        <section className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <h2
                    className="text-4xl font-bold text-center text-white mb-16"
                >
                    Beneficios de la Energía Solar
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 mx-auto mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white text-center mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-400 text-center mb-4">
                                {benefit.description}
                            </p>
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-yellow-400">
                                    {benefit.stat}
                                </span>
                                <span className="text-sm text-gray-400">
                                    {benefit.statText}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}