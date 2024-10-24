import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-20 px-10 h-full bg-gray-800 flex flex-col justify-around gap-6">
            <div className="flex items-center gap-4">
                <Image className="w-12 h-12" src="/logo.png" alt="logo" quality={50} height={300} width={300} />
                <h3 className="text-yellow-400 font-semibold text-[2.5rem]">Solaris</h3>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-white">Andres Felipe Brieva</h4>
                <h4 className="text-white">Jose daniel montoya</h4>
                <h4 className="text-white">Wainer beltran</h4>
                <h4 className="text-white">Michell crismat</h4>
                <h4 className="text-white">Michael gueto</h4>
                <h4 className="text-white">Manolo pabon</h4>
                <h4 className="text-white">Madeleine gutierrez</h4>
                <h4 className="text-white">Kamilo florez</h4>
            </div>
            <div>
                <h2 className="text-gray-400">© Solaris, Inc - Todos los derechos reservados</h2>
            </div>
        </footer>
    )
}