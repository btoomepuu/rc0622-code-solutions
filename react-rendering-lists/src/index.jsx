import React from 'react';
import ReactDOM from 'react-dom/client';

class PokemonList extends React.Component {

  render() {
    const pokemonList = pokedex.map(pokemon =>
      <li key={pokedex.toString()}>{pokemon.name}</li>
    );
    return (
      <ul>{pokemonList}</ul>
    );
  }
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = <PokemonList />;
root.render(element);
