interface navBarProps {
  btnType: string;
  setPokemonIdx: React.Dispatch<React.SetStateAction<number>>;
  pokemonIdx: number;
  pokemonListLength?: number;
}

function NavBar(props: navBarProps) {
  const { btnType, setPokemonIdx, pokemonIdx, pokemonListLength } = props;
  const handlePreviousClick = () => {
    if (pokemonIdx > 0) {
      setPokemonIdx(pokemonIdx - 1);
    }
  };
  const handleNextClick = () => {
    if (pokemonListLength !== undefined && pokemonIdx < pokemonListLength - 1) {
      setPokemonIdx(pokemonIdx + 1);
    }
  };
  return (
    <button
      className="border border-black rounded-xl bg-gray-600 text-white h-10 px-2 hover:bg-gray-300 hover:text-black transition duration-500 font-bold"
      onClick={btnType === "Suivant" ? handleNextClick : handlePreviousClick}
    >
      {btnType}
    </button>
  );
}

export default NavBar;
