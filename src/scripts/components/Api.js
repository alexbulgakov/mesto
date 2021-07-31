export default class Api {
    constructor(options) {
        this._options = options;
    }

    _getRes(res) {
        if (res.ok) return res.json();
    }

    getUserInfo() {
        return fetch(`${this._options.baseUrl}/users/me`, {
            headers: this._options.headers
        })
            .then(res => this._getRes(res));
    }

    setUserInfo(info) {
        return fetch(`${this._options.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._options.headers,
            body: JSON.stringify({
                name: info.name,
                about: info.about
            })
        })
            .then(res => this._getRes(res));
    }

    getCards() {
        return fetch(`${this._options.baseUrl}/cards`, {
            headers: this._options.headers
        })
            .then(res => this._getRes(res));
    }

    addCard(data) {
        return fetch(`${this._options.baseUrl}/cards`, {
            method: 'POST',
            headers: this._options.headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            })
        })
            .then(res => this._getRes(res));
    }

    deleteCard(cardId) {
        return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._options.headers
        })
            .then(res => this._getRes(res));
    }
}