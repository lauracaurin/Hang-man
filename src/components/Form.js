const Form = ({ handleOnChange, valueInput }) => {
  const handleInputOnChange = (ev) => {
    handleOnChange(ev.target.value)
  }

  const handleKeyDown = (ev) => {
    ev.target.setSelectionRange(0, 1);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="title" htmlFor="last-letter">Escribe una letra:</label>
      <input
        autoFocus
        autoComplete="off"
        className="form__input"
        maxlength="1"
        type="text"
        name="last-letter"
        id="last-letter"
        onKeyDown={handleKeyDown}
        onChange={handleInputOnChange}
        value={valueInput}
      />
    </form>
  )
}
export default Form