let clicks = 0;

function clickCount() {
  clicks++;
  $clickCount.textContent = ` Clicks: ${clicks}`;
  if (clicks < 4) {
    return;
  }
  if (clicks < 7) {
    $hotButton.className = 'hot-button cool';
    return;
  }
  if (clicks < 10) {
    $hotButton.className = 'hot-button tepid';
    return;
  }
  if (clicks < 13) {
    $hotButton.className = 'hot-button warm';
    return;
  }
  if (clicks < 16) {
    $hotButton.className = 'hot-button hot';
    return;
  }
  $hotButton.className = 'hot-button nuclear';
}

var $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
$hotButton.addEventListener('click', clickCount);
