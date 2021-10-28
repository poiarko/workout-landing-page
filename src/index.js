import '../style.sass'

document.querySelector('.header__btn').addEventListener('click', () => {
  document.querySelector('.header__inner-wrap').classList.add('header__inner-wrap_active');
  document.querySelector('.overlay').classList.add('overlay__blur');
});

document.querySelector('.overlay').addEventListener('click', function () {
  document.querySelector('.header__inner-wrap').classList.remove('header__inner-wrap_active');
  document.querySelector('.overlay').classList.remove('overlay__blur');
});



let form = document.getElementById('form');
let email = document.getElementById('email');

function validateEmail(email) {
  let regularExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regularExp.test(String(email).toLowerCase());
}

function validateCountry(country) {
  let regularExp = new RegExp('.co$');
  return regularExp.test(String(country).toLowerCase());
}

form.onsubmit = function () {
  let emailValue = email.value;

  if (emailValue === '') {
    email.classList.add('footer__form-input_error');
    console.log('input not filled')
  } else {
    email.classList.remove('footer__form-input_error');
  }

  if (!validateEmail(emailValue)) {
    console.log('email not valid');
    email.classList.add('footer__form-input_error');
    return false;
  } else {
    email.classList.remove('footer__form-input_error');
  }

  if (validateCountry(emailValue)) {
    email.classList.add('footer__form-input_error');
    return false;
  } else {
    email.classList.remove('footer__form-input_error');
  }
}
