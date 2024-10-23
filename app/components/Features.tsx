import { Battery, Leaf, PiggyBank } from 'lucide-react';

const features = [
    {
        icon: <Leaf className="w-12 h-12 text-green-400" />,
        title: "Energía Limpia",
        description: "Reduce tu huella de carbono y contribuye a un planeta más saludable"
    },
    {
        icon: <PiggyBank className="w-12 h-12 text-green-400" />,
        title: "Ahorro Garantizado",
        description: "Reduce significativamente tus facturas de electricidad desde el primer día"
    },
    {
        icon: <Battery className="w-12 h-12 text-green-400" />,
        title: "Almacenamiento Eficiente",
        description: "Sistemas de batería de última generación para máximo aprovechamiento"
    }
];

export default function Features() {

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-8 rounded-xl text-center"
                        >
                            <div className="flex justify-center mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}