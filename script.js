'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

const OpenModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Here also we call openmodel class for button click event
//so when ever if we need to open the model we can call this function.
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', OpenModel);

// for (let i = 0; i < btnOpenModal.length; i++)
//   btnOpenModal[i].addEventListener('click', function () {
//     console.log('button clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// this way is not doing. it will makes repeat, so we create function an dapply to this

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');

//
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
///////////////////////////////////////
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
