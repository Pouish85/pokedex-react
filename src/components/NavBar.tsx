interface previousBtnProps {
  setPokemonIdx: React.Dispatch<React.SetStateAction<number>>;
  pokemonIdx: number;
}

interface nextBtnProps {
  setPokemonIdx: React.Dispatch<React.SetStateAction<number>>;
  pokemonIdx: number;
  pokemonListLength: number;
}

export function PreviousBtn(props: previousBtnProps) {
  const { setPokemonIdx, pokemonIdx } = props;
  const handlePreviousClick = () => {
    if (pokemonIdx > 0) {
      setPokemonIdx(pokemonIdx - 1);
    }
  };

  return (
    <button
      className="border border-black rounded-xl bg-gray-600 text-white h-10 px-2 hover:bg-gray-300 hover:text-black transition duration-500 font-bold"
      onClick={handlePreviousClick}
    >
      Précedent
    </button>
  );
}

export function NextBtn(props: nextBtnProps) {
  const { setPokemonIdx, pokemonIdx, pokemonListLength } = props;
  const handleNextClick = () => {
    if (pokemonIdx < pokemonListLength - 1) {
      setPokemonIdx(pokemonIdx + 1);
    }
  };

  return (
    <button
      className="border border-black rounded-xl bg-gray-600 text-white h-10 px-2 hover:bg-gray-300 hover:text-black transition duration-500 font-bold"
      onClick={handleNextClick}
    >
      Suivant
    </button>
  );
}
