export function Instructions() {
  return (
    <section>
      <h2>How to use?</h2>
      <div>
        <p>There are a few parameters you can filter characters with: </p>
        <p>
          <span>NAME:</span> filter by given name.
        </p>
        <p>
          <span>STATUS:</span> filter by the given status (alive, dead or
          unknown).
        </p>
        <p>
          <span> SPECIES: </span>filter by the given species.
        </p>
        <p>
          <span>TYPE:</span> filter by the given type.
        </p>
        <p>
          <span>GENDER: </span> filter by the given gender (female, male,
          genderless or unknown).
        </p>
        <div>
          <p>example</p>
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
