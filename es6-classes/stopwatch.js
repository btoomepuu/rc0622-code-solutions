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
    this.elaspsedSeconds = seconds;

  }

  getTime() {
    const secondsPerHour = 3600;
    const secondsPerMinute = 60;
    let seconds = this.elaspsedSeconds;
    let hours = Math.floor(seconds / secondsPerHour);
    seconds -= (secondsPerHour * hours);
    let minutes = Math.floor(seconds / secondsPerMinute);
    seconds -= (secondsPerMinute * minutes);
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  tick() {
    this.elaspsedSeconds++;
  }

  reset() {
    this.elaspsedSeconds = 0;
  }
}