import { createContext } from "react";
import { UseCharactersStructurePrivate } from "../../hook/use.characters.private";

export const AppContextPrivate = createContext(
  {} as UseCharactersStructurePrivate
);
