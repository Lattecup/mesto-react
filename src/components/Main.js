import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .catch((err) => {
        console.log(err);
      });
  });

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => {
        console.log(err);
      });
  })

  return (
    <main className="content">
      
      <section className="profile">
        <div className="profile__avatar-container">
          <button type="button" className="profile__avatar-change-button" aria-label="Изменить аватар" onClick={props.onEditAvatar}></button>
          <img alt="Аватар" className="profile__avatar" src={userAvatar} />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить фотографию" onClick={props.onAddPlace}></button>
      </section>

      <section className="cards">
        {cards.map((card) => (
          <Card 
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
          />
        ))};
      </section>

    </main>
  );
};

export default Main;