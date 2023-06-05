const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]")
}
let timerId = null;
let isActive = false;

refs.startBtn.addEventListener('click', () => {
    if (isActive) {
        return;
    }
    isActive = true;
    refs.body.style.backgroundColor = getRandomHexColor();
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    },1000)
})

refs.stopBtn.addEventListener('click', () => {
    isActive = false;
    clearInterval(timerId);
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
