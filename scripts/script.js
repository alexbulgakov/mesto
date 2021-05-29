const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_type_edit');
const formElementEdit = popupEdit.querySelector('.popup-form');
const nameOfPerson = popupEdit.querySelector('.popup-form__item_el_name');
const aboutPerson = popupEdit.querySelector('.popup-form__item_el_about');
const closeButtonEdit = popupEdit.querySelector('.popup__close-icon');

const popupNewCard = document.querySelector('.popup_type_new-card');
const formElementNew = popupNewCard.querySelector('.popup-form');
const nameOfLocation = popupNewCard.querySelector('.popup-form__item_el_name');
const imageLink = popupNewCard.querySelector('.popup-form__item_el_link');
const closeButtonNew = popupNewCard.querySelector('.popup__close-icon');

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

// открытие и закрытие попапа редактирования профиля

const openPopupEdit = () => {
    popupEdit.classList.add('popup_opened');
    nameOfPerson.value = profileName.textContent;
    aboutPerson.value = aboutProfile.textContent;
}

editButton.addEventListener('click', openPopupEdit);

const closePopupEdit = () => {
    popupEdit.classList.remove('popup_opened');
}

closeButtonEdit.addEventListener('click', closePopupEdit);

// открытие и закрытие попапа добавления карточки

const openPopupNewCard = () => {
    popupNewCard.classList.add('popup_opened');
}

addButton.addEventListener('click', openPopupNewCard);

const closePopupNewCard = () => {
    popupNewCard.classList.remove('popup_opened');
}

closeButtonNew.addEventListener('click', closePopupNewCard);

// редактирование данных профиля

const editProfile = evt => {
    evt.preventDefault();
    profileName.textContent = nameOfPerson.value;
    aboutProfile.textContent = aboutPerson.value;
    popupEdit.classList.remove('popup_opened');
}

formElementEdit.addEventListener('submit', editProfile);

// отрисовка карточек из коробки

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