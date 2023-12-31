interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;
  console.log(props);
  return (
    <>
      <figure className="w-96 h-[30rem] rounded-xl bg-blue-400 shadow-blue-950 shadow-md flex flex-col items-center pt-4 space-y-8">
        {pokemon.imgSrc ? (
          <img
            src={pokemon.imgSrc}
            alt="Bulbasaur"
            className=" bg-white rounded-xl w-80 shadow-lg shadow-gray-500"
          />
        ) : (
          <p className=" bg-white rounded-xl w-80 shadow-lg shadow-gray-500 h-[69%] text-3xl justify-center items-center flex">
            ???
          </p>
        )}
        <figcaption>
          <h2 className="text-4xl font-bold text-white capitalize">
            {pokemon.name}
          </h2>
        </figcaption>
      </figure>
    </>
  );
}

export default PokemonCard;
