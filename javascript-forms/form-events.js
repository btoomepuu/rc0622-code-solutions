function handleFocus(event) {
  console.log('focus was fired');
  console.log('event.target.name', event.target.name);
}
function handleBlur(event) {
  console.log('blur was fired)');
  console.log('event.target.name', event.target.name);
}
function handleInput(event) {
  console.log(`the value of ${event.target.name}: ${event.target.value}`);
}

var $userName = document.querySelector('#user-name');
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

var $userEmail = document.querySelector('#user-email');
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

var $userMessage = document.querySelector('#user-message');
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
