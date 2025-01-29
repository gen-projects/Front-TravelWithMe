function SobreNos() {
    return (
      <div
        className="bg-slate-950 text-white min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://ik.imagekit.io/frkfxaslz/back.jpg?updatedAt=1738192884071')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <main className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-slate-950 bg-opacity-80 rounded-lg shadow-xl">
          <div className="md:w-2/5"> 
            <img
              alt="Sobre Nos imagem"
              className="rounded-lg shadow-lg"
              src="https://ik.imagekit.io/frkfxaslz/sobre.png?updatedAt=1738192884887" 
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:ml-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Sobre Nós
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Somos uma plataforma de intermediação entre motoristas e passageiros, focada em
              <span className="text-yellow-400 font-bold"> mobilidade sustentável </span>
              e redução de custos de deslocamento. Conectamos motoristas com vagas disponíveis a passageiros com rotas em comum, promovendo eficiência e minimizando o impacto ambiental.
            </p>
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all">
              Saiba Mais
            </button>
          </div>
        </main>
      </div>
    );
  }
  
  export default SobreNos;
  