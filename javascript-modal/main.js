function openModal() {
  $openModal.style.zIndex = -1;
  $modalContainer.style.visibility = 'visible';
  $conatainerBackground.className = 'container-background-change';
}
function closeModal() {
  $openModal.style.zIndex = 0;
  $modalContainer.style.visibility = 'hidden';
  $conatainerBackground.className = 'container';
}
var $openModal = document.querySelector('.open-modal-button');
var $closeModal = document.querySelector('.close-modal-button');
var $modalContainer = document.querySelector('.modal-container');
var $conatainerBackground = document.querySelector('.container');
$openModal.addEventListener('click', openModal);
$closeModal.addEventListener('click', closeModal);
