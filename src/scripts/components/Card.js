export default class Card {
    constructor({ data, handleCardClick, handleCardDelete, handleCardLike, handleCardDeleteLike, userIdCurrent }, cardSelector) {
        this._image = data.link;
        this._location = data.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._likes = data.likes;
        this._numberOfLikes = data.likes.length;
        this._handleCardDelete = handleCardDelete;
        this.id = data._id;
        this._privateId = data.owner._id;
        this._userId = userIdCurrent;
        this._handleCardLike = handleCardLike;
        this._handleCardDeleteLike = handleCardDeleteLike;
    }

    myCard() {
        if (this._privateId === this._userId) {
            return true;
        } else return false;
    }

    changeLikesCounter(likesCounter) {
        this._likesCounter.textContent = likesCounter;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _addLikeHandler() {
        this._likeButton.classList.toggle('element__like_active');
    }

    deleteCardHandler() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            if (this._likeButton.classList.contains('element__like_active')) {
                this._handleCardDeleteLike();
            } else this._handleCardLike();
            this._addLikeHandler();
        });

        this._elementPicture.addEventListener('click', () => {
            this._handleCardClick();
        });
        if (this.myCard()) {
            this._deleteButton.addEventListener('click', () => {
                this._handleCardDelete();
            })
        }

    }

    generateCard() {
        this._element = this._getTemplate();
        this._elementPicture = this._element.querySelector('.element__picture');
        this._likeButton = this._element.querySelector('.element__like');
        this._deleteButton = this._element.querySelector('.element__delete');
        this._likesCounter = this._element.querySelector('.element__likes-counter');

        if (!this.myCard()) {
            this._deleteButton.remove();
        }

        this.changeLikesCounter(this._likesCounter);

        if (this._likes.find((like) => like._id === this._userId)) {
            this._addLikeHandler();
        }

        this._setEventListeners();

        this._likesCounter.textContent = this._numberOfLikes;

        this._elementPicture.src = this._image;
        this._elementPicture.alt = this._location;
        this._element.querySelector('.element__location').textContent = this._location;

        return this._element;
    }
}