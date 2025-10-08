import { useState } from "react";
import useFetchData from "./FatchData";
import { Link } from "react-router-dom";
import "./SearchInput.css";

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export default function SearchInput() {
    const { data, loading } = useFetchData("search");
    const [inputValue, setInputValue] = useState('');
    const [sortOrder, setSortOrder] = useState("asc"); //default
    const [optionValue, setOption] = useState('p-name'); //default

    if (loading) return <p>Loading...</p>;

    let filteredData: Pokemon[] = [];

    if (optionValue === 'p-name') {
        filteredData = data
            .filter(item =>
                item.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .sort((a, b) =>
                sortOrder === "asc"
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name));
    }

    else if (optionValue === 'p-index') {
        filteredData = data
            .filter(item =>
                String(item.id).includes(inputValue)
            )
            .sort((a, b) =>
                sortOrder === "asc"
                    ? a.id - b.id
                    : b.id - a.id);
    }

    return (
        <div>
            <form>
                <div className="control">
                    <label>Search</label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        required />
                </div>
                <div className="control">
                    <label>Search Category</label>
                    <select id="options" value={optionValue}
                        onChange={(e) => setOption(e.target.value)}>
                        <option value="p-name">Pokémon Name</option>
                        <option value="p-index">Pokémon Index</option>
                    </select>
                </div>
                <div className="control-row">
                    <label>
                        <input type="radio" value="asc"
                            checked={sortOrder === "asc"}
                            onChange={(e) => setSortOrder(e.target.value)} />
                        Ascending
                    </label>
                    <label>
                        <input type="radio" value="desc"
                            checked={sortOrder === "desc"}
                            onChange={(e) => setSortOrder(e.target.value)} />
                        Descending
                    </label>
                </div>
            </form>
            {/* Show results live */}
            <div className="result-grid">
                {inputValue.trim() === "" ? null : (
                    filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <Link to={`/carousel/${item.id}`}  key={item.id} className="result-card">
                                <img src={item.image} alt={item.name} className="poke-img" />
                                <p><strong>#{item.id} {item.name}</strong></p>
                            </Link>
                        ))
                    ) : (
                        <p>No results found</p>
                    )
                )}
            </div>
        </div>
    );

}