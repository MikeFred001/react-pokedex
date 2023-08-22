import Pokecard from "./Pokecard.js"


/** Generates a pokecard for each pokemon */
function Pokedex({ pokemons }) {
  return(
    pokemons.map(p => <Pokecard id={ p.id } name={p.name} type={p.type}
                base_experience={p.base_experience}/>)
  );
}



  export default Pokedex;