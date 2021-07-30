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
            headers: this._options.headers,
            body: JSON.stringify({
                name: info.name,
                about: info.about
            })
        })
            .then(res => this._getRes(res));
    }
}