const cartButton = document.querySelector('.buttons__shopping-cart');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');

cartButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-open');
}