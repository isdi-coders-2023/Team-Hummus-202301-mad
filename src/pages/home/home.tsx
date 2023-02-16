import { CharacterList } from "../../components/cardlist/cardlist";
import { Cover } from "../../components/cover/cover";
import { NavigationArrows } from "../../components/navigation-arrows/navigation-arrows";

export default function Home() {
  return (
    <>
      <Cover></Cover>
      <CharacterList></CharacterList>
      <NavigationArrows></NavigationArrows>
    </>
  );
}
