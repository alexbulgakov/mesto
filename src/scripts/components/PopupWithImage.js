import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupViewImagePicture = this._popup.querySelector('.popup__picture');
        this._popupViewImageName = this._popup.querySelector('.popup__location-name');
    }

    open(link, name) {
        this._popupViewImagePicture.src = link;
        this._popupViewImagePicture.alt = name;
        this._popupViewImageName.textContent = name;

        super.open();
    }
}