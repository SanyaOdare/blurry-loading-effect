const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let loadIntervalValue = 0;
let intervalDuration = setInterval(blurring, 30);

function blurring() {
  loadIntervalValue++;
  if (loadIntervalValue > 99) {
    clearInterval(intervalDuration);
  }
  loadText.innerText = `${loadIntervalValue}%`;
  loadText.style.opacity = scale(loadIntervalValue, 0, 100, 1, 0)
  background.style.filter = `blur(${scale(loadIntervalValue, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

