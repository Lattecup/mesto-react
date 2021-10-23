import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  };

  return (
    <div className="card">
      <button type="button" className="card__remove-button"></button>
      <img src={props.card.link} alt={props.card.name} className="card__image" onClick={handleClick} />
      <div className="card__content">
        <h2 className="card__caption">{props.card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like-button" aria-label="Поставить лайк"></button>
          <span className="card__like-counter">{props.card.likes.length}</span>          
        </div>
      </div>
    </div>
  );
};

export default Card;