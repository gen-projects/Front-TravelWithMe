async function obterCoordenadas( endereco : string) {
  
    const localizador = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(endereco)}&format=json`
  );
    const localizacao = await localizador.json();

    if (localizacao.length > 0) {
        return {
            lat: parseFloat(localizacao[0].lat),
            lon: parseFloat(localizacao[0].lon)
        };
    }

    return null;

}


export default async function calcularDistancia( enderecoOrigem: string , enderecoDestino: string){

  const coordenadasOrigem = await obterCoordenadas(enderecoOrigem);
  const coordenadasDestino = await obterCoordenadas(enderecoDestino);

  if (coordenadasOrigem && coordenadasDestino) {
    const calcularDistancia = await fetch(`https://router.project-osrm.org/route/v1/driving/${coordenadasOrigem.lon},${coordenadasOrigem.lat};${coordenadasDestino.lon},${coordenadasDestino.lat}?overview=false`);
    const distancia = await calcularDistancia.json();

    if (distancia.routes.length > 0) {
      return {
        distancia_km: (distancia.routes[0].distance / 1000).toFixed(2),
        duracao_min: (distancia.routes[0].duration / 60).toFixed(2), 
      };
    }
  }
  
  return null;

}