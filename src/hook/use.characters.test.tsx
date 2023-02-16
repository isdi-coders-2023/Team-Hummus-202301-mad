import { CharacterApiRepo } from "../services/public.repo/character.api.repo";
import { useChars } from "./use.characters";

const mockRepo = {
  loadChars: jest.fn(),
} as unknown as CharacterApiRepo;

const TestComponent = function () {
  const { chars, loadChars } = useChars(mockRepo);

  return (
    <>
      <button onClick={() => loadChars()}></button>
    </>
  );
};
