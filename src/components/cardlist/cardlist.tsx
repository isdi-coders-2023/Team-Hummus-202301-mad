import { useContext, useEffect } from "react";
import { AppContext } from "../../context/context";
import { Card } from "../card/card";

import "./cardlist.scss";

export function CharacterList() {
  const { chars, loadChars } = useContext(AppContext);

  useEffect(() => {
    loadChars();
  }, [loadChars]);

  return (
    <section className="character-list">
      <ul className="character-list__character">
        {chars.map((item) => (
          <Card key={item.id} char={item}></Card>
        ))}
      </ul>
    </section>
  );
}
