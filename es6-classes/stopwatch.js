/* exported Stopwatch */

// function Stopwatch(startTimeInSeconds) {
//   this.elapsedSeconds = startTimeInSeconds;
// }

// Stopwatch.prototype.tick = function () {
//   this.elapsedSeconds++;
// };

// Stopwatch.prototype.getTime = function () {
//   const secondsPerHour = 3600;
//   const secondsPerMinute = 60;
//   let seconds = this.elapsedSeconds;
//   let hours = Math.floor(seconds / secondsPerHour);
//   seconds -= (secondsPerHour * hours);
//   let minutes = Math.floor(seconds / secondsPerMinute);
//   seconds -= (secondsPerMinute * minutes);
//   hours = hours.toString().padStart(2, '0');
//   minutes = minutes.toString().padStart(2, '0');
//   seconds = seconds.toString().padStart(2, '0');
//   return `${hours}:${minutes}:${seconds}`;
// };

// Stopwatch.prototype.reset = function () {
//   this.elapsedSeconds = 0;
// };

class Stopwatch {
  constructor(seconds) {
    this.secondsPerHour = 3600;
    this.secondsPerMinute = 60;
    this.seconds = seconds;
    this.hours = Math.floor(seconds / this.secondsPerHour);
    this.minutes = Math.floor(seconds / this.secondsPerMinute);
  }

  elaspsedSeconds() {
    return this.seconds;
  }

  getTime() {
    return this.hours;
  }

  tick() {
    this.seconds++;
  }

  reset() {
    this.seconds = 0;
  }
}

// const watch = new Stopwatch(345);
// console.log('new watch:', watch);
// console.log('elaspsed seconds:', watch.elaspsedSeconds());
// console.log('getTime:', watch.getTime());
// watch.tick();
// console.log('elaspsed seconds:', watch.elaspsedSeconds());
// watch.reset();
// console.log('elaspsed seconds:', watch.elaspsedSeconds());
