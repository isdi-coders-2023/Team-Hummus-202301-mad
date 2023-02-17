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

  /*  Hasta no tener la api repo local no se usa
  const addChar = async (char: CharacterStructure) => {
    try {
      const finalChar = await repo.createChar(char);
      setChars([...char, finalChar]);
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const deleteChar = async (id: CharacterStructure["id"]) => {
    try {
      await repo.deleteChar("id");
      setChars(chars.filter((item) => item.id !== id));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const updateChar = async (task: CharacterStructure) => {
    try {
      const finalChar = await repo.updateChar(chars);
      setChars(chars.map((item) => (item.id === chars.id ? finalChar : item)));
    } catch (error) {
      handlerError(error as Error);
    }
  }; */

  useEffect(() => {
    loadChars();
  }, [loadChars]);

  return {
    chars,
    loadChars,
  };
}
