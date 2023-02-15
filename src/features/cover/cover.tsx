import { JsxElement } from "typescript";
import "./cover.scss";

export const Cover = () => {
  return (
    <div className="cover">
      <div className="cover-info__search1">
        <input
          type="text"
          name="search"
          id=""
          className="cover-info__searchbar"
        />
        <button type="submit">SEARCH</button>
      </div>
      <div className="cover__m-image"></div>
      <div className="cover-info">
        <h2 className="cover-info__welcome cover-info__1p">
          <div>
            <span className="span-welcome">Welcome </span>
            to the
          </div>
          <div> Rick and Morty</div>
          <div>character fanpage.</div>
        </h2>
        <p className="cover-info__p">
          Explore each character presented in the series. Check out their
          information and create whatever comes in your imagination.
        </p>
        <div className="cover-info__search2">
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
