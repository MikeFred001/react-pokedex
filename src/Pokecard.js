



function Pokecard(pokemon) {
  console.log("POKEMON FOR POKECARD>>>>>", pokemon);
  const pokePicture = `https://raw.githubusercontent.com/
    PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return(
    <div>
      <h3>{ pokemon.name }</h3>
      <img src={ pokePicture }></img>
      <p>Type: { pokemon.type }</p>
      <p>EXP: { pokemon.base_experience }</p>
    </div>
  );
}



  export default Pokecard;