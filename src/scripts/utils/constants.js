export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const popupEditProfileSelector = '.popup_type_edit';
export const popupEditProfile = document.querySelector('.popup_type_edit');
export const formElementEditProfile = popupEditProfile.querySelector('.popup-form');
export const cardSelector = '#card';
export const popupAddNewCardSelector = '.popup_type_new-card';
export const popupAddNewCard = document.querySelector('.popup_type_new-card');
export const formElementAddNewCard = popupAddNewCard.querySelector('.popup-form');
export const popupViewImageSelector = '.popup_type_image';
export const profileNameSelector = '.profile__name';
export const aboutProfileSelector = '.profile__about';
export const cardContainerSelector = '.elements__list';
export const nameInput = document.querySelector('#name-input');
export const aboutInput = document.querySelector('#about-input');

export const initialCards = [
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

export const settings = {
    inputSelector: '.popup-form__item',
    submitButtonSelector: '.popup-form__button',
    inactiveButtonClass: 'popup-form__button_inactive',
    inputErrorClass: 'popup-form__item_type_error',
    errorClass: 'popup-form__input-error_active'
};

