/* exported pokedex */
function renderPokemon(object) {
  var columnDiv = document.createElement('div');
  columnDiv.setAttribute('class', 'column-third');
  var pokeCard = document.createElement('div');
  pokeCard.setAttribute('class', 'pokemon-card');
  columnDiv.appendChild(pokeCard);
  var cardTextDiv = document.createElement('div');
  cardTextDiv.setAttribute('class', 'pokemon-card-text');
  pokeCard.appendChild(cardTextDiv);
  var image = document.createElement('img');
  image.setAttribute('src', `${object.imageUrl}`);
  pokeCard.insertBefore(image, cardTextDiv);
  var description = document.createElement('p');
  description.textContent = `${object.description}`;
  cardTextDiv.appendChild(description);
  var number = document.createElement('h3');
  number.textContent = `${object.number}`;
  cardTextDiv.insertBefore(number, cardTextDiv.lastChild);
  var name = document.createElement('h2');
  name.textContent = `${object.name}`;
  cardTextDiv.insertBefore(name, cardTextDiv.firstChild);
  return columnDiv;
}

var pokedex = [
  {
    name: 'Bulbasaur',
    number: '001',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    name: 'Charmander',
    number: '004',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }

];

var row = document.querySelector('.row');

// row.append(pokedex.forEach(card => renderPokemon(card)));
pokedex.forEach(card => row.append(renderPokemon(card)));

// for (const key in object) {
//   if (key === 'imageUrl') {
//     var image = document.createElement('img');
//     image.setAttribute('src', `${object[key]}`);
//     pokeCard.insertBefore(image, cardTextDiv);
//   } else if (key === 'description') {
//     var description = document.createElement('p');
//     description.textContent = `${object[key]}`;
//     cardTextDiv.appendChild(description);
//   } else if (key === 'number') {
//     var number = document.createElement('h3');
//     number.textContent = `${object[key]}`;
//     cardTextDiv.insertBefore(number, cardTextDiv.lastChild);
//   } else if (key === 'name') {
//     var name = document.createElement('h2');
//     name.textContent = `${object[key]}`;
//     cardTextDiv.insertBefore(name, cardTextDiv.firstChild);
//   }
// }
