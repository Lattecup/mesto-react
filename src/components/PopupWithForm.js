import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? `popup popup_opened` : `popup popup_type_${props.name}`}>
      <div className="popup__container">
        <form className="form form-edit" name={props.name}>
          <h2 className="form__heading">{props.title}</h2>
          <fieldset className="form__fieldset">
            {props.children}
          </fieldset>
          <button type="submit" className="form__submit-button">{props.buttonText}</button>
          <button type="button" className="popup__close-button" aria-label="Закрыть" onClick={props.onClose}></button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;