export default function About() {
  return (
    <section>
      <div>
        <article>
          <h2>What is this site for?</h2>
          <p>
            This web page uses The Rick and Morty API to display the different
            Rick and Morty characters and their information.{" "}
          </p>
        </article>
        <article>
          <h2>How does it work?</h2>
          <p>
            Home displays the first 12 characters, ordered by ID. Press the
            “next” and “previous” buttons to scroll through the character list.
            You can also press “Add to favorites” to store characters in your
            own list. When in your favorite character list, you can create and
            modify your own character!
          </p>
        </article>
        <article>
          <h2>Who are we?</h2>
          <p>
            We are The Hummus Team, part of the ISDI Coder's Madrid bootcamp.
            This is our 5th week challenge.
          </p>
        </article>
      </div>
      <p>We hope you enjoy our page!</p>
    </section>
  );
}
