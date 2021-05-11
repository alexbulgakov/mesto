let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-icon');
let saveButton = document.querySelector('.edit-form__button');
let popup = document.querySelector('.popup');
let nameOfPerson = document.querySelector('.edit-form__item_el_name');
let aboutPerson = document.querySelector('.edit-form__item_el_about');
let profileName = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');

editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
    nameOfPerson.value = 'Жак-Ив Кусто';
    aboutPerson.value = 'Исследователь океана';
});

closeButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});

saveButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    profileName.textContent = nameOfPerson.value;
    aboutProfile.textContent = aboutPerson.value;
    popup.classList.remove('popup_opened');
});