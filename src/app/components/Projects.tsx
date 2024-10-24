"use client"

interface projectProps {
    event: (videoUrl: string) => void;
}

const projects = [
    {
        title: "Experimento 1",
        video: "/vide1.mp4",
    },
    {
        title: "Experimento 2",
        video: "/vide2.mp4",
    },
];

export default function Projects({ event }: projectProps) {
    return (
        <section className="py-20 bg-gray-800 relative">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-16">
                    Nuestros Proyectos
                </h2>

                <div className="flex items-center justify-evenly gap-8 max-md:flex-col">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => event(project.video)}
                            className="relative group overflow-hidden rounded-xl cursor-pointer"
                        >
                            <video src={project.video} className="h-[25rem] w-auto"></video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
