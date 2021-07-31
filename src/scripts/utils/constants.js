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
export const profileAvatarSelector = '.profile__avatar';
export const popupDeleteCardSelector = '.popup_type_delete';
export const popupChangeAvatarSelector = '.popup_type_new-avatar';
export const editAvatarButton = document.querySelector('.profile__avatar-btn');
export const formElementChangeAvatar = document.querySelector(popupChangeAvatarSelector).querySelector('.popup-form');

export const settings = {
    inputSelector: '.popup-form__item',
    submitButtonSelector: '.popup-form__button',
    inactiveButtonClass: 'popup-form__button_inactive',
    inputErrorClass: 'popup-form__item_type_error',
    errorClass: 'popup-form__input-error_active'
};

export const options = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26',
    headers: {
        authorization: 'de3be763-36f0-4323-96ef-5a3ebe72ac8d',
        'Content-Type': 'application/json'
    }
};

