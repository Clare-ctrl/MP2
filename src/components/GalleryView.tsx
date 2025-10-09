import useFetchData from "./FatchData";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import "./GalleryView.css";


interface Pokemon {
  id: number;
  name: string;
  image: string;
  types?: string[];
}

export default function GalleryView() {
  const location = useLocation(); 
  const isCarouselActive = location.pathname.startsWith("/carousel/");

  const { data, loading } = useFetchData("gallery");
  
  const [filterText, setFilterText] = useState('');


  const pokemonData: Pokemon[] = useMemo(() => { return data ?? [] } , [data]);
  console.log(pokemonData);
  useEffect(() => {
  
    setFilterText("all"); // reset whenever gallery is active
  }, [location.key]);

  const filteredData = useMemo(() => {
    if (!filterText || filterText === "all") { return pokemonData;}
    console.log(filterText);
    const needle = filterText.toLowerCase();
    return pokemonData.filter((item) =>
      
      item.types?.some((t: string) => t.toLowerCase().includes(needle))
    );
  }, [pokemonData, filterText]);


  const handleFilterChange = (text: string) => setFilterText(text);
  
  if (loading) return <p>Loading...</p>;
  console.log(filteredData);
  return (
    <div>
        <div className="filter">
      {!isCarouselActive && (
        <div className="filter-buttons">
          <button onClick={() => handleFilterChange("fire")}>Fire</button>
          <button onClick={() => handleFilterChange("water")}>Water</button>
          <button onClick={() => handleFilterChange("grass")}>Grass</button>
          <button onClick={() => handleFilterChange("electric")}>Electric</button>
          <button onClick={() => handleFilterChange("poison")}>Poison</button>
          <button onClick={() => handleFilterChange("bug")}>Bug</button>
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
