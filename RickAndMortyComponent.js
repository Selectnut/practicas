import React, { useState, useEffect } from 'react';
const RickAndMortyComponent = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [page, setPage] = useState(1);
 
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchCharacters();
  }, [page]);
 
  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };
 
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };
 
  const handleRowClick = (character) => {
    setSelectedCharacter(character);
  };
 
  const handleClose = () => {
    setSelectedCharacter(null);
  };
 
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Species</th>
            <th>Gender</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {characters.map(character => (
            <tr key={character.id} className="tableRow" onClick={() => handleRowClick(character)}>
              <td>{character.name}</td>
              <td>{character.status}</td>
              <td>{character.species}</td>
              <td>{character.gender}</td>
              <td>
                <img src={character.image} alt={character.name} style={{ width: '50px', height: '50px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCharacter && (
        <div className="characterCard">
          <h3>{selectedCharacter.name}</h3>
          <p>Status: {selectedCharacter.status}</p>
          <p>Species: {selectedCharacter.species}</p>
          <p>Gender: {selectedCharacter.gender}</p>
          <p><img src={selectedCharacter.image} alt={selectedCharacter.name} className="characterImage" /></p>
          <button onClick={handleClose} className="button">Cerrar</button>
        </div>
      )}
      <div>
        <button className="button" onClick={handlePrevPage}>Previous</button>
        <button className="button" onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};
 
export default RickAndMortyComponent;