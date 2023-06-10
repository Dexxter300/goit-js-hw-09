// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


const refs = {
    inputDate: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    resetBtn: document.querySelector('[data-reset]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
}

let startDate = null;
let timerId = null;

refs.startBtn.setAttribute('disabled', true)
refs.resetBtn.setAttribute('disabled', true)


const startTimer = () => {
  refs.startBtn.setAttribute('disabled', true)
  refs.resetBtn.removeAttribute("disabled");
  refs.inputDate.setAttribute('disabled', true)
  timerId = setInterval(() => {
    const currentDate = new Date();
    const timeLeft = startDate - currentDate
    if (timeLeft <= 0) {
      refs.resetBtn.setAttribute('disabled', true)
      refs.inputDate.removeAttribute("disabled");
      alert('Time is over')
      clearInterval(timerId)
      return
    }
    // console.log(timeLeft)
    const transformedDate = addLeadingZero(convertMs(timeLeft));
     // console.log(transformedDate)
    refs.days.textContent = transformedDate.days;
    refs.hours.textContent = transformedDate.hours;
    refs.minutes.textContent = transformedDate.minutes;
    refs.seconds.textContent = transformedDate.seconds;

  }, 1000)
}
refs.startBtn.addEventListener('click', startTimer)
refs.resetBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.inputDate.removeAttribute("disabled");
  refs.startBtn.setAttribute('disabled', true);
  refs.resetBtn.setAttribute('disabled', true);
  refs.days.textContent = '00';
  refs.hours.textContent = '00';
  refs.minutes.textContent = '00';
  refs.seconds.textContent = '00';

})

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
        if (selectedDates[0] < options.defaultDate) {
            window.alert('select future date') 
            return
      }
      startDate = selectedDates[0];
      refs.startBtn.removeAttribute("disabled");


  },
};


flatpickr(refs.inputDate, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  let days = value.days;
  let hours = value.hours;
  let minutes = value.minutes;
  let seconds = value.seconds;
  // console.log(value.days.toString().length)
  if (value.days.toString().length < 2) {
    days = value.days.toString().padStart(2, '0');
  }


  if (value.hours.toString().length < 2) {
   hours = value.hours.toString().padStart(2, '0');
  }


  if (value.minutes.toString().length < 2) {
    minutes = value.minutes.toString().padStart(2, '0');
  }
  

  if (value.seconds.toString().length < 2) {
    seconds = value.seconds.toString().padStart(2, '0');
  }
   



  return {days, hours, minutes, seconds}
  }