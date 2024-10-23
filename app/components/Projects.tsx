import Image from "next/image";
const projects = [
    {
        title: "Residencial Villa Solar",
        description: "Instalación de paneles solares en 50 viviendas",
        image: "/photo-1508514177221-188b1cf16e9d.avif",
        stats: "150kW instalados"
    },
    {
        title: "Centro Comercial Eco",
        description: "Sistema solar para autoconsumo comercial",
        image: "",
        stats: "500kW instalados"
    },

];

export default function Projects() {

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-16">
                    Nuestros Proyectos
                </h2>

                <div className="flex items-center justify-evenly gap-8 max-md:flex-col">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-xl"
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    height={800}
                                    width={800}
                                    className="object-cover w-full h-64 transform group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-2">{project.description}</p>
                                <span className="text-yellow-400 font-semibold">
                                    {project.stats}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}