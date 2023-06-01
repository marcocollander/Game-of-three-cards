const Form = () => {
  return (
    <form className="form" action="/" method="post">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Wyniki:</legend>
        <div className="form__field">
          <label className="form__field-item" htmlFor="numberOfAttempts">
            Ilość prób:
          </label>
          <input
            className="form__field-item"
            id="numberOfAttempts"
            name="numberOfAttempts"
          />
        </div>

        <div className="form__field">
          <label className="form__field-item" htmlFor="numberOfHits">
            Ilość trafień:
          </label>
          <input
            className="form__field-item"
            id="numberOfHits"
            name="numberOfHits"
          />
        </div>

        <div className="form__field">
          <label className="form__field-item" htmlFor="hitPercentage">
            % trafień:
          </label>
          <input
            className="form__field-item"
            id="hitPercentage"
            name="hitPercentage"
          />
        </div>

        <input className="form__submit" type="submit" value="Wyślij" />
      </fieldset>
    </form>
  )
}

export default Form;