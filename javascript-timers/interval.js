var i = 0;
var count = [3, 2, 1, '~Earth Beeeelooowww Us~'];

var intervalID = setInterval(() => {
  document.querySelector('.countdown-display').innerHTML = count[i];
  i++;
  if (i > count.length - 1) {
    clearInterval(intervalID);
  }
}, 1000);
