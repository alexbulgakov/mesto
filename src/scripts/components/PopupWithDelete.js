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

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', this._callbackSubmitForm);
    }
}