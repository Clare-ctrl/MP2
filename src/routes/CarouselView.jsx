import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "../components/FatchData";
import './Carousel.css';

export default function CarouselView() {

    const { data } = useFetchData("gallery");
    const { id } = useParams();
    const navigate = useNavigate();

    const currentIndex = data.findIndex((p) => p.id === Number(id));
    const currentPokemon = data[currentIndex];

    const goPrev = () => {
        const prevIndex = (currentIndex - 1 + data.length) % data.length;
        navigate(`/carousel/${data[prevIndex].id}`);
    };

    const goNext = () => {
        const nextIndex = (currentIndex + 1) % data.length;
        navigate(`/carousel/${data[nextIndex].id}`);
    };

    if (!currentPokemon) return <p>Pokémon not found</p>;

    return (
        <div className="carousel">
            <button onClick={goPrev}>⬅ Prev</button>
            <div className="pokemon-card">
                <div key={currentPokemon.id} >
                    <div className="p-card">
                        <h3>{currentPokemon.id} {currentPokemon.name}</h3>
                        <img src={currentPokemon.image} alt={currentPokemon.name} />
                    </div>
                    <div className="card-text">
                        <p>Types: {currentPokemon.types.join(", ")}</p>
                        <ul>
                            {currentPokemon.stats.map((s) => (
                                <li key={s.name}>
                                    {s.name}: {s.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <button onClick={goNext}>Next ➡</button>
        </div>
    );
}