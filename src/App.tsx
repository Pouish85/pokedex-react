import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

interface Pokemon {
  name: string;
  imgSrc?: string; // Le point d'interrogation indique que c'est facultatif
}

function App() {
  const [pokemonIdx, setPokemonIdx] = useState(0);

  const handlePreviousClick = () => {
    if (pokemonIdx > 0) {
      setPokemonIdx(pokemonIdx - 1);
    }
  };

  const handleNextClick = () => {
    if (pokemonIdx < pokemonList.length - 1) {
      setPokemonIdx(pokemonIdx + 1);
    }
  };
  const pokemonList: Pokemon[] = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  return (
    <div className="flex space-x-2 items-center">
      <button
        className="border border-black rounded-xl bg-gray-600 text-white h-10 px-2 hover:bg-gray-300 hover:text-black transition duration-500 font-bold"
        onClick={handlePreviousClick}
      >
        Précedent
      </button>
      <PokemonCard pokemon={pokemonList[pokemonIdx]} />
      <button
        className="border border-black rounded-xl bg-gray-600 text-white h-10 px-2 hover:bg-gray-300 hover:text-black transition duration-500 font-bold"
        onClick={handleNextClick}
      >
        Suivant
      </button>
    </div>
  );
}

export default App;
