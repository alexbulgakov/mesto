export default class Card {
    constructor({ data, handleCardClick }, cardSelector) {
        this._image = data.link;
        this._location = data.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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

    _deleteCardHandler() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', (evt) => {
            this._addLikeHandler(evt);
        });

        this._deleteButton.addEventListener('click', () => {
            this._deleteCardHandler();
        });

        this._elementPicture.addEventListener('click', () => {
            this._handleCardClick();
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._elementPicture = this._element.querySelector('.element__picture');
        this._likeButton = this._element.querySelector('.element__like');
        this._deleteButton = this._element.querySelector('.element__delete');
        this._setEventListeners();

        this._elementPicture.src = this._image;
        this._elementPicture.alt = this._location;
        this._element.querySelector('.element__location').textContent = this._location;

        return this._element;
    }
}