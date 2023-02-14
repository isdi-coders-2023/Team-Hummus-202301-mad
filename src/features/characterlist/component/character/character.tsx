import { CharacterStructure } from "../model/character";
import "./character.scss";
type CharacterProps = {
  char: CharacterStructure;
};

export function Character({ char }: CharacterProps) {
  return (
    <li className="character-colum">
      <div className="character-card">
        <button>
          <img
            className="character-card__fav_action"
            src="img\button-fav.png"
            alt="fav-button"
          ></img>
        </button>
        <button className="character-card__fav_action">fav-icon</button>
        <img className="character-card__img" src={char.img} alt={char.name} />

        <div className="character-card__info">
          <h2 className="character-card__info__name">{char.name}</h2>
        </div>
      </div>
    </li>
  );
}
