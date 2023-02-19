import { useContext, useEffect } from "react";
import { AppContextPrivate } from "../../context/context private/context.private";
import { CharacterStructure } from "../../models/character/character";
import { Card } from "../card/card";

import "./favcardlist.scss";

export function FavCharacterList() {
  const { chars, loadChars } = useContext(AppContextPrivate);

  useEffect(() => {
    loadChars();
  }, [loadChars]);

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
