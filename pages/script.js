let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-icon');
let popup = document.querySelector('.popup');

editButton.addEventListener('click', function(){
    popup.classList.add('popup_opened');
});

closeButton.addEventListener('click', function(){
    popup.classList.remove('popup_opened');
});