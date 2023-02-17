import { useContext, useEffect } from "react";
import { AppContext } from "../../context/context public/context";
import { CharacterStructure } from "../../models/character/character";
import { Card } from "../card/card";

import "./cardlist.scss";

export function CharacterList() {
  const { chars } = useContext(AppContext);

  /*  useEffect(() => {
    loadChars();
  }, [loadChars]); */

  return (
    <section className="character-list">
      <ul className="character-list__character">
        {chars?.map((item: CharacterStructure) => (
          <Card key={item.id} char={item}></Card>
        ))}
      </ul>
    </section>
  );
}
