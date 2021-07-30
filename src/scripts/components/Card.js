export default class Card {
    constructor({ data, handleCardClick, handleCardDelete }, cardSelector) {
        this._image = data.link;
        this._location = data.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._likes = data.likes;
        this._numberOfLikes = data.likes.length;
        this._handleCardDelete = handleCardDelete
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _addLikeHandler(evt) {
        evt.target.classList.toggle('element__like_active');
    }

    deleteCardHandler() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', (evt) => {
            this._addLikeHandler(evt);
        });

        this._elementPicture.addEventListener('click', () => {
            this._handleCardClick();
        });

        this._deleteButton.addEventListener('click', () => {
            this._handleCardDelete();
        })
    }

    generateCard() {
        this._element = this._getTemplate();
        this._elementPicture = this._element.querySelector('.element__picture');
        this._likeButton = this._element.querySelector('.element__like');
        this._deleteButton = this._element.querySelector('.element__delete');
        this._likesCounter = this._element.querySelector('.element__likes-counter');
        this._setEventListeners();

        this._likesCounter.textContent = this._numberOfLikes;

        this._elementPicture.src = this._image;
        this._elementPicture.alt = this._location;
        this._element.querySelector('.element__location').textContent = this._location;

        return this._element;
    }
}