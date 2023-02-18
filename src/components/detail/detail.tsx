import { DetailCardStructure } from "../../models/cards/card";
import { Link } from "react-router-dom";
type CardProps = {
  char: DetailCardStructure;
};

export const Detail = ({ char }: CardProps) => {
  return (
    <section className="detail">
      <div className="detail-div">
        <img src={char.image} alt="Character_Image" />
        <h2 className="detail-title">{char.name}.</h2>
        <ul className="detail-list">
          <li className="detail-title__li">{char.id}</li>
          <li className="detail-title__li">{char.name}</li>
          <li className="detail-title__li">{char.status}</li>
          <li className="detail-title__li">{char.species}</li>
          <li className="detail-title__li">{char.type}</li>
          <li className="detail-title__li">{char.gender}</li>
          <li className="detail-title__li">{char.location}</li>
        </ul>
      </div>
      <div className="actions">
        <Link to="/">
          <img
            src="./img/navigation-arrow-left.png"
            alt=""
            className="actions__arrow-back"
          />
        </Link>
        <p className="actions__erase">Erase from favourites</p>
      </div>
    </section>
  );
};
