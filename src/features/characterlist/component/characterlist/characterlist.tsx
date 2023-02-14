import { Character } from "../character/character";
import { MOCK_Characters } from "../mock/characters";

export function CharacterList() {
  return (
    <section className="character_list">
      <ul className="character">
        {MOCK_Characters.map((item) => (
          <Character key={item.name} char={item}></Character>
        ))}
      </ul>
    </section>
  );
}
