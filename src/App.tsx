import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import { NextBtn, PreviousBtn } from "./components/NavBar";

interface Pokemon {
  name: string;
  imgSrc?: string; // Le point d'interrogation indique que c'est facultatif
}

function App() {
  const [pokemonIdx, setPokemonIdx] = useState(0);

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
      <PreviousBtn setPokemonIdx={setPokemonIdx} pokemonIdx={pokemonIdx} />
      <PokemonCard pokemon={pokemonList[pokemonIdx]} />
      <NextBtn
        setPokemonIdx={setPokemonIdx}
        pokemonIdx={pokemonIdx}
        pokemonListLength={pokemonList.length}
      />
    </div>
  );
}

export default App;
