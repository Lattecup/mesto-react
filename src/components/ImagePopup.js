import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__figure-container">
        <figure className="popup__figure">
          <img src="#" alt="Изображение" className="popup__image" />
          <figcaption className="popup__image-caption"></figcaption>
        </figure>
        <button type="button" className="popup__close-button" aria-label="Закрыть"></button>
      </div>
    </div>
  );
};

export default ImagePopup;