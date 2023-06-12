function PopupWithForm({children, name, title, buttonText, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <h2 className="popup__header">{title}</h2>
          <form className="form popup__form" name={name}>
            {children}
            <button className="form__logIn-button" type="submit">{buttonText}</button>
          </form>
          <button className="popup__close-button" type="button" onClick={onClose}></button>
        </div>
    </div>
  )
}
export default PopupWithForm;