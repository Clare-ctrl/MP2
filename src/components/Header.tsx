//Import imges
import poke1 from '../assets/poke1.png';
import "./Header.css";

const reactDescriptions = ['Look', 'Check out', 'Play and enjoy'];
function genRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={poke1} alt="pokemon title" />
      <h1>pokémon SEARCH</h1>
      <p>
        {description}! This database can search and display Pokémon in a gallery.
      </p>
    </header>
  );
}