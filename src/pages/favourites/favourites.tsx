import "./favourite.scss";
import { FavCharacterList } from "../../components/favourite_cardlist/favcardlist";
import { Link } from "react-router-dom";

export default function Favourites() {
  return (
    <section className="favourites">
      <div className="favourites__header">
        <div className="favourites__header__title">
          <h2 className="favourites__title">My favourite characters</h2>
        </div>
        <div className="favourites__header__link">
          <Link className="favourites__add-link" to="/add" relative="path">
            + Add new
          </Link>
        </div>
      </div>
      <FavCharacterList></FavCharacterList>
    </section>
  );
}
