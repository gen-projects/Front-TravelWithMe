function SobreNos() {
    return (
    
        <main className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-slate-950 bg-opacity-80 rounded-lg shadow-2xl transition-all transform hover:scale-105">
          <div className="md:w-2/5 mb-6 md:mb-0">
            <img
              alt="Sobre Nos imagem"
              className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              src="https://ik.imagekit.io/frkfxaslz/sobre.png?updatedAt=1738192884887"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:ml-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Sobre Nós
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              Somos uma plataforma de intermediação entre motoristas e passageiros, focada em
              <span className="font-bold"> mobilidade sustentável </span>
              e redução de custos de deslocamento. Conectamos motoristas com vagas disponíveis a
              passageiros com rotas em comum, promovendo eficiência e minimizando o impacto ambiental.
            </p>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              Saiba Mais
            </button>
          </div>
        </main>
    );
  }
  
  export default SobreNos;
  