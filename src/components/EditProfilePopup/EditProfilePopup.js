import PopupWithForm from '../PopupWithForm/PopupWithForm';

function EditProfilePopup(props) {
  return (
  <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
        <div className="form__input-block">
          <input className="form__auth-input form__input_el_name" type="text" id="-change-name" name="change-name" placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="form__input-error name-input-error"></span>
        </div>
        <div className="form__input-block">
          <input className="form__auth-input form__input_el_email" type="email" id="change-email" name="change-email" placeholder="E-mail" minLength="2" maxLength="40" required />
          <span className="form__input-error email-input-error"></span>
        </div>
  </PopupWithForm>)
}

export default EditProfilePopup;