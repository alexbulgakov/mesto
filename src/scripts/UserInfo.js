export default class UserInfo {
    constructor({ nameSelector, aboutSelector }) {
        this._profileName = document.querySelector(nameSelector);
        this._profileAbout = document.querySelector(aboutSelector);
    }

    getUserInfo() {
        return { name: this._profileName.textContent, about: this._profileAbout.textContent };
    }

    setUserInfo(data) {
         this._profileName.textContent = data['name-input'];
         this._profileAbout.textContent = data['about-input'];
    }
}