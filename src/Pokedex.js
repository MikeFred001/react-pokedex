import Pokecard from "./Pokecard.js"



function Pokedex({ pokemon }) {
  console.log("POKEMON FOR POKEDEX>>>>>", pokemon);

  return(
    pokemon.map(p => <Pokecard pokemon={ pokemon }/>)
  );
}



  export default Pokedex;