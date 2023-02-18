import { useContext, useEffect } from "react";
import { AppContext } from "../../context/context";
import { CardStructure } from "../../models/cards/card";
import "./card.scss";
type CardProps = {
  char: CardStructure;
};

export function Card({ char }: CardProps) {
  const { chars, loadChars } = useContext(AppContext);

  const handleFav = (current: boolean) => {
    let currentChar = chars.find((item) => item.id === char.id);
    currentChar!.isFavourite = !current;
    console.log(char);
  };

  useEffect(() => {
    loadChars();
  }, [loadChars]);

  return (
    <li className="character-colum">
      <div className="character-card">
        {char.isFavourite && (
          <button
            className="character-card__fav_btn--active"
            onClick={() => handleFav(char.isFavourite)}
          >
            <img
              className="character-card__fav_action__img"
              src="img\button-fav-active.png"
              alt="fav-button"
            ></img>
          </button>
        )}
        {!char.isFavourite && (
          <button
            className="character-card__fav_btn--hidden"
            onClick={() => handleFav(char.isFavourite)}
          >
            <img
              className="character-card__fav_action__img"
              src="img\button-fav.png"
              alt="fav-button"
            ></img>
          </button>
        )}
        <img className="character-card__img" src={char.image} alt={char.name} />
        <div className="character-card__info">
          <h2 className="character-card__info__name">{char.name}</h2>
        </div>
      </div>
    </li>
  );
}
