import React from "react";
import { Link } from "react-router-dom";
import { CharacterStructure } from "../../models/character/character";
import "./card.scss";

export function Card({ char }: { char: CharacterStructure }) {


  return (
    <li className="character-colum">
      <div className="character-card">
        <button className="character-card__fav_btn--hidden">
          <img
            className="character-card__fav_action__img"
            src="img\button-fav.png"
            alt="fav-button"
          ></img>
        </button>

        <Link to={`/detail/${char.id}`}>
          <img
            className="character-card__img"
            src={char.image}
            alt={char.name}
          />
          <div className="character-card__info">
            <h2 className="character-card__info__name">{char.name}</h2>
          </div>
        </Link>
      </div>
    </li>
  );
}
