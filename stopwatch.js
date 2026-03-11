var stopwatch_time = 0;
let stopwatch;

function stopwatch_reset() {
  if (stopwatch) {
    clearInterval(stopwatch);
    stopwatch = null;
  }
  stopwatch_time = 0;
  updateStopwatchClock();
}

function updateStopwatchClock() {
  const time_absoluteValue = Math.abs(stopwatch_time);
  var time_hour = Math.floor(time_absoluteValue / 3600);
  var time_min = Math.floor(time_absoluteValue / 60) % 60;
  var time_sec = time_absoluteValue % 60;
  document.getElementById("seconds").textContent = formatTime(time_sec);
  document.getElementById("minutes").textContent = formatTime(time_min);
  document.getElementById("hours").textContent = formatTime(time_hour);
}

function increaseTime() {
  if (!stopwatch) {
  stopwatch = setInterval(() => {
    stopwatch_time ++;
    updateStopwatchClock();
  }, 1000)
  }
}

function stopwatch_start() {
  hideButtons();
  clock_scale(1.7);
  increaseTime();

  setTimeout(() => {
    document.getElementById('exit').style.display = 'block';
  }, 1500);
}

function stopwatch_exit() {
  clearInterval(stopwatch);
  stopwatch = null;

  updateStopwatchClock();
  document.querySelectorAll('.mode_toggle_btn_box').forEach(el => {
    el.style.display = 'block'
  });
  document.getElementById("exit").style.display = 'none';
  document.getElementById("start").style.display = 'block';
  document.getElementById("resettime").style.display = 'block';
  clock_scale(1);
}