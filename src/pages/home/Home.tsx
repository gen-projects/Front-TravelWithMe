function Home() {
    return (
        <div
            className="bg-slate-800 text-white min-h-screen flex flex-col items-center justify-start relative"
            style={{
                backgroundImage:
                    "url('https://ik.imagekit.io/frkfxaslz/back.jpg?updatedAt=1738192884071')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Conteúdo principal */}
            <main className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-opacity-70 bg-slate-950 rounded-lg shadow-lg w-full">
                <div className="md:w-1/2 flex-1 text-center mb-12 md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 " style={{ fontFamily: 'Arial, sans-serif' }}>
                        Explore o Mundo com o Travel With Me
                    </h1>
                    <p className="text-lg md:text-xl mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
                        Encontre os melhores destinos e tenha experiências de viagem com a máxima segurança e conforto.
                    </p>
                    <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                        Agende sua viagem
                    </button>
                </div>

                <div className="md:w-1/2 mt-6 md:mt-0 flex-1 relative flex items-center justify-center">
                    <img
                        alt="Imagem de viagem"
                        className="rounded-lg shadow-lg z-10 relative max-w-[60%] h-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
                        src="https://ik.imagekit.io/frkfxaslz/DALL_E%202025-01-30%2009.49.48%20-%20Inside%20a%20car,%20a%20passenger's%20hand%20holding%20a%20smartphone.%20On%20the%20screen%20of%20the%20smartphone,%20there%20is%20a%20logo%20featuring%20a%20car%20with%20the%20text%20'Travel%20with%20Me'.webp?updatedAt=1738241414521"
                    />
                </div>
            </main>

            {/* Section Cards */}
            <section className="w-full p-6 bg-slate-900">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {/* Card 1 - Foto */}
                    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <img
                            alt="Imagem de Destino"
                            className="w-full h-64 object-cover"
                            src="https://ik.imagekit.io/frkfxaslz/card2.png?updatedAt=1738239167850"
                        />
                    </div>

                    {/* Card 2 - Texto (Com Título de Conforto) */}
                    <div className="bg-slate-800 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Conforto</h3>
                        <p className="text-gray-400">
                            Desfrute do máximo conforto em cada viagem. Nosso app proporciona uma experiência única com carros modernos, garantindo viagens tranquilas e agradáveis, em qualquer destino.
                        </p>
                    </div>

                    {/* Card 3 - Foto */}
                    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <img
                            alt="Imagem de Destino"
                            className="w-full h-64 object-cover"
                            src="https://ik.imagekit.io/frkfxaslz/card1.png?updatedAt=1738239167724"
                        />
                    </div>

                    {/* Card 4 - Texto (Com Título de Segurança) */}
                    <div className="bg-slate-800 p-6 rounded-lg shadow-lg max-w-xs mx-auto hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Segurança</h3>
                        <p className="text-gray-400">
                            Chegue ao seu destino com total segurança. Acompanhamento em tempo real, motoristas verificados e um sistema de proteção para sua tranquilidade durante todo o trajeto.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
