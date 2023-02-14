import "./cover.scss";

export const Cover = () => {
  return (
    <div className="cover">
      <div className="cover-info">
        <h2 className="cover-info__welcome">
          <p className="cover-info__1p">
            <span className="span-welcome">Welcome</span> to the Rick and Morty
            character fanpage.
          </p>
        </h2>
        <p className="cover-info__p">
          Explore each character presented in the series. Check out their
          information and create whatever comes in your imagination.
        </p>
        <div className="cover-info__search">
          <input
            type="text"
            name="search"
            id=""
            className="cover-info__searchbar"
          />
          <img
            src="/img/arrow-small-right.png"
            alt=""
            className="cover-info__arrow"
          />
        </div>
        <p className="cover-info__properties">Properties you can filter:</p>
        <p className="cover-info__properties">
          name, status (alive, dead or unknown), species, gender (male, female,
          genderless, unknown)
        </p>
      </div>
    </div>
  );
};
