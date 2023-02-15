import { Character } from "../character/character";
import { MOCK_Characters } from "../mock/characters";
import "./characterlist.scss";

export function CharacterList() {
  return (
    <section className="character-list">
      <ul className="character-list__character">
        {MOCK_Characters.map((item) => (
          <Character key={item.name} char={item}></Character>
        ))}
      </ul>
    </section>
  );
}
