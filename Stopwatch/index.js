let startTime;
let elapsedTime = 0;
let timerInterval;

function startStopwatch() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
  }
}

function pauseStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  updateDisplay();
}

function recordLap() {
  const lapTime = elapsedTime;
  const lapList = document.getElementById('lapTimes');
  const li = document.createElement('li');
  li.textContent = formatTime(lapTime);
  lapList.appendChild(li);
}

function clearLaps() {
  const lapList = document.getElementById('lapTimes');
  lapList.innerHTML = ''; 
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  updateDisplay();
}

function updateDisplay() {
  const timeDisplay = document.getElementById('stopwatch');
  timeDisplay.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
  const date = new Date(time);
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  const milliseconds = (date.getUTCMilliseconds() / 10).toFixed(0).padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}


updateDisplay();
