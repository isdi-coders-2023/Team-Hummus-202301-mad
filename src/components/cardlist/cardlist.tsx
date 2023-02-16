import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Card } from "../card/card";

import "./cardlist.scss";

export function CharacterList() {
  const { chars } = useContext(AppContext);

  return (
    <section className="character-list">
      <ul className="character-list__character">
        {chars.map((item, i) => (
          <Card key={i++} char={item}></Card>
        ))}
      </ul>
    </section>
  );
}
