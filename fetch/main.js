fetch('https://jsonplaceholder.typicode.com/users')
  .then(responce => responce.json())
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(responce => responce.json())
  .then(data => console.log(data));
