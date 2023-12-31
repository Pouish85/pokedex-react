function PokemonCard() {
  return (
    <>
      <figure className="w-96 h-[30rem] rounded-xl bg-blue-400 shadow-blue-950 shadow-md flex flex-col items-center pt-4 space-y-8">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Bulbasaur"
          className=" bg-white rounded-xl w-80 shadow-lg shadow-gray-500"
        />
        <figcaption>
          <h2 className="text-4xl font-bold text-white">Bulbasaur</h2>
        </figcaption>
      </figure>
    </>
  );
}

export default PokemonCard;
