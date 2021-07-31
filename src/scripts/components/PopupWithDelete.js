import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
    constructor({ popupSelector, callbackSubmitForm }) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm;
        this._formElement = this._popup.querySelector('.popup-form');
    }

    open(card) {
        this.card = card;
        super.open();
    }

    loader(status) {
        this._formButton = this._formElement.querySelector('.popup-form__button');
        if (status) {
            this._formButtonText = this._formButton.textContent;
            this._formButton.textContent = 'Удаление...';
        } else this._formButton.textContent = this._formButtonText;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => this._callbackSubmitForm(evt));
    }
}