import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../context/context public/context";

export const Detail = () => {
  const { id } = useParams();
  const { chars } = useContext(AppContext);
  const chars2 = chars.find((item) => item.id === Number(id));

  return (
    <section className="detail">
      <div className="detail-img">
        <img src={chars2?.image} alt="Character_Image" />
      </div>
      <div>
        <h2 className="detail-title">{chars2?.name}.</h2>
        <ul>
          <li className="detail-title__li">{chars2?.id}</li>
          <li className="detail-title__li">{chars2?.status}</li>
          <li className="detail-title__li">{chars2?.species}</li>
          <li className="detail-title__li">{chars2?.type}</li>
          <li className="detail-title__li">{chars2?.gender}</li>
          <li className="detail-title__li">{chars2?.name}</li>
          <li className="detail-title__li">{chars2?.location?.name}</li>
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
