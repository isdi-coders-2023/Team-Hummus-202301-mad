import { CardStructure } from "../../models/cards/card";

type CardProps = {
  char: CardStructure;
};

export const Detail = ({ char }: CardProps) => {
  return (
    <section className="detail">
      <div className="detail-img">
        <img src="" alt="" />
      </div>
      <div>
        <h2 className="detail-title">{char.name}</h2>
        <ul>
          <li className="detail-title__li">{char.id}</li>
          <li className="detail-title__li">{char.name}</li>
          <li className="detail-title__li"></li>
          <li className="detail-title__li"></li>
          <li className="detail-title__li"></li>
          <li className="detail-title__li"></li>
          <li className="detail-title__li"></li>
        </ul>
      </div>
      <div className="actions">
        <a href="">
          <img src="" alt="" className="actions__arrow-back" />
        </a>
        <p className="actions__erase">Erase from favourites</p>
      </div>
    </section>
  );
};
