const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  createBtn: document.querySelector('button')
}
let timeDelay = 0;
let delayStep = 0;
let promisesAmount = 0;

refs.form.addEventListener('submit', (event) => {
  event.preventDefault();
  timeDelay = Number(refs.delay.value);
  delayStep = Number(refs.step.value);
  promisesAmount = Number(refs.amount.value);
  if (timeDelay < 0 || delayStep < 0 || promisesAmount < 0) {
    alert('pls enter only positive values')
    return
  }
  refs.form.reset();
  for (let i = 1; i <= promisesAmount; i++) {
    createPromise(i, timeDelay)
    .then(({position, delay}) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({position, delay}) => {
    console.log(`❌ Rejected promise ${position} in ${delay} ms`);
  });
  timeDelay += delayStep;
  }
})



function createPromise(position, delay) {
  // console.log(timeDelay)
  // timeDelay += delayStep;

  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay})
    // Fulfill
  } else {
     reject({position, delay})
    // Reject
  }
  }, delay)
  })
  return promise
}
 