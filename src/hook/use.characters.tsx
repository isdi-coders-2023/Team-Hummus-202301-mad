import { useState, useEffect, useCallback } from "react";
import { CharacterStructure } from "../models/character/character";
import { CharacterApiRepo } from "../services/public.repo/character.api.repo";

export type UseCharactersStructure = ReturnType<typeof useChars>;
export function useChars(repo: CharacterApiRepo) {
  const initialState: CharacterStructure[] = [];
  const [chars, setChars] = useState(initialState);
  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadChars = useCallback(async () => {
    try {
      const chars = await repo.loadChars();
      setChars(chars);
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  useEffect(() => {
    loadChars();
  }, [loadChars]);

  return {
    chars,
    loadChars,
  };
}
