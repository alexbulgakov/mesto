import Card from './Card.js';
import FormValidator from './FormValidator.js';

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
const addNewCardButton = popupAddNewCard.querySelector('.popup-form__button');

const popupViewImage = document.querySelector('.popup_type_image');
const popupViewImagePicture = popupViewImage.querySelector('.popup__picture');
const popupViewImageName = popupViewImage.querySelector('.popup__location-name');

const profileName = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');
const cardContainer = document.querySelector('.elements__list');

const ESC_KEYCODE = 27;

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

// общая функция откртия и закрытия любого попапа

const togglePopup = (popup) => {
    if (popup.classList.contains('popup_opened')) {
        document.removeEventListener('keydown', handleEscUp);
        popup.classList.toggle('popup_opened');
    } else {
        document.addEventListener('keydown', handleEscUp);
        popup.classList.toggle('popup_opened');
    }
}

// закрытие попапа при нажатии клавиши esc

const handleEscUp = (evt) => {
    if (evt.which === ESC_KEYCODE) {
        const activePopup = document.querySelector('.popup_opened');
        togglePopup(activePopup);
    }
};

// закрытие любого попапа при нажатии на кнопку и на оверлей

const closePopup = (popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon')) {
            togglePopup(popup);
        }
    });
};

// открытие и закрытие попапа редактирования профиля

const openPopupEditProfile = () => {
    nameOfPerson.value = profileName.textContent;
    aboutPerson.value = aboutProfile.textContent;
    togglePopup(popupEditProfile);
}

editButton.addEventListener('click', openPopupEditProfile);

closePopup(popupEditProfile);

// открытие и закрытие попапа добавления карточки

addButton.addEventListener('click', () => togglePopup(popupAddNewCard));

closePopup(popupAddNewCard);

// редактирование данных профиля

const editProfile = evt => {
    evt.preventDefault();
    profileName.textContent = nameOfPerson.value;
    aboutProfile.textContent = aboutPerson.value;
    togglePopup(popupEditProfile);
}

formElementEditProfile.addEventListener('submit', editProfile);

// отрисовка карточек из коробки, лайк и удаление

const createCard = (location, image) => {
    const card = new Card(location, image, '#card');
    const cardElement = card.generateCard();
    const elementPicture = cardElement.querySelector('.element__picture');

    const openPopupViewImage = () => {
        togglePopup(popupViewImage);
        popupViewImagePicture.src = image;
        popupViewImagePicture.alt = location;
        popupViewImageName.textContent = location;
    }

    elementPicture.addEventListener('click', openPopupViewImage);

    return cardElement;
}

closePopup(popupViewImage);

const addCard = (location, image, position = 'append') => {
    if (position === 'append') {
        cardContainer.append(createCard(location, image));
    } else cardContainer.prepend(createCard(location, image));
}

initialCards.forEach(item => {
    addCard(item.name, item.link);
});

// добавление новой карточки

const addNewCard = evt => {
    evt.preventDefault();
    addCard(nameOfLocation.value, imageLink.value, 'prepend');
    togglePopup(popupAddNewCard);
    nameOfLocation.value = '';
    imageLink.value = '';
    addNewCardButton.classList.add('popup-form__button_inactive');
}

formElementAddNewCard.addEventListener('submit', addNewCard);

// активация валидации
const formList = Array.from(document.querySelectorAll('.popup-form'));

formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    
    const validator = new FormValidator({
        inputSelector: '.popup-form__item',
        submitButtonSelector: '.popup-form__button',
        inactiveButtonClass: 'popup-form__button_inactive',
        inputErrorClass: 'popup-form__item_type_error',
        errorClass: 'popup-form__input-error_active'
    }, formElement);

    validator.enableValidation();
});
