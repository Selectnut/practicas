import React, { useState, useEffect } from 'react';
const PokemonComponent = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(page - 1) * 20}&limit=20`);
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPokemon();
  }, [page]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  const handleRowClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleClose = () => {
    setSelectedPokemon(null);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {pokemonList.map(pokemon => (
            <tr key={pokemon.name} className="tableRow" onClick={() => handleRowClick(pokemon)}>
              <td>{pokemon.name}</td>
              <td>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} style={{ width: '50px', height: '50px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPokemon && (
        <div className="pokemonCard">
          <h3>{selectedPokemon.name}</h3>
          <p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.url.split('/')[6]}.png`} alt={selectedPokemon.name} className="pokemonImage" />
          </p>
          <button onClick={handleClose} className="button">Close</button>
        </div>
      )}
      <div>
        <button className="button" onClick={handlePrevPage}>Previous</button>
        <button className="button" onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default PokemonComponent;