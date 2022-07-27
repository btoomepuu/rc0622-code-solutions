var i = 0;
var count = [3, 2, 1, '~Earth Beeeelooowww Us~'];
var countDisplay = document.querySelector('.countdown-display');
var intervalID = setInterval(() => {
  countDisplay.textContent = count[i];
  i++;
  if (i > count.length - 1) {
    clearInterval(intervalID);
  }
}, 1000);
