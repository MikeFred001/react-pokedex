import Pokedex from "./Pokedex.js"


function Pokegame({ pokemons }) {
  const shuffled = _.shuffle(pokemons);

  const hand1 = shuffled.slice(0, 4);
  const hand2 = shuffled.slice(4);

  const hands = [ hand1, hand2 ];

  return(
    <div>
      { hands.map(h => <Pokedex pokemons={ h }/>) }
    </div>
  );
}

export default Pokegame;