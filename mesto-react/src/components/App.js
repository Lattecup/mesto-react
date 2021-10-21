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

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm 
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input id="name-input" type="text" className="form__input form__input_type_title" name="name" placeholder="Введите имя" required minLength="2" maxLength="40" />
            <span className="form__input-error name-input-error"></span>
            <input id="job-input" type="text" className="form__input form__input_type_subtitle" name="info" placeholder="Введите профессию" required minLength="2" maxLength="200" />
            <span className="form__input-error job-input-error"></span>
        </>
        }
      />
      <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input id="name-input" type="text" className="form__input form__input_type_title" name="name" placeholder="Введите имя" required minLength="2" maxLength="40" />
            <span className="form__input-error name-input-error"></span>
            <input id="job-input" type="text" className="form__input form__input_type_subtitle" name="info" placeholder="Введите профессию" required minLength="2" maxLength="200" />
            <span className="form__input-error job-input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input id="avatar-input" type="url" className="form__input form__input_type_link" name="link" placeholder="Ссылка на картинку" required />
            <span className="form__input-error avatar-input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name="confirm-delete"
        title="Вы уверены?"
      />
      <ImagePopup />
  </>
  );
}

export default App;
