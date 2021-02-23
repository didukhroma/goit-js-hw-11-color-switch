import colors from './dataBase';
import { randomIntegerFromInterval } from './randomizer';

const refs = {
  bodyRef: document.querySelector('body'),
  startBtnRef: document.querySelector('button[data-action="start"]'),
  stopBtnRef: document.querySelector('button[data-action="stop"]'),
};
//------
let timerId = null;
//------
const changeColor = array => {
  let colorIndex = randomIntegerFromInterval(array.length - 1);
  refs.bodyRef.style.backgroundColor = array[colorIndex];
};
//------
const startHandler = () => {
  timerId = setInterval(changeColor, 1000, colors);
  refs.startBtnRef.removeEventListener('click', startHandler);
};
//------
const stopHandler = () => {
  clearInterval(timerId);
  startChange();
};
//------
const startChange = () =>
  refs.startBtnRef.addEventListener('click', startHandler);
//------
const stopChange = () => {
  refs.stopBtnRef.addEventListener('click', stopHandler);
};
//------
startChange();
stopChange();
//------
