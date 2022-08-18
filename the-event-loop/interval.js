let count = 3;
const blastOff = setInterval(countDown, 1000);

function countDown() {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(blastOff);
  } else {
    console.log(count);
    count--;
  }
}
