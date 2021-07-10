export default class Card {
    constructor(location, image, cardSelector) {
        this._image = image;
        this._location = location;
        this._cardSelector = cardSelector;
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
    
    _deleteCardHandler(evt) {
        evt.target.closest('.element').remove();
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._addLikeHandler(evt);
        });

        this._element.querySelector('.element__delete').addEventListener('click', (evt) => {
            this._deleteCardHandler(evt);
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._elementPicture = this._element.querySelector('.element__picture');

        this._elementPicture.src = this._image;
        this._elementPicture.alt = this._location;
        this._element.querySelector('.element__location').textContent = this._location;

        return this._element;
    }
}