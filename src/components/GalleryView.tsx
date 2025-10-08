import useFetchData from "./FatchData";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import "./GalleryView.css";


interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export default function GalleryView() {
  const location = useLocation(); 
  const isCarouselActive = location.pathname.startsWith("/carousel/");

  const { data, loading } = useFetchData("gallery");
  const pokemonData = (data ?? []) as Pokemon[];
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
  if (!isCarouselActive) {
    setFilterText("all"); // reset whenever gallery is active
  }
  }, []);

  const filteredData = useMemo(() => {
    if (!filterText || filterText === "all") return pokemonData;
    const needle = filterText.toLowerCase();
    return pokemonData.filter((item) =>
      item.types?.some((t: string) => t.toLowerCase().includes(needle))
    );
  }, [pokemonData, filterText]);

  const handleFilterChange = (text: string) => setFilterText(text);
  
  if (loading) return <p>Loading...</p>;

  return (
    <div>
        <div className="filter">
      {!isCarouselActive && (
        <div className="filter-buttons">
          <button onClick={() => handleFilterChange("fire")}>Fire</button>
          <button onClick={() => handleFilterChange("water")}>Water</button>
          <button onClick={() => handleFilterChange("grass")}>Grass</button>
          <button onClick={() => handleFilterChange("all")}>All</button>
        </div>
      )}
      </div>
      {/* Show results live */}
      <div className="gallery-grid">
        {filteredData.map((item) => (
          <Link to={`/carousel/${item.id}`} key={item.id} className="card">
            <img src={item.image} alt={item.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}
