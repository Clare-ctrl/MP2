//Import imges
import poke2 from '../assets/poke2.jpg';
import "./Header.css";

const reactDescriptions = ['Look', 'Check out', 'Play and enjoy'];
function genRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={poke2} alt="pokemon title" />
      <h1>pokémon SEARCH</h1>
      <p>
        {description}! This database can search and display Pokémon in a gallery.
      </p>
    </header>
  );
}