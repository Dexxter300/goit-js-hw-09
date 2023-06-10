const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]")
}
let timerId = null;
let isActive = false;
refs.stopBtn.setAttribute('disabled', true)

refs.startBtn.addEventListener('click', () => {
    if (isActive) {
        return;
    }
    isActive = true;
    refs.body.style.backgroundColor = getRandomHexColor();
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    refs.startBtn.setAttribute('disabled', true)
    refs.stopBtn.removeAttribute("disabled");
})

refs.stopBtn.addEventListener('click', () => {
    isActive = false;
    clearInterval(timerId);
    refs.stopBtn.setAttribute('disabled', true)
    refs.startBtn.removeAttribute("disabled");
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
