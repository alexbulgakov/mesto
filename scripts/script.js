const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-icon');
const formElement = document.querySelector('.edit-form');
const popup = document.querySelector('.popup');
const nameOfPerson = document.querySelector('.edit-form__item_el_name');
const aboutPerson = document.querySelector('.edit-form__item_el_about');
const profileName = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');
const cardContainer = document.querySelector('.elements__list');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

const openPopup = () => {
    popup.classList.add('popup_opened');
    nameOfPerson.value = profileName.textContent;
    aboutPerson.value = aboutProfile.textContent;
}

editButton.addEventListener('click', openPopup);

const closePopup = () => {
    popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

const editProfile = evt => {
    evt.preventDefault();
    profileName.textContent = nameOfPerson.value;
    aboutProfile.textContent = aboutPerson.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', editProfile);

const addCard = (location, image) => {
    const cardTemplate = document.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__picture').src = image;
    cardElement.querySelector('.element__location').textContent = location;
    cardContainer.append(cardElement);
}

initialCards.forEach(item => {
    addCard(item.name, item.link);
});