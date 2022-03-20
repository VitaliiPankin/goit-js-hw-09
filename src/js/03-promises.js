import Notiflix from 'notiflix';

Notiflix.Notify.init({
  useIcon: false,
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}

const refs = {
  form: document.querySelector('.form')
 }

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
  event.preventDefault();

  const { delay, step, amount } = event.target;
  let delayForPromise = Number(delay.value);
  const stepForPromise = Number(step.value);
  const amountForPromise = Number(amount.value);
  
    for (let i = 1; i <= amountForPromise; i+=1){
    
    createPromise(i, delayForPromise)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    delayForPromise += stepForPromise
    
  }
      
}



