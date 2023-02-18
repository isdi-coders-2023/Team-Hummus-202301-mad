import { useState, useEffect, useCallback } from "react";
import {
  CharacterStructure,
  ProtoCharacterStructure,
} from "../models/character/character";
import { CardApiRepo } from "../services/private.repo/card.api.repo";

export type UseCharactersStructurePrivate = ReturnType<typeof useCharsPrivate>;
export function useCharsPrivate(repo: CardApiRepo) {
  const initialState: CharacterStructure[] = [];
  const [chars, setChars] = useState(initialState);
  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadChars = useCallback(async () => {
    try {
      const chars = await repo.loadCards();
      setChars(chars);
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  const addChar = async (char: ProtoCharacterStructure) => {
    try {
      const finalChar = await repo.createCard(char);
      setChars([...chars, finalChar]);
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const deleteChar = async (id: CharacterStructure["id"]) => {
    try {
      await repo.deleteCard(id);
      setChars(chars.filter((item) => item.id !== id));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const updateChar = async (char: CharacterStructure) => {
    try {
      const finalChar = await repo.updateCard(char);
      setChars(chars.map((item) => (item.id === char.id ? finalChar : item)));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  useEffect(() => {
    loadChars();
  }, [loadChars]);

  return {
    chars,
    loadChars,
    addChar,
    updateChar,
    deleteChar,
  };
}
