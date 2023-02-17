import { CardStructure } from "../../models/cards/card";
import "./card.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
type CardProps = {
  char: CardStructure;
};

export function Card({ char }: CardProps) {
  /*Activar esta función cuando tengamos contexto const handleFav = (current: boolean) => {
    char.isFavourite = !current;
    console.log(char);
  }; */
  const { id } = useParams();
  const [character, setCharacter] = useState();
  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/" + id;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacter(data.character);
      });
  });

  return (
    <li className="character-colum">
      <div className="character-card">
        {
          /* Implementar botones cuando tengamos contexto {char.isFavourite && (
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

        {!char.isFavourite && (*/
          <button
            className="character-card__fav_btn--hidden"
            /* Implementar botones cuando tengamos contextoonClick={() => handleFav(char.isFavourite)} */
          >
            <img
              className="character-card__fav_action__img"
              src="img\button-fav.png"
              alt="fav-button"
            ></img>
          </button> /*Implementar botones cuando tengamos contexto
        )} */
        }
        <img className="character-card__img" src={char.image} alt={char.name} />
        <div className="character-card__info">
          <h2 className="character-card__info__name">{char.name}</h2>
        </div>
      </div>
    </li>
  );
}
