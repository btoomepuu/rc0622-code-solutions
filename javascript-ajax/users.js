var $userList = document.querySelector('#user-list');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();

xhr.addEventListener('load', reqListener);

function reqListener() {
  console.log('status', xhr.status);
  // console.log('response', xhr.response);
  var response = JSON.parse(xhr.responseText);
  console.log(typeof response);
  response.forEach(item => {
    var name = document.createElement('li');
    name.textContent = item.name;
    $userList.appendChild(name);
  });
}
