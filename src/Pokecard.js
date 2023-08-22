import "./Pokecard.css"

/** Generates a pokecard from an object of pokemon data */
function Pokecard({ id, name, type, base_experience }) {
  const pokePicture = `https://raw.githubusercontent.com/PokeAPI
    /sprites/master/sprites/pokemon/${id}.png`;

  return(
    <div className="Poke-card">
      <h3>{ name }</h3>
      <img src={ pokePicture }></img>
      <p>Type: { type }</p>
      <p>EXP: { base_experience }</p>
    </div>
  );
}



  export default Pokecard;