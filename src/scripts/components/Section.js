export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(items) {
        items.forEach(item => this._renderer(item))
    }

    setItem(element, position = 'append') {
        if (position === 'append') {
            this._container.append(element);
        } else this._container.prepend(element);
    }
}