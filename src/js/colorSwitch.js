import colors from './colors.js';

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const target = document.querySelector('body');
let timerId;

btnStart.addEventListener('click', enableSwitcher);
btnStop.addEventListener('click', disableSwitcher);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function enableSwitcher() {
  switchActiveButton(btnStop, btnStart);
  timerId = setInterval(() => {
    return runSwitcher();
  }, 1000);
  console.log(timerId);
}

function disableSwitcher() {
  switchActiveButton(btnStart, btnStop);
  clearInterval(timerId);
}

function switchActiveButton(enabled, disabled) {
  disabled.setAttribute('disabled', 'disabled');
  enabled.removeAttribute('disabled');
}

function runSwitcher() {
  const index = randomIntegerFromInterval(0, colors.length - 1);
  setTargetColor(colors[index]);
}

function setTargetColor(color) {
  target.style.cssText = `background-color: ${color};`;
}
