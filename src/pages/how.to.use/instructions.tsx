import "./instructions.scss";

export default function Instructions() {
  return (
    <section className="howto-section">
      <h2 className="howto-section__title">How to use?</h2>
      <div className="howto-section__div">
        <p className="howto-section__p">
          There are a few parameters you can filter characters with:{" "}
        </p>
        <p className="howto-section__p">
          <span className="howto-section__span">NAME:</span> filter by given
          name.
        </p>
        <p className="howto-section__p">
          <span className="howto-section__span">STATUS:</span> filter by the
          given status (alive, dead or unknown).
        </p>
        <p className="howto-section__p">
          <span className="howto-section__span"> SPECIES: </span>filter by the
          given species.
        </p>
        <p className="howto-section__p">
          <span className="howto-section__span">TYPE:</span> filter by the given
          type.
        </p>
        <p className="howto-section__p">
          <span className="howto-section__span">GENDER: </span> filter by the
          given gender (female, male, genderless or unknown).
        </p>
        <div>
          <p className="howto-section__p howto-section__example">Example: </p>
          <form action="submit">
            <input type="text" id="text" />
            <label htmlFor="text"></label>
            <button></button>
          </form>
        </div>
      </div>
    </section>
  );
}
