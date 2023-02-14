import "./cover.scss";

export const Cover = () => {
  return (
    <div className="cover">
      <div className="cover-info">
        <h2 className="cover-info__welcome">
          <span className="span-welcome">Welcome</span> to the Rick and morty
          character fanpage.
        </h2>
        <p>
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
          <img src="/img/arrow-small-right.png" alt="" />
        </div>
        <p>Properties you can filter:</p>
        <p>
          name, status (alive, dead or unknown), species, gender (male, female,
          genderless, unknown)
        </p>
      </div>
      <div>
        <img src="/img/wallpapersden 1.png" alt="" />
      </div>
    </div>
  );
};
