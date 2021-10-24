import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm 
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input id="name-input" type="text" className="form__input form__input_type_title" name="name" placeholder="Введите имя" required minLength="2" maxLength="40" />
        <span className="form__input-error name-input-error"></span>
        <input id="job-input" type="text" className="form__input form__input_type_subtitle" name="about" placeholder="Введите профессию" required minLength="2" maxLength="200" />
        <span className="form__input-error job-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        buttonText="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input id="place-input" type="text" className="form__input form__input_type_place" name="place" placeholder="Название" required minLength="2" maxLength="30" />
        <span className="form__input-error place-input-error"></span>
        <input id="link-input" type="url" className="form__input form__input_type_link" name="link" placeholder="Ссылка на картинку" required />
        <span className="form__input-error link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input id="avatar-input" type="url" className="form__input form__input_type_link" name="link" placeholder="Ссылка на картинку" required />
        <span className="form__input-error avatar-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="confirm-delete"
        title="Вы уверены?"
        buttonText="Да"
      />
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
  </>
  );
}

export default App;
