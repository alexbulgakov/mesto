export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this._ESC_KEYCODE = 27;
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.which === this._ESC_KEYCODE) {
            this.close();
        }
    }

    _handleOverlayClose = (evt) => {
        if (evt.target === this._popup) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close-icon').addEventListener('click', () => this.close());
        this._popup.addEventListener('click', this._handleOverlayClose);
    }

}