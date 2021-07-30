import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import popupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Api from '../scripts/components/Api.js';
import './index.css';

import {
    editButton,
    addButton,
    popupEditProfileSelector,
    formElementEditProfile,
    cardSelector,
    popupAddNewCardSelector,
    formElementAddNewCard,
    popupViewImageSelector,
    profileNameSelector,
    aboutProfileSelector,
    cardContainerSelector,
    nameInput,
    aboutInput,
    initialCards,
    settings,
    options,
    profileAvatarSelector
} from '../scripts/utils/constants.js'

const popupViewImageClass = new popupWithImage(popupViewImageSelector);
popupViewImageClass.setEventListeners();

const userInfo = new UserInfo({ nameSelector: profileNameSelector, aboutSelector: aboutProfileSelector, avatarSelector: profileAvatarSelector });

const api = new Api(options);
api.getUserInfo()
    .then(res => {
        userInfo.setUserAvatar(res.avatar);
        userInfo.setUserInfo({
            name: res.name,
            about: res.about
        });
    })
    .catch((error) => {
        console.log(error);
    })

const initUserInfo = () => {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    aboutInput.value = userData.about;
}

const popupWithFormEdit = new PopupWithForm({
    popupSelector: popupEditProfileSelector,
    callbackSubmitForm: (data) => {
        userInfo.setUserInfo({ name: data['name-input'], about: data['about-input'] });
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
    editProfileValidator.hideErrors();
    popupWithFormEdit.open();
});

addButton.addEventListener('click', () => {
    addNewCardValidator.hideErrors();
    addNewCardValidator.toggleButtonState();
    popupAddCard.open();
})