// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

const secondsInput = document.querySelector('.delay-input');
const optionsButtons = document.querySelector('fieldset');
const submit = document.querySelector('.form');

secondsInput.addEventListener('input', handleInput);
submit.addEventListener('submit', handleSubmit);

function handleInput(evt) {
  const inputValue = evt.currentTarget.value;
  console.log(inputValue);
}

const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
});

function handleSubmit(evt) {
  evt.preventDefault();
  const form = evt.target;
  //   const inputValue = form.value;
  //   console.log(inputValue);
  const promise = new Promise((resolve, reject) => {
    const success = form.elements.state.value;
    const fail = form.elements.state.value;
  });
}

promise.then(
  value => {
    window.alert('yeees'); // "Success! Value passed to resolve function"
  },
  error => {
    window.alert('nooo'); // "Error! Error passed to reject function"
  }
);
