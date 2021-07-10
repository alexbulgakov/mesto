export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._formElement = formElement;
    }

    _showInputError(_inputElement, _errorMessage) {
        this._errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.add(this._inputErrorClass);
        this._errorElement.textContent = _errorMessage;
        this._errorElement.classList.add(this._errorClass);
    };

    _hideInputError(_inputElement) {
        this._errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.remove(this._inputErrorClass);
        this._errorElement.classList.remove(this._errorClass);
        this._errorElement.textContent = '';
    };

    _checkInputValidity(_inputElement) {
        if (!_inputElement.validity.valid) {
            this._showInputError(_inputElement, _inputElement.validationMessage);
        } else {
            this._hideInputError(_inputElement);
        }
    };

    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState(this._inputList, this._buttonElement);
        this._inputList.forEach((_inputElement) => {
            _inputElement.addEventListener('input', () => {
                this._checkInputValidity(_inputElement);
                this._toggleButtonState(this._inputList, this._buttonElement);
            });
        });
    };

    _hasInvalidInput(_inputList) {
        return _inputList.some((_inputElement) => {
            return !_inputElement.validity.valid;
        });
    };

    _toggleButtonState(_inputList, _buttonElement) {
        if (this._hasInvalidInput(_inputList)) {
            _buttonElement.classList.add(this._inactiveButtonClass);
        } else {
            _buttonElement.classList.remove(this._inactiveButtonClass);
        }
    };

    enableValidation() {
        this._setEventListeners();
    };
}