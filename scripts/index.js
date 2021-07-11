import Card from './Card.js';
import FormValidator from './FormValidator.js';
import initialCards from './initial-сards.js';
import settings from './settings.js';

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_edit');
const formElementEditProfile = popupEditProfile.querySelector('.popup-form');
const nameOfPerson = popupEditProfile.querySelector('.popup-form__item_el_name');
const aboutPerson = popupEditProfile.querySelector('.popup-form__item_el_about');

const popupAddNewCard = document.querySelector('.popup_type_new-card');
const formElementAddNewCard = popupAddNewCard.querySelector('.popup-form');
const nameOfLocation = popupAddNewCard.querySelector('.popup-form__item_el_name');
const imageLink = popupAddNewCard.querySelector('.popup-form__item_el_link');

const popupViewImage = document.querySelector('.popup_type_image');
const popupViewImagePicture = popupViewImage.querySelector('.popup__picture');
const popupViewImageName = popupViewImage.querySelector('.popup__location-name');

const profileName = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');
const cardContainer = document.querySelector('.elements__list');


const ESC_KEYCODE = 27;

// функции откртия и закрытия любого попапа

const openPopup = (popup) => {
    document.addEventListener('keydown', handleEscUp);
    popup.classList.toggle('popup_opened');
}

const closePopup = (popup) => {
    document.removeEventListener('keydown', handleEscUp);
    popup.classList.toggle('popup_opened');
}

// закрытие попапа при нажатии клавиши esc

const handleEscUp = (evt) => {
    if (evt.which === ESC_KEYCODE) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
};

// закрытие любого попапа при нажатии на кнопку и на оверлей

const setPopupCloseEventListeners = (popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon')) {
            closePopup(popup);
        }
    });
};

// открытие и закрытие попапа редактирования профиля

const openPopupEditProfile = () => {
    nameOfPerson.value = profileName.textContent;
    aboutPerson.value = aboutProfile.textContent;
    openPopup(popupEditProfile);
}

editButton.addEventListener('click', openPopupEditProfile);

setPopupCloseEventListeners(popupEditProfile);

// открытие и закрытие попапа добавления карточки

addButton.addEventListener('click', () => openPopup(popupAddNewCard));

setPopupCloseEventListeners(popupAddNewCard);

// редактирование данных профиля

const editProfile = evt => {
    evt.preventDefault();
    profileName.textContent = nameOfPerson.value;
    aboutProfile.textContent = aboutPerson.value;
    closePopup(popupEditProfile);
}

formElementEditProfile.addEventListener('submit', editProfile);

// отрисовка карточек из коробки, лайк и удаление

const createCard = (data) => {
    const openPopupViewImage = () => {
        openPopup(popupViewImage);
        popupViewImagePicture.src = data.link;
        popupViewImagePicture.alt = data.name;
        popupViewImageName.textContent = data.name;
    }

    const card = new Card(data, openPopupViewImage, '#card');
    const cardElement = card.generateCard();

    return cardElement;
}

setPopupCloseEventListeners(popupViewImage);

const addCard = (data, position = 'append') => {
    if (position === 'append') {
        cardContainer.append(createCard(data));
    } else cardContainer.prepend(createCard(data));
}

initialCards.forEach(data => {
    addCard(data);
});

// добавление новой карточки

const addNewCard = evt => {
    evt.preventDefault();
    addCard({ name: nameOfLocation.value, link: imageLink.value }, 'prepend');
    closePopup(popupAddNewCard);
    nameOfLocation.value = '';
    imageLink.value = '';
    addNewCardValidator.toggleButtonState();
}

formElementAddNewCard.addEventListener('submit', addNewCard);

// активация валидации

const editProfileValidator = new FormValidator(settings, formElementEditProfile);

editProfileValidator.enableValidation();

const addNewCardValidator = new FormValidator(settings, formElementAddNewCard);

addNewCardValidator.enableValidation();