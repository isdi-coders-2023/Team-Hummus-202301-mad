import { CharacterStructure } from "../model/character";

type CharacterProps = {
  char: CharacterStructure;
};

export function Character({ char }: CharacterProps) {
  return (
    <li className="character__colum">
      <div className="character_card">
        <button className="character_card__fav_action">fav-icon</button>
        <img className="character_card__img" src={char.img} alt={char.name} />

        <div className="character__char__info">
          <h2 className="character_card">{char.name}</h2>
        </div>
      </div>
    </li>
  );
}
