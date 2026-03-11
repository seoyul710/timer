var mode_toggle_btn = document.getElementById('mode_toggle_btn')

function mode_toggle_click(which) {
  if (which == 'timer') {
    mode_toggle_btn.style.left = '0';
    mode_toggle_btn.style.width = '150px';
  }
  else if (which == 'stopwatch') {
    mode_toggle_btn.style.left = '170px';
    mode_toggle_btn.style.width = '210px';
  }
  else if (which == 'clock') {
    mode_toggle_btn.style.left = '400px';
    mode_toggle_btn.style.width = '150px';
  }
  setMode(which);
}

function start() {
  if (modeNow == 'timer') {
    timer_start();
  }
  else if (modeNow == 'stopwatch') {
    stopwatch_start();
  }
}

function exit() {
  if (modeNow == 'timer') {
    timer_exit();
  }
  else if (modeNow == 'stopwatch') {
    stopwatch_exit();
  }
}

function reset() {
  if (modeNow == 'timer') {
    timer_reset();
  }
  else if (modeNow == 'stopwatch') {
    stopwatch_reset();
  }
}

function startup_settings() {
  document.getElementById("add5m").addEventListener("click", () => {timeadd(300); enableStartButton();});
  document.getElementById("add10m").addEventListener("click", () => {timeadd(600); enableStartButton();});
  document.getElementById("add15m").addEventListener("click", () => {timeadd(900); enableStartButton();});
  document.getElementById("add30m").addEventListener("click", () => {timeadd(1800); enableStartButton();});
  document.getElementById("add1h").addEventListener("click", () => {timeadd(3600); enableStartButton();});
  document.getElementById("addself").addEventListener("click", () => {addself_start(); enableStartButton();});
  document.getElementById("resettime").addEventListener("click", () => {reset(); enableStartButton();});
  document.getElementById("start").addEventListener("click", () => {start();});
  document.getElementById("exit").addEventListener("click", () => {exit(); enableTimeAddButtons();});
}

startup_settings();
