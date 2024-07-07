import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let delayValue = 0;

const secondsInput = document.querySelector('.delay-input');
const submit = document.querySelector('.form');

secondsInput.addEventListener('input', handleInput);
submit.addEventListener('submit', handleSubmit);

function handleInput(evt) {
  delayValue = evt.currentTarget.value;
}

function handleSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  const state = form.elements.state.value;

  const delay = delayValue;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(value => {
      iziToast.success({
        title: '✅',
        message: value,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: '❌',
        message: error,
        position: 'topRight',
      });
    });
}
