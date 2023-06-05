// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


const refs = {
    inputDate: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
}

refs.startBtn.setAttribute('disabled', true)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < options.defaultDate) {
            window.alert('select normal date')
            return
        }
        refs.startBtn.removeAttribute("disabled");

        const timerId = setInterval(() => {
            const currentDate = new Date();
            const timeLeft = selectedDates[0] - currentDate
            if (timeLeft <= 0) {
                console.log('sosi negr')
                clearInterval(timerId)
                return
            }
            // console.log(timeLeft)
            const transformedDate = convertMs(timeLeft);
            // console.log(transformedDate)
            refs.days.textContent = transformedDate.days;
            refs.hours.textContent = transformedDate.hours;
            refs.minutes.textContent = transformedDate.minutes;
            refs.seconds.textContent = transformedDate.seconds;

        },1000)
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