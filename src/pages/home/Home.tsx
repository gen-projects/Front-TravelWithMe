function Home() {
    return (
      <div
        className="bg-slate-950 text-white min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/frkfxaslz/back.jpg?updatedAt=1738192884071')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <main className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-opacity-70 bg-slate-950">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Com a Travel você vai bem</h1>
            <p className="text-lg md:text-xl mb-6">
              Máxima segurança e conforto em veículos premium, com motoristas altamente capacitados
            </p>
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold">
              Sobre Nós
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              alt="Homem banco traseiro"
              className="rounded-lg"
              src="https://ik.imagekit.io/frkfxaslz/home.jpg?updatedAt=1738192884267"
            />
          </div>
        </main>
      </div>
    );
  }
  
  export default Home;
  