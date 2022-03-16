import React, { useState, useEffect, useReducer } from "react";

const initialState={
  favorites: []
}//iniciamos para el reducer

const favoriteReducer = (state,action)=>{
  switch(action.type){
    case 'ADD_TO_FAVORITE':
      return{
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }  
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispath] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);
  //dos parametros, una funcion anonima y otra variable escuchando

  const handleClick = favorite => {
    dispath({type: 'ADD_TO_FAVORITE', payload: favorite})
  }

  return (
    <div className="Characters">
      {favorites.favorites.map(favorite =>(
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}
      {characters.map((character) => (
        <div className="item" key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={()=> handleClick(character)}>
          agregar a Favoritos
          </button>
        </div>
      ))}
    </div>
  );
};

export default Characters;
