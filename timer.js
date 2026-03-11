var time = 0;
let timer;
var input = "";
var time_temp = 0;
var time_temp_sec = 0;
var time_temp_min = 0;
var time_temp_hour = 0;
var self_input_mode = false;

function formatTime(value) {
  return String(value).padStart(2, '0');
}

function updateTimerClock() {
  const time_absoluteValue = Math.abs(time);
  var time_hour = Math.floor(time_absoluteValue / 3600);
  var time_min = Math.floor(time_absoluteValue / 60) % 60;
  var time_sec = time_absoluteValue % 60;
  document.getElementById("seconds").textContent = formatTime(time_sec);
  document.getElementById("minutes").textContent = formatTime(time_min);
  document.getElementById("hours").textContent = formatTime(time_hour);
}

function disableTimeAddButtons() {
  const timeAddBtns = ['add1h', 'add30m', 'add15m', 'add10m', 'add5m'];
  timeAddBtns.forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.disabled = true;
    }
  });
}

function enableTimeAddButtons() {
  const timeAddBtns = ['add1h', 'add30m', 'add15m', 'add10m', 'add5m'];
  timeAddBtns.forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.disabled = false;
    }
  });
}

function timeadd(time_tobeadded) {
  time += time_tobeadded;
  updateTimerClock();
}

function addself_start() {
  reset();
  self_input_mode = true;
  disableTimeAddButtons();
  document.addEventListener('keydown', addself_keyhandler);
}

function addself_keyhandler(event) {
  const pressed_key = event.key;
  if (!isNaN(pressed_key)) {
    input += pressed_key;
  }
  else if (pressed_key === "Backspace") {
    input = input.slice(0, -1);
  }
  if (input.length === 7) {
    input = input.slice(1);
  }
  enableStartButton();
  input_display();
  input_to_time();
}

function input_display() {
  const len = input.length;
  if (len === 0) {
    time_temp_sec = 0;
    time_temp_min = 0;
    time_temp_hour = 0;
  }
  else if (len === 1) {
    time_temp_sec = parseInt(input);
    time_temp_min = 0;
    time_temp_hour = 0;
  }
  else if (len === 2) {
    time_temp_sec = parseInt(input);
    time_temp_min = 0;
    time_temp_hour = 0;
  }
  else if (len === 3) {
    time_temp_sec = parseInt(input.slice(-2));
    time_temp_min = parseInt(input.slice(0, 1));
    time_temp_hour = 0;
  }
  else if (len === 4) {
    time_temp_sec = parseInt(input.slice(-2));
    time_temp_min = parseInt(input.slice(-4, -2));
    time_temp_hour = 0;
  }
  else if (len === 5) {
    time_temp_sec = parseInt(input.slice(-2));
    time_temp_min = parseInt(input.slice(-4, -2));
    time_temp_hour = parseInt(input.slice(0, 1));
  }
  else if (len === 6) {
    time_temp_sec = parseInt(input.slice(-2));
    time_temp_min = parseInt(input.slice(-4, -2));
    time_temp_hour = parseInt(input.slice(-6, -4));
  }

  document.getElementById("seconds").textContent = formatTime(time_temp_sec);
  document.getElementById("minutes").textContent = formatTime(time_temp_min);
  document.getElementById("hours").textContent = formatTime(time_temp_hour);
}

function input_to_time() {
  const len = input.length;
  if (len === 0) {
    time_temp = 0;
  }
  else if (len === 1) {
    time_temp = parseInt(input);
  }
  else if (len === 2) {
    time_temp = parseInt(input);
  }
  else if (len === 3) {
    time_temp = parseInt(input.slice(-2)) + (60 * parseInt(input.slice(0, 1)));
  }
  else if (len === 4) {
    time_temp = parseInt(input.slice(-2)) + (60 * parseInt(input.slice(-4, -2)));
  }
  else if (len === 5) {
    time_temp = parseInt(input.slice(-2)) + (60 * parseInt(input.slice(-4, -2))) + (3600 * parseInt(input.slice(0, 1)));
  }
  else if (len === 6) {
    time_temp = parseInt(input.slice(-2)) + (60 * parseInt(input.slice(-4, -2))) + (3600 * parseInt(input.slice(-6, -4)));
  }
}

function timer_reset() {
  time = 0;
  input = "";
  time_temp = 0;
  time_temp_sec = 0;
  time_temp_min = 0;
  time_temp_hour = 0;
  self_input_mode = false;
  enableTimeAddButtons();
  updateTimerClock();
}

function decreaseTime() {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(() => {
    time--;
    istimeend();
    updateTimerClock();
  }, 1000);
}

function decreaseTime_minus() {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(() => {
    time--;
    updateTimerClock();
  }, 1000);
}

function canstart() {
  if (time === 0 && time_temp === 0) {
    return false;
  }
  else if (time_temp_sec >= 60 || time_temp_min >= 60) {
    return false;
  }
  else {
    return true;
  }
}

function istimeend() {
  if (time <= 0) {
    clearInterval(timer);

    setTimeout(() => {
      document.getElementById("end_text").style.display = 'block';

      document.querySelectorAll(".time_container").forEach(el => {
        el.style.color = "#1f1f1f";
        el.style.transition = "color, 0.5s";
      });

      document.getElementById("minus_symbol").style.display = 'block';
    }, 1000);

    decreaseTime_minus()
  }
}

function hideButtons() {
  document.querySelectorAll('.mode_toggle_btn_box').forEach(el => {
    el.style.display = 'none'
  });

  document.querySelectorAll('.add_time').forEach(btn => {
    btn.style.display = 'none'
  });

  document.getElementById("start").style.display = 'none';

  document.getElementById("resettime").style.display = 'none';
}

function showButtons() {
  document.querySelectorAll('.mode_toggle_btn_box').forEach(el => {
    el.style.display = 'block'
  });

  document.querySelectorAll('.add_time').forEach(btn => {
    btn.style.display = 'block'
  });

  document.getElementById("start").style.display = 'block';

  document.getElementById("resettime").style.display = 'block';
}

function disableStartButton() {
  const startBtn = document.getElementById('start');
  startBtn.disabled = true;
}

function enableStartButton() {
  const startBtn = document.getElementById('start');
  startBtn.disabled = false;
}

function clock_scale(size) {
  document.querySelectorAll('.time_container').forEach(el => {
    if (size == 1) {
    el.style.transition = 'transform 0.2s ease-in-out';
    }
    else {
      el.style.transition = 'transform 0.5s ease-in-out';
    }
    el.style.transform = 'scale(' + size + ')';
  });
}

function timer_start() {
  if (!canstart()) {
    disableStartButton();
    return;
  }
  if (self_input_mode) {
    time = time_temp;
  }
  
  document.removeEventListener("keydown", addself_keyhandler);
  hideButtons();
  clock_scale(1.7);
  decreaseTime();

  setTimeout(() => {
    document.getElementById('exit').style.display = 'block'
  }, 1500);
}

function timer_exit() {
  clearInterval(timer)

  if (time < 0) {
    time = 0;
    document.getElementById("minus_symbol").style.display = 'block';
  }
  updateTimerClock();

  document.getElementById("exit").style.display = 'none';

  document.querySelectorAll(".time_container").forEach(el => {
      el.style.color = "#fff";
    });

  self_input_mode = false;

  showButtons();

  clock_scale(1);

  document.getElementById("end_text").style.display = 'none';

  document.getElementById("minus_symbol").style.display = 'none';
}
