import Card from './Card.js';
import Section from './Section.js';
import popupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
import FormValidator from './FormValidator.js';
import initialCards from './initial-сards.js';
import settings from './settings.js';

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popupEditProfileSelector = '.popup_type_edit';
const popupEditProfile = document.querySelector('.popup_type_edit');
const formElementEditProfile = popupEditProfile.querySelector('.popup-form');

const cardSelector = '#card';

const popupAddNewCardSelector = '.popup_type_new-card';
const popupAddNewCard = document.querySelector('.popup_type_new-card');
const formElementAddNewCard = popupAddNewCard.querySelector('.popup-form');

const popupViewImageSelector = '.popup_type_image';

const profileNameSelector = '.profile__name';
const aboutProfileSelector = '.profile__about';
const cardContainerSelector = '.elements__list';

const nameInput = document.querySelector('#name-input');
const aboutInput = document.querySelector('#about-input');

const popupViewImageClass = new popupWithImage(popupViewImageSelector);
popupViewImageClass.setEventListeners();

const userInfo = new UserInfo({ nameSelector: profileNameSelector, aboutSelector: aboutProfileSelector });

const initUserInfo = () => {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    aboutInput.value = userData.about;
}

const popupWithFormEdit = new PopupWithForm({
    popupSelector: popupEditProfileSelector,
    callbackSubmitForm: (data) => {
        userInfo.setUserInfo(data);
        popupWithFormEdit.close();
    }
});

popupWithFormEdit.setEventListeners();

const popupAddCard = new PopupWithForm({
    popupSelector: popupAddNewCardSelector,
    callbackSubmitForm: (data) => {
        initialCardList.setItem(createCard(data), 'prepend');
        popupAddCard.close();
    }
});

popupAddCard.setEventListeners();

const createCard = (item) => {
    const card = new Card(
        {
            data: item,
            handleCardClick: () => {
                popupViewImageClass.open(item.link, item.name)
            }
        },
        cardSelector
    );

    return card.generateCard();
}

const initialCardList = new Section({
    items: initialCards,
    renderer: (item) => {
        initialCardList.setItem(createCard(item));
    }
}, cardContainerSelector);

initialCardList.renderItems();


// активация валидации

const editProfileValidator = new FormValidator(settings, formElementEditProfile);

editProfileValidator.enableValidation();

const addNewCardValidator = new FormValidator(settings, formElementAddNewCard);

addNewCardValidator.enableValidation();

// слушатели для открытия попапов редактирования профиля и добавления новой карточки

editButton.addEventListener('click', () => {
    initUserInfo();
    editProfileValidator.toggleButtonState();
    popupWithFormEdit.open();
});

addButton.addEventListener('click', () => {
    addNewCardValidator.toggleButtonState();
    popupAddCard.open();
})