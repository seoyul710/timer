let clockinterval;
let date = new Date();
let timeZone = date.toString().match(/\((.*?)\)$/)[1]
document.getElementById('info_text').innerHTML = timeZone

function updateClock() {
  let time_now = new Date();
  var time_hour = time_now.getHours();
  var time_min = time_now.getMinutes();
  var time_sec = time_now.getSeconds();

  document.getElementById("seconds").textContent = formatTime(time_sec);
  document.getElementById("minutes").textContent = formatTime(time_min);
  document.getElementById("hours").textContent = formatTime(time_hour);
}

function startClock() {
  if (!clockinterval) {
    updateClock();
    clockinterval = setInterval(updateClock, 1000);
  }
}

function stopClock() {
  clearInterval(clockinterval);
  clockinterval = null;
  document.getElementById("seconds").textContent = "00";
  document.getElementById("minutes").textContent = "00";
  document.getElementById("hours").textContent = "00";
}