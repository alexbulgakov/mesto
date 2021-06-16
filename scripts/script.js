const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_edit');
const formElementEditProfile = popupEditProfile.querySelector('.popup-form');
const nameOfPerson = popupEditProfile.querySelector('.popup-form__item_el_name');
const aboutPerson = popupEditProfile.querySelector('.popup-form__item_el_about');
const closeButtonEditProfile = popupEditProfile.querySelector('.popup__close-icon');

const popupAddNewCard = document.querySelector('.popup_type_new-card');
const formElementAddNewCard = popupAddNewCard.querySelector('.popup-form');
const nameOfLocation = popupAddNewCard.querySelector('.popup-form__item_el_name');
const imageLink = popupAddNewCard.querySelector('.popup-form__item_el_link');
const closeButtonAddNewCard = popupAddNewCard.querySelector('.popup__close-icon');

const popupViewImage = document.querySelector('.popup_type_image');
const closeButtonViewImage = popupViewImage.querySelector('.popup__close-icon');
const popupViewImagePicture = popupViewImage.querySelector('.popup__picture');
const popupViewImageName = popupViewImage.querySelector('.popup__location-name');

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
    const activePopup = document.querySelector('.popup_opened');
    if (evt.which === 27) {
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

closeButtonViewImage.addEventListener('click', () => togglePopup(popupViewImage));

const cardTemplate = document.querySelector('#card').content;
const addLikeHandler = evt => {
    evt.target.classList.toggle('element__like_active');
}
const deleteCardHandler = evt => {
    evt.target.closest('.element').remove();
}

const addCard = (location, image, position = 'append') => {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__picture').src = image;
    cardElement.querySelector('.element__location').textContent = location;
    cardElement.querySelector('.element__like').addEventListener('click', addLikeHandler);

    if (position === 'append') {
        cardContainer.append(cardElement);
    } else cardContainer.prepend(cardElement);

    cardElement.querySelector('.element__delete').addEventListener('click', deleteCardHandler);

    const openPopupViewImage = () => {
        togglePopup(popupViewImage);
        popupViewImagePicture.src = image;
        popupViewImageName.textContent = location;
    }

    cardElement.querySelector('.element__picture').addEventListener('click', openPopupViewImage);
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
}

formElementAddNewCard.addEventListener('submit', addNewCard);
