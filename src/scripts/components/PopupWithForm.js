import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, callbackSubmitForm }) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm;
        this._formElement = this._popup.querySelector('.popup-form');
        this._inputList = this._formElement.querySelectorAll('.popup-form__item');
    }

    loader(status) {
        this._formButton = this._formElement.querySelector('.popup-form__button');
        if (status) {
            this._formButtonText = this._formButton.textContent;
            this._formButton.textContent = 'Cохранение...';
        } else this._formButton.textContent = this._formButtonText;
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', () => this._callbackSubmitForm(this._getInputValues()));
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}