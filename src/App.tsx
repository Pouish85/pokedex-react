import PokemonCard from "./components/PokemonCard";

interface Pokemon {
  name: string;
  imgSrc?: string; // Le point d'interrogation indique que c'est facultatif
}

function App() {
  const pokemonList: Pokemon[] = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
}

export default App;
