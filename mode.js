const add_btns = document.querySelectorAll('.add_time');
const reset_btn = document.getElementById('resettime');
const start_btn = document.getElementById('start');
const clock = document.querySelectorAll('.time_container')
const info_text = document.getElementById('info_text')
let modeNow = 'timer'


function setMode(mode){
  modeNow = mode;
  document.title = 'Seoyul710 | ' + mode;
  
  if (mode == 'timer') {
    stopClock();
    add_btns.forEach(el => {
      el.style.display = 'block';
    });
    reset_btn.style.display = 'block';
    start_btn.style.display = 'block';
    clock.forEach(el => {
      el.style.transition = 'transform 0.2s ease-in-out';
      el.style.transform = 'scale(1)';
    });
    info_text.style.display = 'none'
    updateTimerClock();
  }

  else if (mode == 'stopwatch') {
    stopClock();
    add_btns.forEach(el => {
      el.style.display = 'none';
    });
    reset_btn.style.display = 'block';
    start_btn.style.display = 'block';
    clock.forEach(el => {
      el.style.transition = 'transform 0.2s ease-in-out';
      el.style.transform = 'scale(1)';
    });
    info_text.style.display = 'none'
    updateStopwatchClock();
  }

  else if (mode == 'clock') {
    startClock();
    add_btns.forEach(el => {
      el.style.display = 'none';
    });
    reset_btn.style.display = 'none';
    start_btn.style.display = 'none';
    clock.forEach(el => {
      el.style.transition = 'transform 0.5s ease-in-out';
      el.style.transform = 'scale(1.7)';
    });
    info_text.style.display = 'block'
  }
}

