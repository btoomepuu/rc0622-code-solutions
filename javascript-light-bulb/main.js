function timeOfDay() {
  if ($dayNightButton.className === 'light') {
    $dayNightButton.className = 'dark';
    $dayNightContainer.className = 'dark-container';
  } else {
    $dayNightButton.className = 'light';
    $dayNightContainer.className = 'light-container';
  }
}
var $dayNightButton = document.querySelector('.light');
var $dayNightContainer = document.querySelector('.light-container');
$dayNightButton.addEventListener('click', timeOfDay);
