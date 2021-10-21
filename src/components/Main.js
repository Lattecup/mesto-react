import React from 'react';

function Main(props) {
  return (
    <main className="content">
      
      <section className="profile">
        <div className="profile__avatar-container">
          <button type="button" className="profile__avatar-change-button" aria-label="Изменить аватар" onClick={props.onEditAvatar}></button>
          <img src="https" alt="Аватар" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить фотографию" onClick={props.onAddPlace}></button>
      </section>

      <section className="cards">
      </section>

    </main>
  );
};

export default Main;