import "./about.scss";

export default function About() {
  return (
    <section>
      <div className="about-div">
        <article className="article-what">
          <h2 className="article-what__h">What is this site for?</h2>
          <p className="article-what__p">
            This web page uses The Rick and Morty API to display the different
            Rick and Morty characters and their information.{" "}
          </p>
        </article>
        <article className="article-how">
          <h2 className="article-how__h">How does it work?</h2>
          <p className="article-how__p">
            Home displays the first 12 characters, ordered by ID. Press the
            “next” and “previous” buttons to scroll through the character list.
            You can also press “Add to favorites” to store characters in your
            own list. When in your favorite character list, you can create and
            modify your own character!
          </p>
        </article>
        <article className="article-who">
          <h2 className="article-who__h">Who are we?</h2>
          <p className="article-who__p">
            We are The Hummus Team, part of the ISDI Coder's Madrid bootcamp.
            This is our 5th week challenge.
          </p>
        </article>
      </div>
      <p className="we-hope">We hope you enjoy our page!</p>
    </section>
  );
}
