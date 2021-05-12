let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-icon');
let formElement = document.querySelector('.edit-form');
let popup = document.querySelector('.popup');
let nameOfPerson = document.querySelector('.edit-form__item_el_name');
let aboutPerson = document.querySelector('.edit-form__item_el_about');
let profileName = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');

function openPopup() {
    popup.classList.add('popup_opened');
    nameOfPerson.value = profileName.textContent;
    aboutPerson.value = aboutProfile.textContent;
}

editButton.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

function editProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameOfPerson.value;
    aboutProfile.textContent = aboutPerson.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', editProfile);