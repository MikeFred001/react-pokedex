



function Pokedex(pokemon) {
  console.log("POKEMON>>>>>", pokemon);

  return(
    pokemon.map(p => <Pokecard p={ pokemon }/>)
  );
}



  export default Pokedex;