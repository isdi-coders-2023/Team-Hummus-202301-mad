import { MOCK_Cards } from "../../mocks/cards";
import { Card } from "../card/card";

import "./cardlist.scss";

export function CharacterList() {
  return (
    <section className="character-list">
      <ul className="character-list__character">
        {MOCK_Cards.map((item, i) => (
          <Card key={i++} char={item}></Card>
        ))}
      </ul>
    </section>
  );
}
