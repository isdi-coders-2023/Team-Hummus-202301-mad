import { CharacterStructure } from "../model/character";
import "./character.scss";
type CharacterProps = {
  char: CharacterStructure;
};

export function Character({ char }: CharacterProps) {
  //Activar esta función cuando tengamos contexto
  /* const handleFav = (current: boolean) => {
    char.isFavourite = !current;
    console.log(char);
  }; */

  return (
    <li className="character-colum">
      <div className="character-card">
        {
          //Implementar botones cuando tengamos contexto
          /* {char.isFavourite && (
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
            /* onClick={() => handleFav(char.isFavourite)} */
          >
            <img
              className="character-card__fav_action__img"
              src="img\button-fav.png"
              alt="fav-button"
            ></img>
          </button> /*
        )} */
        }
        <img className="character-card__img" src={char.img} alt={char.name} />
        <div className="character-card__info">
          <h2 className="character-card__info__name">{char.name}</h2>
        </div>
      </div>
    </li>
  );
}
