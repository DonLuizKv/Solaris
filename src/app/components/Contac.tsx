import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Contáctanos
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <Phone className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Teléfono</h3>
                                    <p className="text-gray-400">+34 900 123 456</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <Mail className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Email</h3>
                                    <p className="text-gray-400">info@solaris.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Dirección</h3>
                                    <p className="text-gray-400">Calle las tajadas quemadas 123, 28001 colombia</p>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Mensaje"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                ></textarea>
                            </div>
                            <button
                                className="w-full bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}